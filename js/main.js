console.log ("This is the word of the Developer spoken through your fingers.\n");
console.log ("In the beginning the Developer created the page.");
console.log("%cType in createPage()", "font-style: italic");

//set styleSheets to not appear
document.styleSheets[1].disabled = true;
document.styleSheets[2].disabled = true;

//gather images into an object and make them disappear
var images = document.getElementsByTagName("img");

for (var i = 0; i < images.length; i ++) {
	images[i].style.display = "none";
}

var customCreatePage = function () {

	console.clear();

	var opening = document.getElementById("opening");
	opening.style.display = "none";
	

	var body = document.getElementsByTagName("body");
	body[0].style.fontFamily = "courier";
	body[0].style.fontSize = "14px";
	body[0].style.backgroundImage = "url('img/page.png')";
	body[0].style.backgroundRepeat = "no-repeat";
	body[0].style.backgroundAttachment = "fixed";
	body[0].style.backgroundPosition = "center";

	console.log ("And the page was waste and void;\nand blankness was upon the face of the page:\nand the Spirit of Programming moved upon the face of the browser.\n\nAnd the Developer said: Let there be content.");
	console.log("%cType in letThereBeContent()", "font-style: italic");

	window.letThereBeContent = window.customLetThereBeContent;
	delete window.createPage;

};

var init = function () {
	window.createPage = window.customCreatePage;
}

init();

var customLetThereBeContent = function () {

	console.clear();

	var code = document.getElementById("content");
	content.style.display = "inline";
	var body = document.getElementsByTagName("body");
	body[0].style.backgroundImage = "none";

	console.log ("And the developer saw the content, that it was good: and the developer divided the content in structure elements.\nAnd the Developer called the elements HTML, Head and Body. And there was invisible and visible content, one page.");
	console.log("%cType in divideContentInElements()", "font-style: italic");

	window.divideContentInElements = window.customDivideContentInElements;
	delete window.letThereBeContent;

};

var customDivideContentInElements = function () {

	console.clear();

	var oldCode = document.getElementById("content");
	oldCode.style.display = "none";

	var code = document.getElementById("elements");
	code.style.display = "inline";

	console.log ("And the Developer said: Let there be a firmament in the midst of the HTML. And let it divide the tags from the tags.");
	console.log("%cType in divideBodyInTags()", "font-style: italic");

	window.divideBodyInTags = window.customDivideBodyInTags;
	delete window.divideContentInElements;

};

var customDivideBodyInTags = function () {

	console.clear();

	var oldCode = document.getElementById("elements");
	oldCode.style.display = "none";

	var code = document.getElementById("divideBody");
	code.style.display = "inline";

	console.log ("And the Developer made the tags, and divided the HTML. And there were elements inside the <head> and elements inside the <body>. And there was indentation to separate the elements.");
	console.log("%cType in addElementsAndIndentation()", "font-style: italic");

	window.addElementsAndIndentation = window.customAddElementsAndIndentation;
	delete window.divideBodyInTags;

};

var customAddElementsAndIndentation = function () {

	console.clear();

	var oldCode = document.getElementById("divideBody");
	oldCode.style.display = "none";

	var code = document.getElementById("addElements");
	code.style.display = "inline";

	console.log ("And the developer said: let the elements be gathered together unto one place, and let a model appear: and it was so.");
	console.log("%cType in createDom()", "font-style: italic");

	window.createDom = window.customCreateDom;
	delete window.addElementsAndIndentation;

};

var customCreateDom = function () {

	console.clear();

	var oldCode = document.getElementById("addElements");
	oldCode.style.display = "none";

	var code = document.getElementById("createDom");
	code.style.display = "inline";

	console.log ("And the developer called the model Document Object Model; and the gathering together as DOM: and the developer saw that it was good.\n\nAnd the Developer said, let the DOM put forth style, attributes yielding style after their kind, IDs and Classes: and it was so.");
	console.log("%cType in addStyleSheet()", "font-style: italic");

	window.addStyleSheet = window.customAddStyleSheet;
	delete window.createDom;

};

var customAddStyleSheet = function () {

	console.clear();
	
	document.styleSheets[0].disabled = true;
	document.styleSheets[1].disabled = false;

	console.log ("And the attributes brought forth style, IDs identifying single elements and classes bearing multiple elements: and the Developer saw that it was good.\n\nAnd the Developer said, let there be margins to divide content of multiple natures, to divide navigation from articles; and let them be for navigation and header and article and footer.\n\nAnd let them be for placing to give organization upon the website: and it was so.");
	console.log("%cType in addMargins()", "font-style: italic");

	window.addMargins = window.customAddMargins;
	delete window.addStyleSheet;

};

var customAddMargins = function () {

	console.clear();

	document.styleSheets[2].disabled = false;

	console.log ("And the Developer made the margins; And got set them in the stylesheet to give organization upon content: and the Developer saw that it was good.\n\nAnd the Developer said, let the website swarm with swarms of images and let them fill the content together with the words.");
	console.log("%cType in addImages()", "font-style: italic");

	window.addImages = window.customAddImages;
	delete window.addMargins;

};

var customAddImages = function () {

	console.clear();

	for (var i = 0; i < images.length; i ++) {
		images[i].style.display = "inline";
	}

	console.log ("And the Developer created the images, in every format, within the lines of text. And the Developer saw that it was good.\n\nAnd the Developer said, let us make dynamic content, after our taste: and let it have dominion over the tags of the <body> and the <head> and every other creeping thing that creepeth upon the page.\n\nAnd this content will come in the form of a verse");
	console.log("%cType in addVerse('write your verse here between quotes')", "font-style: italic");
	console.log("%cIf you do not wish to contribute a verse, type in addButton()", "font-style: italic");

	window.addVerse = window.customAddVerse;
	window.addButton = window.customAddButton;
	delete window.addImages;

};

var customAddVerse = function (verse) {

	post_to_url('form_processing.php', verse);

	window.addButton = window.customAddButton;
	delete window.addVerse;

};

var customAddButton = function () {

	console.clear();

	var code = document.getElementById("button");
	code.style.display = "inline";

	window.scrollTo(0,0);

	console.log ("And on the last line of Code, the Developer finished his work which he had made; and he rested on the moment from all his work which he had made. And the Developer blessed that moment.\nCongratulations, you now have the power of development. To share and bless the word of the Developer, click on like/share buttons that you created.");
	console.log("%cTo start your creation from scratch, type in reload()", "font-style: italic");

	window.reload = window.customReload;
	delete window.addButton;
};

var customReload = function () {

	window.location = window.location.href.split("?")[0];

}

function post_to_url(path, params, method) {
    method = method || "post"; // Set method to post by default if not specified.

    // The rest of this code assumes you are not using a library.
    // It can be made less wordy if you use one.
    var form = document.createElement("form");
    form.setAttribute("method", method);
    form.setAttribute("action", path);

    var hiddenField = document.createElement("input");
    hiddenField.setAttribute("type", "hidden");
    hiddenField.setAttribute("name", "key");
    hiddenField.setAttribute("value", params);

    form.appendChild(hiddenField);
    
    document.body.appendChild(form);
    form.submit();
}

function getQueryVariable()
{
       var query = window.location.search.substring(1);
       var vars = query.split("&");

       if (vars.length > 1) {
       		var opening = document.getElementById("opening");
			opening.style.display = "none";
			customCreateDom();
			customAddStyleSheet();
			customAddMargins();
			customAddImages();
       }
}

getQueryVariable();