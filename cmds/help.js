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
        title: "Команды бота Jarvis:",
        url: "https://discordapp.com/api/oauth2/authorize?client_id=685837697645805617&permissions=8&scope=bot",
        description: "",
        fields: [{
            name: "-----------------------------",
            value: "/help - показать этот список"
          },
          {
            name: "-----------------------------",
            value: "/ping - пинг (скорость отклика)"
          },
          {
            name: "-----------------------------",
            value: "/invite - пригласить бота на сервер"
          },
          {
            name: "-----------------------------",
            value: "/myserver - отправить ссылку на сервер поддержки бота"
          },
          {
            name: "-----------------------------",
            value: "/server - отправить ссылку на сервер Алексея"
          },
          {
            name: "-----------------------------",
            value: "/clear <кол-во> - удалить сообщение"
          },
          {
            name: "-----------------------------",
            value: "/serverinfo - информация о сервере"
          },
          {
            name: "-----------------------------",
            value: "/serverinfo - информация о сервере"
          },
          {
            name: "-----------------------------",
            value: "/dice - игровая кость (рандом 1-6)"
          },
          {
            name: "-----------------------------",
            value: "/random <предел рандома> - рандом (пример: /random 5 - цифра от 1 до 5)"
          }
        ],
        timestamp: new Date(),
        footer: {
          icon_url: bot.user.avatarURL,
          text: " < > не нужны | help | страница 1/2 "
        }
      }
    });
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
            message.channel.bulkDelete(1)
            message.channel.send({embed: {
              color: getRandomInRange(1111111, 9999999),
              author: {
                name: bot.user.username,
                icon_url: bot.user.avatarURL
              },
              title: "Команды бота Jarvis:",
              url: "https://discordapp.com/api/oauth2/authorize?client_id=685837697645805617&permissions=8&scope=bot",
              description: "",
              fields: [{
                  name: "-----------------------------",
                  value: "/say <текст> - отправит сообщение от лица бота"
                },
                {
                  name: "-----------------------------",
                  value: "/news <новость> - отправит новость"
                },
                {
                  name: "-----------------------------",
                  value: "/avatar - отправит аватар пользователя"
                },
                {
                  name: "-----------------------------",
                  value: "/ban <@user> <причина> - забанит участника"
                },
                {
                  name: "-----------------------------",
                  value: "/kick <@user> - кикнет участника (в разработке)"
                },
                {
                  name: "-----------------------------",
                  value: "/warn <@user> - даст предупреждение участнику"
                },
                {
                  name: "-----------------------------",
                  value: "/unwarn <@user> - снимет предупреждение у участника"
                },
                {
                  name: "-----------------------------",
                  value: "/mute <@user> - даст мут участнику (в разработке)"
                },
                {
                  name: "-----------------------------",
                  value: "/unmute <@user> - снимет мут участнику (в разработке)"
                },
                {
                  name: "-----------------------------",
                  value: "/youtube - мой ютуб канал"
                }
              ],
              timestamp: new Date(),
              footer: {
                icon_url: bot.user.avatarURL,
                text: " < > не нужны | help | страница 2/2 "
              }
            }
          });
    }
    collector.stop();
    });
};

module.exports.help = {
    name: "help"
};