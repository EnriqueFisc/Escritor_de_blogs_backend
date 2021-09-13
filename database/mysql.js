const mysql =  require( 'mysql' );


class MySQL {

    static _instance;

    cnn;
    connected = false;

    constructor() {

        console.log( 'MySQL singleton has been initializing' );

        this.cnn = mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASS,
            database: process.env.DB_NAME,
        });


        this.connectDb()

    }

    static get instance() {

        return this._instance || (this._instance = new this());

    }

    static execQuery( query, valuesScape = [], ) {

        return new Promise( ( resolve, reject ) => {
            this._instance.cnn.query( query, valuesScape, ( err, result ) => {

                if ( err ) {
                    console.log( 'Error en query' );                
                    console.log( err );
                    reject( err );
                }

                resolve( result );
  
            });
        });
            
    }

    connectDb () {
        this.cnn.connect( ( err ) => {
            if ( err ) {
                console.log( err.message );
            }
            this.connected = true;
            console.log('Database conection stablished');
        })
    }

}


module.exports = { 
    MySQL 
};
