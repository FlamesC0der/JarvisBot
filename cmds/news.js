const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("У вас нет прав");
    message.delete()
    var saytext = args.join(" ");
    function getRandomInRange(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    message.channel.send({embed: {
        color: getRandomInRange(1111111, 9999999),
        author: {
          name: bot.user.username,
          icon_url: bot.user.avatarURL
        },
        title: "Новость!",
        url: "https://discordapp.com/api/oauth2/authorize?client_id=685837697645805617&permissions=8&scope=bot",
        description: "",
        fields: [{
            name: "-----------------------------",
            value: `${saytext}`
          }
        ],
        timestamp: new Date(),
        footer: {
          icon_url: bot.user.avatarURL,
          text: "news"
        }
      }
    });
    fs.appendFile("fbkbotlog.txt", `\n${ts} ${message.author.username} in ${message.guild.id} or ${message.guild.name} used say with text " ${saytext} "`)
};
module.exports.help = {
    name: "news"
};