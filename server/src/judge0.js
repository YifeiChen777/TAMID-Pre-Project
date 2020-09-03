var http = require("https");
class Judge0 {
   
   constructor(RAPIDAPI_Key){
      this.RAPIDAPI_Key = RAPIDAPI_Key;
   }
   // Requester:
   makeRequest(input, language_id) {
      this.options = {
         "method": "POST",
         "hostname": "judge0.p.rapidapi.com",
         "port": null,
         "path": "/submissions",
         "headers": {
            "x-rapidapi-host": "judge0.p.rapidapi.com",
            "x-rapidapi-key": this.RAPIDAPI_Key,
            "content-type": "application/json",
            "accept": "application/json",
            "useQueryString": true
         }
      };
      return new Promise(resolve => {
         var key;
         var req = http.request(this.options, function (res) {
            var chunks = [];

            res.on("data", function (chunk) {
               chunks.push(chunk);
            });

            res.on("end", function () {
               var body = Buffer.concat(chunks);
               key = body.toString();
               resolve(key);
            });
         });
         req.write(JSON.stringify({
            language_id: language_id,
            source_code: input,
            stdin: 'world'
         }));
         req.end();
      });
   }

   submissionGetter(key) {
      let key_object = JSON.parse(key);
      this.key = key_object.token;

      return new Promise(resolve => {
         this.options = {
            "method": "GET",
            "hostname": "judge0.p.rapidapi.com",
            "port": null,
            "path": `/submissions/${this.key}`,
            "headers": {
               "x-rapidapi-host": "judge0.p.rapidapi.com",
               "x-rapidapi-key": this.RAPIDAPI_Key,
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
               let response = body.toString();
               resolve(response);
            });
         });
         req.end();
      });
   };
}
module.exports = Judge0;
