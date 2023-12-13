const Discord = module.require("discord.js");
const fs = require("fs");
let profile = require("../profile.json");
module.exports.run = async (bot,message,args) => {
    let a = message.author
    let uid = message.author.id;
    function getRandomInRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    message.channel.send({embed: {
        color: getRandomInRange(1111111, 9999999),
        author: {
          name: bot.user.username,
          icon_url: bot.user.avatarURL
        },
        title: "💰Баланс💎",
        url: " https://discordapp.com/oauth2/authorize?client_id=685837697645805617&scope=bot&permissions=2102885623",
        description: "",
        fields: [{
            name: "-----------------------------",
            value: `Баланс пользователя: ${message.author.username} состовляет:`
          },
          {
            name: "-----------------------------",
            value: `💰 Коины: ${profile[uid].coins}`
          },
          {
            name: "-----------------------------",
            value: `💎 Алмазы: ${profile[uid].diamonds}`
          }
        ],
        timestamp: new Date(),
        footer: {
          icon_url: bot.user.avatarURL,
          text: "balance"
        }
      }
    });
};
module.exports.help = {
    name: "balance"
};