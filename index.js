const express = require( 'express' );
const bodyParser = require( 'body-parser' );
const path = require( 'path' );
const cors = require( 'cors' );

require( 'dotenv' ).config();

const { MySQL } = require( './database/mysql' );

MySQL.instance;

const app = express();

app.use( express.static( 'public' ) );

const pagePath = path.resolve( __dirname, 'public/index.html' );
app.use( cors() );  


// app.use( express.json() );
//Set Request Size Limit
app.use(bodyParser.json({ limit: "50mb" }))
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }))

app.use( require('./routes/mainRoutes') );

app.get( '*', ( req, res ) => {
    res.sendFile( pagePath );
});

app.listen( process.env.PORT, () => {
    console.log( `Server on port: ${ process.env.PORT }` );
});
