// 
//  app.js
//  vt2
//  
//  Created by Christian Tietze on 2011-03-24.
//  Copyright 2011. All rights reserved.
// 

// -------------------------------------------------------------------------- //

var RUNTESTS = true;

// -------------------------------------------------------------------------- //

if (RUNTESTS) {
	// Test Suite must refer to a filename which must be the same as the
	// suite's name
	var TEST_SUITE = 'core'; // Unit Tests
	//var TEST_SUITE = 'ui';   // Graphical Test
	//var TEST_SUITE = 'test'; // Misc.
	//var TEST_SUITE = '';     // defaults to: Graphical Test
	
	//Include test environment
	Ti.include(
		'/test/views/main.js',
		'/helium.js',
		['/test/suites/', TEST_SUITE, '.js'].join("") // include test suite
	);
	
	he.test.run(TEST_SUITE);
} else {
	Ti.include('/app/app.js');
}
