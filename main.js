selectionIndexed = function(selection){
    var text = selection.selectionText.replace(/ /g,"+");

    chrome.tabs.query({active: true, currentWindow: true}, tabs => {
    	let url = tabs[0].url;
    	chrome.tabs.create({url: "https://www.google.com/search?q=site:" + url + " \"" + text + "\"&hl=en"});
	});
 };

chrome.contextMenus.create({
	title: "Is selection indexed?",
	contexts:["selection"],
	onclick: selectionIndexed
});