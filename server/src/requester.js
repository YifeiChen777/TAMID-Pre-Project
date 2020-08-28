var http = require("https");
class Requester{
	constructor(){
	
 	this.options = {
	"method": "POST",
	"hostname": "judge0.p.rapidapi.com",
	"port": null,
	"path": "/submissions",
	"headers": {
		"x-rapidapi-host": "judge0.p.rapidapi.com",
		"x-rapidapi-key": "519e799354msh72acb258a26b37ap14a703jsn80c6410d69c6",
		"content-type": "application/json",
		"accept": "application/json",
		"useQueryString": true
	}
};
}
makeRequest(input){
	this.wait = true;
	var req = http.request(this.options, function (res) {
	var chunks = [];

	res.on("data", function (chunk) {
		chunks.push(chunk);
	});

	res.on("end", function () {
		var body = Buffer.concat(chunks);
		// console.log(body.toString());
		
		// How do we get this.key accesible index.js? As of now it is returning undefined 
		// because it's trying to retrieve it before it's been assigned its value
		this.key = body.toString();
	});
});

req.write(JSON.stringify({
  language_id: 62,
//   source_code: 'public class Main { public static void main(String[] args) {   System.out.println("hello, world. this is Aaron!");   } }', 
  source_code: input, 
  stdin: 'world'
}));
req.end();
};
};
module.exports = Requester;