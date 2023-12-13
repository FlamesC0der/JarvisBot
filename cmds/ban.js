const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    let member = message.guild.member(message.mentions.users.first() || message.guild.members.find(m => m.user.username == args[0] || m.id == args[0]))

    if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send('Недостаточно прав для использования команды!')
    else if (!message.guild.me.hasPermission("KICK_MEMBERS")) return message.channel.send('У меня недостаточно прав!')

    let reason = args.slice(1).join(' ') || 'Не указана'
    await member.ban(reason)
    function getRandomInRange(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    message.channel.send({embed: {
        color: getRandomInRange(1111111, 9999999),
        author: {
          name: bot.user.username,
          icon_url: bot.user.avatarURL
        },
        title: "БАН",
        url: " https://discordapp.com/oauth2/authorize?client_id=685837697645805617&scope=bot&permissions=2102885623",
        description: "",
        fields: [{
            name: "-----------------------------",
            value: `Администратор: ${message.author.username}`
          },
          {
            name: "-----------------------------",
            value: `Забанил: ${member.user.username}`
          },
          {
            name: "-----------------------------",
            value: `Причина: ${reason}`
          }
        ],
        timestamp: new Date(),
        footer: {
          icon_url: bot.user.avatarURL,
          text: "ban"
        }
      }
    });
};
module.exports.help = {
    name: 'ban'
}