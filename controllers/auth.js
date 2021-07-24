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

        const { insertId } = await MySQL.execQuery( sqlCreateUser, [ username, last_name, email, hashPass, ] );
        
        token = await JWTGenerator( insertId, username );

        res.status( 201 ).json({
            ok: true,
            msg: 'Usuario creado exitosamente',
            uid: insertId,
            name: username,
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

        const passValidator = bcrypt.compareSync( password, user.password );

        if ( !passValidator ) {
            return res.status( 400 ).json({
                ok: false,
                msg: 'El correo o la contraseña son incorrectas ( contraseña es diferente )',
            });
        }

        token = await JWTGenerator( user.uid, user.username );
        res.status( 200 ).json({
            ok: true,
            uid: user.uid,
            name: user.username,
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






module.exports = {
    createUser,
    loginUser,
}
