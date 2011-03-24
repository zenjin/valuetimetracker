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
	var TEST_SUITE = 'core'; // Unit Tests
	//var TEST_SUITE = ''; // Graphical Test
	var win = Ti.UI.createWindow();
	//win.add(Ti.UI.createImageView({image:'helium.png', height:'auto', width:'auto'}));
	win.add(Ti.UI.createLabel({
		text:'Unit tests in progress - check the console for details.',
		color:'#787878',
		bottom:20,
		right:10,
		left:10,
		font:{fontSize:12},
		height:'auto',
		textAlign:'center'
	}));
	win.open();

	//Include tests
	Ti.include(
		'/helium.js',
		'/tests/test.js',
		'/tests/core.js',
		'/tests/ui.js'
	);
	var suite = (typeof(TEST_SUITE)!='undefined') ? TEST_SUITE : '';
	he.test.run(suite);

} else {
	Ti.include('/app/app.js');
}
