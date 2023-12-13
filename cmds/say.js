const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("У вас нет прав");
    message.delete()
    var saytext = args.join(" ");
    message.channel.send(saytext)
    console.log("saytext", `(${message.author.username} в ${message.guild.id} или ${message.guild.name} использовал команду /say текст:"${saytext}")`)
};
module.exports.help = {
    name: "say"
};