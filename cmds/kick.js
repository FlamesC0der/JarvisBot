const Discord = module.require("discord.js");
const fs = require("fs");
let profile = require("../profile.json");
module.exports.run = async (bot,message,args) => {
    try{
    let member = message.guild.member(message.mentions.users.first() || message.guild.members.find(m => m.user.username == args[0] || m.id == args[0]))
    if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("У вас нет прав");
    if(!args[0]) return message.channel.send("Вы не указали пользователя");
    if(!member) return message.channel.send("Пользователь не найден");
    let reason = args.splice(2).join(" ") || 'Не указана'
    function getRandomInRange(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    message.channel.send({embed: {
        color: getRandomInRange(1111111, 9999999),
        author: {
          name: bot.user.username,
          icon_url: bot.user.avatarURL
        },
        title: "Кик",
        url: "https://discordapp.com/api/oauth2/authorize?client_id=685837697645805617&permissions=8&scope=bot",
        description: "",
        fields: [{
            name: "-----------------------------",
            value: `Администратор: ${message.author.username}`
          },
          {
            name: "-----------------------------",
            value: `Кикнул: ${member.user.username}`
          },
          {
            name: "-----------------------------",
            value: `причина: ${reason}`
          }
        ],
        timestamp: new Date(),
        footer: {
          icon_url: bot.user.avatarURL,
          text: "kick"
        }
      }
    });
    message.guild.member(member).kick(reason);
    }catch(err){
        console.log(`1.${err.name}\n2.${err.message}\n3.${err.stack}`);
    }

};
module.exports.help = {
    name: "kick"
};