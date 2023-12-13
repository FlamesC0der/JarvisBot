const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (client,message,args) => {
    var scount = client.guilds.size
    message.channel.send(scount)
};
module.exports.help = {
    name: "scount"
};