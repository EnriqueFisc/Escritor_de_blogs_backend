const express = require( 'express' );
const bcrypt = require( 'bcrypt' );

const { MySQL } = require( '../database/mysql' );
const { JWTGenerator } = require('../helpers/jwt');


const createUser = async( req, res = express.response ) => {

    let token;
    const { username, last_name, email, password } = req.body;
    const sqlFindUser = `
        SELECT * FROM Users WHERE email = ?;`;
    const sqlCreateUser = `
        INSERT INTO Users ( username, last_name, email, password )
        VALUE ( ?, ?, ?, ? ); `;

    try {
        
        const resp = await MySQL.execQuery( sqlFindUser, [ email ] );

        if ( resp.length > 0 ) {
            return res.status( 400 ).json({
                ok: false, 
                msg: 'Este correo electrónico ya esta en uso',
            });
        }

        const salt = bcrypt.genSaltSync();
        const hashPass = bcrypt.hashSync( password, salt );
        const fullName = `${ username.split(' ')[0] } ${ last_name.split(' ')[0] }`;
        const { insertId } = await MySQL.execQuery( sqlCreateUser, [ username, last_name, email, hashPass, ] );
        
        token = await JWTGenerator( insertId, fullName );

        res.status( 201 ).json({
            ok: true,
            msg: 'Usuario creado exitosamente',
            uid: insertId,
            name: fullName,
            token
        });

    } catch ( err ) {
        if ( err ) {
            console.log( err );
            return res.status( 500 ).json({
                ok: false, 
                msg: 'Error interno del sistema, por favor avise al administrador',
            });
        }
    }
    
}

const loginUser = async( req, res = express.response ) => {
    
    let token;
    const { email, password } = req.body; 
    const sql = `
        SELECT * FROM Users WHERE email = ?;
    `;
    const escapeSql = [ email ];
    
    try {
        
        const resp = await MySQL.execQuery( sql, escapeSql );

        if ( resp.length === 0 ) {
            return res.status( 400 ).json({
                ok: false, 
                msg: 'El correo o la contraseña son incorrectas ( email no encontrado )',
            });
        }

        const user = { ...resp[ 0 ] };
        const fullName = `${ user.username.split(' ')[0] } ${ user.last_name.split(' ')[0] }`;
        const passValidator = bcrypt.compareSync( password, user.password );

        if ( !passValidator ) {
            return res.status( 400 ).json({
                ok: false,
                msg: 'El correo o la contraseña son incorrectas ( contraseña es diferente )',
            });
        }

        token = await JWTGenerator( user.uid, fullName );
        res.status( 200 ).json({
            ok: true,
            uid: user.uid,
            name: fullName,
            token,
        });

    } catch ( err ) {
        console.log( err );
        return res.status( 500 ).json({
            ok: false, 
            msg: 'Error interno del sistema, por favor avise al administrador',
        });
    }
}


const renewToken = async( req, res = response ) => {

    // console.log( req );

    const uid = req.uid;
    const name = req.name;

    const token = await JWTGenerator( uid, name );


    res.json({
        ok: true,
        uid,
        name,
        token
    })

}



module.exports = {
    createUser,
    loginUser,
    renewToken,
}
