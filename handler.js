import menu_click from './functions';

// Creating the menu items
function createMenuItem( menuObject, onclickHandler){
	menuObject.onclick = onclickHandler;
	chrome.contextMenus.create(menuObject);
	return menuObject;
}

//ExplorerMenuParent
var ExplorerMenuParent = createMenuItem ({
  id: "RemoveInlineStyles",
  title: "Remove Inline Styles",
  contexts: ["selection"],
}, menu_click);


//SambaMenuParent
var SublimeMenuParent = createMenuItem ({
  id: "RemoveClasses",
  title: "Remove Classes",
  contexts: ["selection"],
}, menu_click);


