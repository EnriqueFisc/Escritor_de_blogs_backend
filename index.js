const express = require( 'express' );
const path = require( 'path' );

require( 'dotenv' ).config();

const { MySQL } = require( './database/mysql' );

MySQL.instance;

const app = express();

app.use( express.static( 'public' ) );

const pagePath = path.resolve( __dirname, 'public/index.html' );
app.use( express.json() );

app.use( require('./routes/mainRoutes') );

app.get( '*', ( req, res ) => {
    res.sendFile( pagePath );
});

app.listen( process.env.PORT, () => {
    console.log( `Server on port: ${ process.env.PORT }` );
});
