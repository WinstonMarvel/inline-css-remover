//Deciding what happens when there's a click
export function menu_click(info, tab){
	return "1";
} 


export function removeInlineCSS(raw){
	let el = document.createElement('div');
	el.innerHTML = raw;
	let childElements = el.querySelectorAll('*');
	childElements.forEach(function(element){
		element.removeAttribute('style');
	});
    return el.innerHTML;
}


export function removeClass(raw){
	let el = document.createElement('div');
	el.innerHTML = raw;
	let childElements = el.querySelectorAll('*');
	childElements.forEach(function(element){
		element.removeAttribute('class');
	});
    return el.innerHTML;
}

export function removeIDs(raw){
	let el = document.createElement('div');
	el.innerHTML = raw;
	let childElements = el.querySelectorAll('*');
	childElements.forEach(function(element){
		element.removeAttribute('id');
	});
    return el.innerHTML;
}


export function removeAll(raw){
	let el = document.createElement('div');
	el.innerHTML = raw;
	let childElements = el.querySelectorAll('*');
	childElements.forEach(function(element){
		element.removeAttribute('id');
		element.removeAttribute('class');
		element.removeAttribute('style');

	});
    return el.innerHTML;
}