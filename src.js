

document.addEventListener("DOMContentLoaded", function(){
	document.getElementById("ytsearch").addEventListener("click", ytsearch);
	document.getElementById("ytupload").addEventListener("click", ytupload);
	document.getElementById("ytsh").addEventListener("click", ytsh);


});

function ytsearch(){
	const a = document.getElementById("navbar-query").value;
	let html = "https://www.youtube.com/results?search_query="+a
	html.replace;
	window.open(html);
}

function ytsh(){
	const a = document.getElementById("navbar-query").value;
	let html = "https://www.youtube.com/feed/history?query="+a
	html.replace;
	window.open(html);
}

function ytupload(){
	const html = "https://www.youtube.com/upload"
	window.open(html);
}



		