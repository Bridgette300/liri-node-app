require("dotenv").config();

//grab key.js file
var keys = require("./keys.js");
var Twitter = require('twitter');
var Spotify = require("node-spotify-api");

//store in process arv
let userInput = process.argv[2];

//store api keys in variables
var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);


//twitter api
let getTweets = function() {
    let params = {screen_name: 'bcsDeveloper'};

    client.get('statuses/user_timeline', params, function(error, tweets, response){
        if (!error) {
            for (let i = 0; i < 20; i++) {
                console.log(tweets[i].created_at);
                console.log(tweets[i].text);
        }
    }
    });
}

//spotify
let getSong = function() {
    spotify.search({ type: 'track', query: 'the sign ace of base' }, function(err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }   
        console.log(data.tracks.items[0].artists[0].name);
        console.log(data.tracks.items[0].name);
        console.log(data.tracks.items[0].external_urls.spotify);
        console.log(data.tracks.items[0].album.name);
      
});
}



if (userInput === "my-tweets") {
    getTweets();
} else if (userInput === "spotify-this-song") {
    getSong();
  } else if (userInput === "movie-this") {
    //liriMovie(input);
  } else if (userInput === "do-what-it-says") {
    //liriRandom(input);
  }
