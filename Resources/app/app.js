// create tab group
var tabGroup = Titanium.UI.createTabGroup();


//
// create base UI tab and root window
//
var win1 = Titanium.UI.createWindow({  
    title:'Tab 1',
    backgroundColor:'#00f'
});
var tab1 = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'heaven',
    window:win1
});

var label1 = Titanium.UI.createLabel({
	color:'#fff',
	text:'Welcome!\n Take a seat,\n relax,\n take a deep breath.',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

win1.add(label1);

//
// create controls tab and root window
//
var win2 = Titanium.UI.createWindow({  
    title:'Tab 2',
    backgroundColor:'#f00'
});
var tab2 = Titanium.UI.createTab({  
    icon:'KS_nav_ui.png',
    title:'hell',
    window:win2
});

var label2 = Titanium.UI.createLabel({
	color:'#000',
	text:'Fool,\n all you will experience\n ist pain,\n deep, burning pain.',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

win2.add(label2);

//
// create controls tab and root window
//
var win3 = Titanium.UI.createWindow({  
    title:'Tab 3',
    backgroundColor:'#fff'
});
var tab3 = Titanium.UI.createTab({  
    icon:'KS_nav_ui.png',
    title:'nirvana',
    window:win3
});

var label3 = Titanium.UI.createLabel({
	color:'#000',
	text:'Zero',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

win2.add(label2);

//
//  add tabs
//
tabGroup.addTab(tab1);  
tabGroup.addTab(tab2);
tabGroup.addTab(tab3);

// open tab group
tabGroup.open();
