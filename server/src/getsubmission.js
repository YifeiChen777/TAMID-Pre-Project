var http = require("https");
class GetSubmission{
	constructor(){

var options = {
	"method": "GET",
	"hostname": "judge0.p.rapidapi.com",
	"port": null,
	"path": "/submissions/2d8f6951-b1b0-4fa7-aa31-e6808819295f",
	"headers": {
		"x-rapidapi-host": "judge0.p.rapidapi.com",
		"x-rapidapi-key": "519e799354msh72acb258a26b37ap14a703jsn80c6410d69c6",
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

req.end();
};
};

module.exports = GetSubmission;