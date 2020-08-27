var http = require("https");

var options = {
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

var req = http.request(options, function (res) {
	var chunks = [];

	res.on("data", function (chunk) {
		chunks.push(chunk);
	});

	res.on("end", function () {
		var body = Buffer.concat(chunks);
		console.log(body.toString());
	});
});

req.write(JSON.stringify({
  language_id: 62,
  source_code: 'public class Main { public static void main(String[] args) {   System.out.println("hello, world. this is Aaron!");   } }', 
  stdin: 'world'
}));
req.end();