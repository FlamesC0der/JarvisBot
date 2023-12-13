const Discord = module.require("discord.js");
const fs = require("fs");
let profile = require("../profile.json");
module.exports.run = async (bot,message,args) => {
    function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    let a = message.author
    let uid = message.author.id;
    message.channel.send({embed: {
        color: getRandomInRange(1111111, 9999999),
        author: {
          name: bot.user.username,
          icon_url: message.author.displayAvatarURL()
        },
        title: "Информация о пользователе",
        url: "https://discordapp.com/api/oauth2/authorize?client_id=685837697645805617&permissions=8&scope=bot",
        description: "",
        fields: [{
            name: "-----------------------------",
            value: `Имя: ${a.username}`
          },
          {
            name: "-----------------------------",
            value: `Тэг: ${a.tag}`
          },
          {
            name: "-----------------------------",
            value: `Дискриминатор: ${a.discriminator}`
          },
          {
            name: "-----------------------------",
            value: `Создание аккаунта: ${a.createdAt}`
          },
          {
            name: "-----------------------------",
            value: `ID: ${a.id}`
          },
          {
            name: "-----------------------------",
            value: `Вы бот? ${a.bot}`
          },
        ],
        image: {
          url: message.author.displayAvatarURL()
        },
        timestamp: new Date(),
        footer: {
          icon_url: message.author.displayAvatarURL(),
          text: "userinfo"
        }
      }
    });
};
module.exports.help = {
    name: "userinfo"
};