const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    try{
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("У вас нет прав");
    if(args[0]>100) return message.channel.send("Укажите значение меньше 100");
    if(args[0]<1) return message.channel.send("Укажите значение больше 1");
    message.channel.bulkDelete(args[0]).then(() =>{
        function getRandomInRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        message.channel.send({embed: {
            color: getRandomInRange(1111111, 9999999),
            author: {
              name: bot.user.username,
              icon_url: bot.user.avatarURL
            },
            title: "Очистка",
            url: "https://discordapp.com/api/oauth2/authorize?client_id=685837697645805617&permissions=8&scope=bot",
            description: "",
            fields: [{
                name: "-----------------------------",
                value: `Удалено: ${args[0]} сообщений `
              }
            ],
            timestamp: new Date(),
            footer: {
              icon_url: bot.user.avatarURL,
              text: "clear"
            }
          }
        });
    });
    }catch(err){
        console.log(err.name)
}
};
module.exports.help = {
    name: "clear"
};