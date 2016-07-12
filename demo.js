var istextfile = require( './index.js' );
if( istextfile( './demo.tar.gz' ) ) {
    console.log( 'this is a text file' );
} else {
    console.log( 'this is a binary file' );
}