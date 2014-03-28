/*jshint node:true */
var qunit = require( 'qunit' );

qunit.setup( {
	log: {
		summary: true,
		errors: true
	}
} );

qunit.run( {
	code: {
		path: './index.js',
		namespace: 'CX'
	},
	tests: [
		'./tests/CXSegmenter.test.js'
	]
}, function ( err, report ) {
	if ( err || report.failed ) {
		process.exit( 1 );
	}
} );
