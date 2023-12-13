const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    message.react('▶')
    const collector = message.createReactionCollector((reaction, user) => 
        user.id === message.author.id &&
        reaction.emoji.name === "▶" ||
        reaction.emoji.name === "◀"
    ).once("collect", reaction => {
        const chosen = reaction.emoji.name;
        if(chosen === '◀'){
            message.channel.send("-1")
        }else if(chosen === '▶'){
            message.channel.send("+1")
    }
    collector.stop();
    });
};
module.exports.help = {
    name: "test"
};