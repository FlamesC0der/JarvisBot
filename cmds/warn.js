const Discord = module.require("discord.js");
const fs = require("fs");
let profile = require("../profile.json");
module.exports.run = async (bot,message,args) => {
    try{
    let member = message.guild.member(message.mentions.users.first() || message.guild.members.find(m => m.user.username == args[0] || m.id == args[0]))
    if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("У вас нет прав");
    let mid = member.id
    let a = message.author
    if(!args[0]) return message.channel.send("Вы не указали пользователя");
    if(!member) return message.channel.send("Пользователь не найден");
    if(!profile[mid])return message.channel.send("Пользователя нету в profile.json");
    profile[mid].warns++;
    fs.writeFile('./profile.json',JSON.stringify(profile),(err)=>{
        if(err) console.log(err);
    });
    let reason = args.slice(1).join(' ') || 'Не указана'
    if(profile[mid].warns >=3){
        message.guild.member(member).kick("3/3 Предупреждений");
    }
    function getRandomInRange(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    message.channel.send({embed: {
        color: getRandomInRange(1111111, 9999999),
        author: {
          name: bot.user.username,
          icon_url: bot.user.avatarURL
        },
        title: "Предупреждение",
        url: "https://discordapp.com/api/oauth2/authorize?client_id=685837697645805617&permissions=8&scope=bot",
        description: "",
        fields: [{
            name: "-----------------------------",
            value: `Администратор: ${message.author.username}`
          },
          {
            name: "-----------------------------",
            value: `Выдал предепреждение: ${member.user.username}`
          },
          {
            name: "-----------------------------",
            value: `Причина: ${reason}`
          },
          {
            name: "-----------------------------",
            value: `Количество предупреждений: ${profile[mid].warns}/3`
          }
        ],
        timestamp: new Date(),
        footer: {
          icon_url: bot.user.avatarURL,
          text: "warn"
        }
      }
    });
    }catch(err){
        console.log(`1.${err.name}\n2.${err.message}\n3.${err.stack}`);
    }

};
module.exports.help = {
    name: "warn"
};