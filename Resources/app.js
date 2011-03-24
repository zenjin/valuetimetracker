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
	//var TEST_SUITE = 'core'; // Unit Tests
	//var TEST_SUITE = ''; // Graphical Test
	Ti.include('/tests/run.js');
} else {
	Ti.include('/app/app.js');
}
