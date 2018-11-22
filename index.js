const express = require('express');
const bodyParser = require('body-parser');
const db = require('./pokedex.json');

const app = express();
app.use(bodyParser.json());

// Load routes
app.post('/get-started', getGetStarted);
app.post('/errors', function (req, res) {
  console.error(req.body);
  res.sendStatus(200);
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`App is listening on port ${PORT}`));

function findPokemonByName(name) {
  const data = db.find(p => p.name.toLowerCase() === name.toLowerCase());
  if (!data) {
    return null;
  }
  return data;
};


function getGetStarted(req, res) {
    res.json({
      replies: [
        {
          type: 'text',
          content: "Hello! Your friendly mathbot here to help you\
through the next two tasks! Please choose one of the responses\
below so I can point you in the right direction. You can also\
type out a message."
        },
        {
  type: "quickReplies",
  content: {
    title: "",
    buttons: [
      {
        title: "I'm ready to begin",
        value: "BUTTON_VALUE_1"
      },
      {
        title: "I'm ready to begin",
        value: "BUTTON_VALUE_2"
      }
    ]
  }
},
      ],
    });
  }
