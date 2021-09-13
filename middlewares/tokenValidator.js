const { response } = require( 'express' );
const jwt = require( 'jsonwebtoken' );

const tokenValidator = ( req, res = response, next ) => {

    const token = req.header( 'x-token' );

    if ( !token ) {
        return res.status( 401 ).json({
            ok: false,
            msg: 'No hay token en la petición',
        });
    }

    try {
        
        const { uid, name } = jwt.verify( token, process.env.SECRET_JWT_SEED );

        // if ( !name ) {
        //     return res.status( 401 ).json({
        //         ok: false,
        //         msg: 'Token no valido',
        //     })
        // }

        req.uid = uid;
        req.name = name;
        
    } catch ( err ) {
        console.log( err );
        return res.status( 401 ).json({
            ok: false,
            msg: 'Token no valido',
        })
    }

    next();

};



module.exports = {
    tokenValidator,
};
