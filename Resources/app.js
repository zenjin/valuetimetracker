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

// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

if (RUNTESTS) {
	Ti.include('/tests/run.js');
} else {
	Ti.include('/app/app.js');
}
