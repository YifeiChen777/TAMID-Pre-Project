var http = require("https");
class Judge0 {
   
   // Requester:
   makeRequest(input) {
      this.options = {
         "method": "POST",
         "hostname": "judge0.p.rapidapi.com",
         "port": null,
         "path": "/submissions",
         "headers": {
            "x-rapidapi-host": "judge0.p.rapidapi.com",
            "x-rapidapi-key": "7277655346msh461e0f9f07d7b79p18d3d0jsn042f30eb8a12",
            // "x-rapidapi-key": "519e799354msh72acb258a26b37ap14a703jsn80c6410d69c6",
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
               // console.log(body.toString());
               key = body.toString();
               resolve(key);
            });
         });
         req.write(JSON.stringify({
            language_id: 62,
            //   source_code: 'public class Main { public static void main(String[] args) {   System.out.println("hello, world. this is Aaron!");   } }', 
            source_code: input,
            stdin: 'world'
         }));
         req.end();
      });
   }

   // Submission Getter
   submissiongetter(key) {
      //trim key to only include the key itself:
      this.key = key.substring(10, 46);
      return new Promise(resolve => {
         this.options = {
            "method": "GET",
            "hostname": "judge0.p.rapidapi.com",
            "port": null,
            // "path": `/submissions/${this.key}`,
            "path": `/submissions/7e756619-529e-453c-bf87-8f3935910593`,
            "headers": {
               "x-rapidapi-host": "judge0.p.rapidapi.com",
               "x-rapidapi-key": "7277655346msh461e0f9f07d7b79p18d3d0jsn042f30eb8a12",
               // "x-rapidapi-key": "519e799354msh72acb258a26b37ap14a703jsn80c6410d69c6",
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
               console.log("-------" + body.toString());
               let response = body.toString();
               resolve(response);
            });
         });
         req.end();
      });
   };
}
module.exports = Judge0;
