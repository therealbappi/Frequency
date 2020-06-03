function summarize() {
	chrome.tabs.executeScript(null, { file: "jquery-3.5.1.min.js" }, function() {
	    chrome.tabs.executeScript(null, { file: "content.js" });
	});
}
function freq() {
	chrome.tabs.executeScript(null, { file: "jquery-3.5.1.min.js" }, function() {
	    chrome.tabs.executeScript(null, { file: "content_freq.js" });
	});
}
document.getElementById('clickme').addEventListener('click', summarize);
document.getElementById('freq').addEventListener('click', freq);



// var text = ["Made ", "with ", '<span class="glyphicon glyphicon-heart"></span>', " by ", '<a href="https://www.linkedin.com/in/bharath4/">therealbappi</a>'];
// var show = function (text, index) {
// 	if (index >= text.length) return;
// 	$("#fadingText").append($(text[index]).fadeIn(2000, function () {
// 		show(text, index + 1);
// 	})); .
// }
// show(text, 0);