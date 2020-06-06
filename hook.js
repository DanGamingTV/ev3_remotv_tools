//const { Webhook, MessageBuilder } = require('discord-webhook-node');
const hookcord = require('hookcord');
const fs = require('fs');
//const hook = new Webhook("https://discordapp.com/api/webhooks/717097910424043580/EbjM_rCMU9sFy42PZtLnS40yYsAmO86VM4rDerPjMoUHDJMCG-pHrCZKywMlZmWR0SAi");
const Hook = new hookcord.Hook()
Hook.login('717097910424043580', 'EbjM_rCMU9sFy42PZtLnS40yYsAmO86VM4rDerPjMoUHDJMCG-pHrCZKywMlZmWR0SAi')

//vars
const serverName = "danno's robots";
const offlineColor = 16711680
const onlineColor = 61455

var robots_a = [
	{
		"name": "EV3",
		"online": false,
		"next": "10:30 PM UTC",
		"url": "https://remo.tv/danno/rbot-6dbca1d6-1407-4bd0-a429-ab7b333818a5"
	}, 
	{
		"name": "Mystery Robot",
		"online": false,
		"next": "Soon..."
	}
]

fs.readFile('status.json', 'utf8', function(err,data) {
	var robots = JSON.parse(data)
	console.log(`awooga awooga ${data}`)
	console.log("hi")
	console.log(data)








const embed_lol = {
  "embeds": [
    {
      "title": "Robot Status info",
      "description": "Here you'll see the statuses of all\nmy robots! Check back here to see\nwhen the robot's will be online.",
      "color": 3553599,
      "footer": {
        "text": serverName
      },
      "thumbnail": {
        "url": "https://cdn.discordapp.com/icons/711875022855208983/df7a7315e40a47841b7e8245020de340.webp?size=128"
      }
    }/* ,
    {
      "title": `${robots[0].name}`,
      "description": `**Status:** ${(robots[0].online == false) ? "Offline":"Online"}\n**Will be ${(robots[0].online == false) ? "online":"offline"} at:** ${robots[0].next}`,
      "color": `${(robots[0].online == false) ? offlineColor:onlineColor}`,
      "footer": {
        "text": serverName
      }
    },
    {
      "title": `${robots[1].name}`,
      "description": `**Status:** ${(robots[1].online == false) ? "Offline":"Online"}\n**Will be ${(robots[1].online == false) ? "online":"offline"} at:** ${robots[1].next}`,
      "color": `${(robots[1].online == false) ? offlineColor:onlineColor}`,
      "footer": {
        "text": serverName
      }
    } */
  ]
}
 
for (var i = 0; i < robots.length; i++) {
	var urlLol = ""
	if (robots[i].hasOwnProperty('url')) {
		urlLol = `[robots[i].url`
		embed_lol.embeds.push({
      "title": `${robots[i].name}`,
      "description": `**Status:** ${(robots[i].online == false) ? "Offline":"Online"}\n**Will be ${(robots[i].online == false) ? "online":"offline"} at:** ${robots[i].next}`,
      "color": `${(robots[i].online == false) ? offlineColor:onlineColor}`,
	  "url": robots[i].url,
      "footer": {
        "text": serverName
      }
    });
	} else {
		embed_lol.embeds.push({
      "title": `${robots[i].name}`,
      "description": `**Status:** ${(robots[i].online == false) ? "Offline":"Online"}\n**Will be ${(robots[i].online == false) ? "online":"offline"} at:** ${robots[i].next}`,
      "color": `${(robots[i].online == false) ? offlineColor:onlineColor}`,
      "footer": {
        "text": serverName
      }
    });
	}
}
//hook.send(embed_lol);
Hook.setPayload(embed_lol)

Hook.fire()
  .then(response_object => {  })
  .catch(error => {
    throw error;
  })

var obsText = `${robots[0].name} Status: ${(robots[0].online == false) ? "Offline":"Online"}
Will be ${(robots[0].online == false) ? "online":"offline"} at: ${robots[0].next}`


  
/* fs.writeFile("status.json", JSON.stringify(robots), function(err) {
	if (err) throw err;
	console.log("file saved")
}); */


fs.writeFile("status.txt", obsText, function(err) {
	if (err) throw err;
	console.log("file saved")
});
});