const express = require( 'express' ); 
const path = require( 'path' );
const fs = require( 'fs' );

const { MySQL } = require( '../database/mysql' );


const getPosts = async( req, res = express.response ) => {

    const uid = req.uid;

    const sql = `
        SELECT * FROM Posts WHERE user_id = ?;
    `;

    try {

        const resp = await MySQL.execQuery( sql, [ uid ], );

        res.status( 200 ).json({
            ok: true,
            resp,
        });

    } catch ( err ) {
        console.log( err );
        return res.status( 500 ).json({
            ok: false, 
            msg: 'Error interno del sistema, por favor vuelva a intertarlo más tarde',
        });
    }
}

const createPost = async( req, res = express.response ) => {

    const uid = req.uid;
    const imgUrl = ( !!req.file ) ? 
            `${ process.env.HOST }:${ process.env.PORT }/uploads/img/${req.file.filename}` 
            : null ;
    const {
        title,
        body,
    } = req.body;
    const date = new Date().getTime();
    const sql = `
        INSERT INTO Posts ( title, body, date, user_id, imageUrl )
        VALUE( ?, ?, ?, ?, ? ); 
    `;
    
    try {

        await MySQL.execQuery( sql, [ title, body, date, uid, imgUrl ], );

        res.status( 200 ).json({
            ok: true,
            msg: 'El post se publicó exitosamente'
        });

    } catch ( err ) {
        console.log( err );
        return res.status( 500 ).json({
            ok: false, 
            msg: 'Error interno del sistema, por favor vuelva a intertarlo más tarde',
        });
    }

}

const updatePost = async( req, res = express.response ) => {

    const { id:postID } = req.params;
    const { title, body } = req.body;
    const imgUrl = ( !!req.file ) ? 
            `${ process.env.HOST }:${ process.env.PORT }/uploads/img/${req.file.filename}` 
            : null ;
    const updatePostSql = `
        UPDATE Posts SET title = ?, body = ?, imageUrl = ? WHERE id = ?;
    `;
    const findSqlQuery = `
        SELECT * FROM Posts WHERE id = ?;
    `;

    try {

        const resp = await MySQL.execQuery( findSqlQuery, [ postID ], );

        if ( resp.length === 0 ) {
            return res.status( 500 ).json({
                ok: false, 
                msg: 'La publicación que se intenta actualizar no existe',
            });
        }

        const { imageUrl } = resp[0];
        let imgFilename = ( imageUrl ) ? imageUrl.split('/')[ imageUrl.split('/').length - 1 ] : null;

        
        await MySQL.execQuery( updatePostSql, [ title, body, imgUrl, postID ], );
        
        res.status( 200 ).json({
            ok: true,
            msg: 'La publicación se actualizó con exito'
        });
        
        if ( imgFilename ) {
            fs.unlinkSync( path.resolve( __dirname, `../public/uploads/img/${ imgFilename }` ) );
        }

    } catch ( err ) {
        console.log( err );
        return res.status( 500 ).json({
            ok: false, 
            msg: 'Error interno del sistema, por favor vuelva a intertarlo más tarde',
        });
    }

}

const deletePost = async( req, res = express.response ) => {

    const { id:postID } = req.params;
    const deleteSqlQuery = `
        DELETE FROM Posts WHERE id = ?;
    `;
    const findSqlQuery = `
        SELECT * FROM Posts WHERE id = ?;
    `;

    try {

        const resp = await MySQL.execQuery( findSqlQuery, [ postID ], );

        if ( resp.length === 0 ) {
            return res.status( 500 ).json({
                ok: false, 
                msg: 'La publicación que se intenta eliminar no existe',
            });
        }

        const { imageUrl } = resp[0];
        let imgFilename = ( imageUrl ) ? imageUrl.split('/')[ imageUrl.split('/').length - 1 ] : null;

        if ( imgFilename ) {
            fs.unlinkSync( path.resolve( __dirname, `../public/uploads/img/${ imgFilename }` ) );
        }

        await MySQL.execQuery( deleteSqlQuery, [ postID ], );

        res.status( 200 ).json({
            ok: true,
            msg: 'La publicación se eliminó con exito' 
        });

    } catch ( err ) {
        console.log( err );
        return res.status( 500 ).json({
            ok: false, 
            msg: 'Error interno del sistema, por favor vuelva a intertarlo más tarde',
        });
    }

}

module.exports = {
    getPosts,
    createPost,
    updatePost,
    deletePost,
}