const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    function getRandomInRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    message.channel.send({embed: {
        color: getRandomInRange(1111111, 9999999),
        author: {
          name: bot.user.username,
          icon_url: bot.user.avatarURL
        },
        title: "Аватар",
        url: "https://discordapp.com/api/oauth2/authorize?client_id=685837697645805617&permissions=8&scope=bot",
        description: "",
        image: {
            url: message.author.displayAvatarURL()
        },
        timestamp: new Date(),
        footer: {
          icon_url: bot.user.avatarURL,
          text: "avatar"
        }
      }
    });
};
module.exports.help = {
    name: "avatar"
};