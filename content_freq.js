

// capture all text
var textToSend = document.body.innerText;

// summarize and send back
var api_url = 'https://freqapiexte.herokuapp.com/idealweight/';

fetch(api_url, {
  method: 'POST',
  body: textToSend,
  headers:{
    'Content-Type': 'application/json'
  } })
.then(data => { return data.json() })
.then(res => { 
	$.each(res, function( index, value ) {
		value = unicodeToChar(value).replace(/\\n/g, '');
		document.body.innerHTML = document.body.innerHTML.split(value).join('<span style="background-color: #fff799;">' + value + '</span>');
	});
 })
.catch(error => {
				var data=String(error);
				
				var words=data.substring(62,);
				words=words.split("/new/");
				words=words.splice(0,10);
				

				var data="More Frequently used Words \n 1)"+words[0]+"\n 2)"+words[1]+"\n 3)"+words[2]+"\n 4)"+words[3]+"\n 5)"+words[4]+"";
				if(confirm(data)){
				    window.location.reload();  
				}
});






