'use strict';

module.exports = {
	// CX Server port
	port: 8080,
	// Log directory
	logDir: 'log',
	// Parsoid API URL
	'parsoid.api': 'http://parsoid-lb.eqiad.wikimedia.org',
	// Apertium web API URL
	'mt.apertium.api': 'http://apertium.wmflabs.org',
	// Use SSL?
	secure: false,
	// SSL key filename
	sslkey: null,
	// SSL cert filename
	cert: null
};