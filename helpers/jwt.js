const jwt = require( 'jsonwebtoken' );


const JWTGenerator = ( uid, name ) => {

    const payload = { uid, name };

    return new Promise( ( resolve, reject )  => {
        jwt.sign( payload, process.env.SECRET_JWT_SEED, {
        expiresIn: '2h',
        }, ( err, token ) => {

            if ( err ) {
                console.log( err );            
                reject( 'Ocurrió un error al crear el token' );
            }

            resolve( token );

        });
    });
};

module.exports = {
    JWTGenerator
};
