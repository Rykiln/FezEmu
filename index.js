// Copyright © 2021 @Rykiln All Rights Reserved

// Environment Variables and API Calls
require(`dotenv`).config();
const Discord = require("discord.js");
const client = new Discord.Client({ intents: new Discord.Intents(Discord.Intents.ALL) })

// Global Variables
const Prefix = process.env.PREFIX_DEFAULT;
const Token = process.env.TOKEN;

client.once(`ready`, () => {
    console.log(`${client.user.username} Bot Is Now Online!`);
    console.log(Date());
    console.log(`========================================`);
    console.log();
    client.user.setActivity(`Treasurers` , { type: "LISTENING" });
})

client.on(`message`, msgObject => {
    if (!msgObject.content.startsWith(Prefix) || msgObject.author.bot) return; // Ignore Messages That Don't Start With The Prefix And Messages That Come From Bots
    const args = msgObject.content.slice(0).trim().split(/ +/);
    console.log(`[${msgObject.author.username}] used Fezemu in Channel [${msgObject.channel.name}]`);
    console.log(`With message : [${args.join(` `.replace(`$`,``))}]`);
    console.log();
    msgObject.channel.send(args.join(` `).replace(`$`,``))
        .then(msgObject.delete())
        .catch((error) => {console.error(error)});
})

// Initialize Clients
client.login(Token);