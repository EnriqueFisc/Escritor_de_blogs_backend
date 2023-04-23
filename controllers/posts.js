const express = require( 'express' ); 
const path = require( 'path' );
const fs = require( 'fs' );

const { MySQL } = require( '../database/mysql' );


const getPosts = async( req, res = express.response ) => {

    const uid = req.uid;

    const sql = `
        SELECT * FROM posts WHERE user_id = ? ORDER BY date DESC;
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
    const {
        title,
        body,
        imageUrl
    } = req.body;
    const date = new Date().getTime();
    const sql = `
        INSERT INTO posts ( title, body, date, user_id, imageUrl )
        VALUE( ?, ?, ?, ?, ? ); 
    `;
    
    try {

        const { insertId } = await MySQL.execQuery( sql, [ title, body, date, uid, imageUrl ], );

        res.status( 200 ).json({
            ok: true,
            post: { id: insertId, title, body, date, imageUrl, uid,  }
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
    const { title, body, imageUrl } = req.body;

    const updatePostSql = `
        UPDATE posts SET title = ?, body = ?, imageUrl = ? WHERE id = ?;
    `;
    const findSqlQuery = `
        SELECT * FROM posts WHERE id = ?;
    `;

    try {

        const resp = await MySQL.execQuery( findSqlQuery, [ postID ], );

        if ( resp.length === 0 ) {
            return res.status( 500 ).json({
                ok: false, 
                msg: 'La publicación que se intenta actualizar no existe',
            });
        }

        const { imageUrl:imgDoc } = resp[0];
        let imgFilename = ( imgDoc ) ? imgDoc.split('/')[ imgDoc.split('/').length - 1 ] : null;
        
        const img = ( !!imageUrl ) ? imageUrl : imgDoc;
        console.log( img, imgDoc );
        if ( img !== imgDoc ) {
            if ( !!imgFilename ) {
                fs.unlinkSync( path.resolve( __dirname, `../public/uploads/img/${ imgFilename }` ) );
            }
        }
        
        await MySQL.execQuery( updatePostSql, [ title, body, img, postID ], );
        
        res.status( 200 ).json({
            ok: true,
            msg: 'La publicación se actualizó con exito'
        });
        

    } catch ( err ) {
        console.log( err );
        return res.status( 500 ).json({
            ok: false, 
            msg: 'Error interno del sistema, por favor vuelva a intertarlo más tarde',
        });
    }

}

const uploadImg = async( req, res = express.response ) => {

    const prevImg = req.body.prevImg;
    const imgUrl = ( !!req.file ) ? 
            `${ process.env.HOST }:${ process.env.PORT }/uploads/img/${req.file.filename}` 
            : null ;

    if ( !!prevImg ) {
        let fileName = prevImg.split('/')[ prevImg.split('/').length - 1 ]
        fs.unlinkSync( path.resolve( __dirname, `../public/uploads/img/${ fileName }` ) );
    }
    
    res.status(200).json({
        ok: true,
        imgUrl
    })
}

const deletePost = async( req, res = express.response ) => {

    const { id:postID } = req.params;
    const deleteSqlQuery = `
        DELETE FROM posts WHERE id = ?;
    `;
    const findSqlQuery = `
        SELECT * FROM posts WHERE id = ?;
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
    uploadImg,
}