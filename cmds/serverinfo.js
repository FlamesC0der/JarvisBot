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
        title: "Информация о сервере:",
        url: "https://discordapp.com/api/oauth2/authorize?client_id=685837697645805617&permissions=8&scope=bot",
        description: "",
        fields: [{
            name: "-----------------------------",
            value: `Название сервера: ${message.guild.name}`
          },
          {
            name: "-----------------------------",
            value: `Владелец сервера: ${message.guild.owner}`
          },
          {
            name: "-----------------------------",
            value: `Создание сервера: ${message.guild.createdAt}`
          },
          {
            name: "-----------------------------",
            value: `Вы присоединились к серверу: ${message.guild.joinedAt}`
          },
          {
            name: "-----------------------------",
            value: `Кол-во участников: ${message.guild.memberCount}`
          },
          {
            name: "-----------------------------",
            value: `регион: ${message.guild.region}`
          }
        ],
        timestamp: new Date(),
        footer: {
          icon_url: bot.user.avatarURL,
          text: "serverinfo"
        }
      }
    });
};
module.exports.help = {
    name: "serverinfo"
};