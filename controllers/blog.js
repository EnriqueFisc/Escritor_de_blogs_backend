const express = require( 'express' );

const { MySQL } = require('../database/mysql');


const getBlogsPosts = async( req, res= express.response ) => {

    const { initLimit } = req.params;
    const sql = `
        SELECT * FROM Posts ORDER BY date DESC LIMIT ?,3;
    `;

    try {

        const resp = await MySQL.execQuery( sql, [ Number( initLimit ) ], );

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


module.exports= {
    getBlogsPosts
}