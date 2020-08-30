var http = require("https");
class GetSubmission {
	submissiongetter(key) {
		return new Promise(resolve => {
			console.log(Object.getOwnPropertyDescriptor(key));
			this.options = {
				"method": "GET",
				"hostname": "judge0.p.rapidapi.com",
				"port": null,
				"path": `/submissions/${key}`,
				"headers": {
					"x-rapidapi-host": "judge0.p.rapidapi.com",
					"x-rapidapi-key": "519e799354msh72acb258a26b37ap14a703jsn80c6410d69c6",
					"useQueryString": true
				}
			};

			var req = http.request(this.options, function (res) {
				var chunks = [];

				res.on("data", function (chunk) {
					chunks.push(chunk);
				});

				res.on("end", function () {
					var body = Buffer.concat(chunks);
					console.log(body.toString());
					let response = body.toString();
					resolve(response);
				});
			});

			req.end();
		});
	};
}
module.exports = GetSubmission;