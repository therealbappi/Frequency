alert("This may take up to 10 seconds depending on length of webpage");


// capture all text
var textToSend = document.body.innerText;

// summarize and send back
var api_url = 'https://freqapiexte.herokuapp.com/generate_summary/';

fetch(api_url, {
  method: 'POST',
  body: JSON.stringify(textToSend),
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
				var sentacnes = words.split("\\n")
				var text="SUMMARY:"+sentacnes;
				if(confirm(text)){
				    window.location.reload();  
				}
});






