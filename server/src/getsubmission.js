var http = require("https");
class GetSubmission {
	submissiongetter(key) {
		//trim key to only include the key itself:
		this.key = key.substring(10, 46);
		return new Promise(resolve => {
			this.options = {
				"method": "GET",
				"hostname": "judge0.p.rapidapi.com",
				"port": null,
				"path": `/submissions/${this.key}`,
				// "path": `/submissions/c71bebc0-27f9-406a-9601-e8f79c7e1bfa`,
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