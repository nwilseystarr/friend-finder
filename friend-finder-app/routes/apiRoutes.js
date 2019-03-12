// 4. Your `apiRoutes.js` file should contain two routes:

//    * A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
//    * A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.


var friendsArr = require("../app/data/friends");

module.exports = function (app) {

  app.get("/api/friends", function (req, res) {
    res.json(friendsArr);
  });

  app.post("/api/friends", function (req, res) {

    var currentPerson = req.body;
    var bff = 10000;
    var math;
    var bestPerson;

    for (var i=0; i < friendsArr.length; i++){
      for (var j=0; j < currentPerson.scores.length; j++){
       math += Math.abs(friendsArr[i].scores[j] - currentPerson.scores[j])
      }
      if (math < bff){
        bestPerson = friendsArr[i];
        bff = math;
      }
       var math = 0;
    };

    for (var k = 0; k < currentPerson.scores.length; k++) {
      console.log(currentPerson.scores[k]);
    };

    for (var l = 0; l < friendsArr.length; l++) {
      console.log(friendsArr[l].scores);
    };
    console.log("=====================================");

    friendsArr.push(req.body);
    res.json(bestPerson);
  });
};

