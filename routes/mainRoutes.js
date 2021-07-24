const express = require( 'express' );
const app = express();




app.use( '/api/auth', require( './auth' ) );
app.use( '/api/post', require( './post' ) );
app.use( '/api/blog/posts', require( './blog' ) );


module.exports = app;