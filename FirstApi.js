function FirstApi()
{

var requestBody = "{\"short_description\":\"heres baby is inbound rest\",\"description\":\"here is our inbound description\"}"; 

var client=new XMLHttpRequest();
client.open("post","https://dev65203.service-now.com/api/now/table/incident");

client.setRequestHeader('Accept','application/json');
client.setRequestHeader('Content-Type','application/json');

//Eg. UserName="admin", Password="admin" for this code sample.
client.setRequestHeader('Authorization', 'Basic '+btoa('admin'+':'+'uCkV70OrU^v^'));

client.onreadystatechange = function() { 
	if(this.readyState == this.DONE) {
 //document.getElementById("response").innerHTML=this.status + this.response; 
var res = this.response;
parsedData = JSON.parse(res);
alert("you have created a record with the number of "+ parsedData.result.number);
	}
}; 
client.send(requestBody);
}