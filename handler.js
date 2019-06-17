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


//Deciding what happens when there's a click
function menu_click(info, tab){
	var request = "http://localhost:3000/?";
	console.log("This works");
	switch(info.menuItemId){

		case "RemoveInlineStyles":
		request += "method=openfolder&path=" + samba_drive_letter + (info.selectionText).charAt(0) + "\\" + info.selectionText + "\\design\\";
		console.log(request);
		break;

		case "RemoveClasses":
		request += "method=openfolder&path=" + samba_drive_letter + (info.selectionText).charAt(0) + "\\" + info.selectionText + "\\design\\css";
		console.log(request);
		break;

		case "sambaTemplates":
		request += "method=openfolder&path=" + samba_drive_letter + (info.selectionText).charAt(0) + "\\" + info.selectionText + "\\design\\templates";
		console.log(request);
		break;

		case "sambaImages":
		request += "method=openfolder&path=" + samba_drive_letter + (info.selectionText).charAt(0) + "\\" + info.selectionText + "\\design\\images";
		console.log(request);
		break;

		case "pubPhotoshop":
		request += "method=openfolder&path=" + pub_drive_letter + "Firmsites\\" + (info.selectionText).charAt(0) + "\\" + info.selectionText + "\\creative\\photoshop";
		console.log(request);
		break;

		case "siteCSS":
		request += "method=edit&path=" + samba_drive_letter + (info.selectionText).charAt(0) + "\\" + info.selectionText + "\\design\\css\\site.scss";
		console.log(request);
		break;

		case "homeHTML":
		request += "method=edit&path=" + samba_drive_letter + (info.selectionText).charAt(0) + "\\" + info.selectionText + "\\design\\templates\\home.html";
		console.log(request);
		break;

		case "defaultHTML":
		request += "method=edit&path=" + samba_drive_letter + (info.selectionText).charAt(0) + "\\" + info.selectionText + "\\design\\templates\\default.html";
		console.log(request);
		break;
		
		case "designHTML":
		request += "method=edit&path=" + samba_drive_letter + (info.selectionText).charAt(0) + "\\" + info.selectionText + "\\design\\templates-blog\\design.html";
		console.log(request);
		break;		

		case "initJS":
		request += "method=edit&path=" + samba_drive_letter + (info.selectionText).charAt(0) + "\\" + info.selectionText + "\\design\\scripts\\init.js";
		console.log(request);
		break;

		default:
		console.log("none");
		break;
	}
}