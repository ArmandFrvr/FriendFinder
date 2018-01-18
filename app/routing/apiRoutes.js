// Load data
var friends = require("../data/friends");


// Routing

module.exports = function(app) {

  // API GET request to return list of friends
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  // API POST
  // 1. Calculates the best match
  // 2. Adds the new person to the list
  // 3. Returns the info for the best match
  app.post("/api/friends", function(req, res) {

    let scores = req.body.scores; // the new person's scores
    let bestScore = 41; // highest possible difference + 1
    let bestIdx = -1;

    // Go through list of friends
    for(let i = 0; i < friends.length; i++) {

      let total = 0;
      for(let j = 0; j < scores.length; j++) {
        total += Math.abs(scores[j] - friends[i].scores[j]);
      }

      // If this friend's score is lower than the previous best (lowest) score,
      // they're the new best match
      if(total < bestScore) {
        bestScore = total;
        bestIdx = i;
      }
    }

    // Now we can add the new person to the list for future matches
    friends.push(req.body);

    // And return the object containing the best match we found
    res.json(friends[bestIdx]);

  });
};
