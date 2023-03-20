



var topics = ["Html", "CSS", "Git", "JavaScript"];

var randomTopic = topics[Math.floor(Math.random() * topics.length)];

console.log(randomTopic);

function listTopics() {
    for (var x = 0; x < topics.length; x++) {
     console.log(topics[x]);
    }
}


function selectTopic() {

if (randomTopic === 'Html') {
    console.log("Lets study HTML!");
} else if (randomTopic === 'CSS') {
    console.log("Lets study CSS!");
} else if (randomTopic === 'Git') {
    console.log("Lets study GIT!");
} else if (randomTopic === 'JavaScript') {
    console.log ("lets study JavaScript!");
} else {
    console.log('Please try again!');
    }
}

console.log('Here are the topics we learned through the Prework');
listTopics();

console.log('Which topic should we learn first?');
selectTopic();