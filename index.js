const Discord = require("discord.js")
require("dotenv").config()

const TOKEN = "OTg1MjU1MTY4MDc1NTA5ODMx.G9Q9mb.eKn8-d3Kf2o-RnLMaIubPKCiSwKXaLNjt8Qv1Q"

const client = new Discord.Client({
    intents: [
    "GUILDS",
    "GUILD_MESSAGES"
    ]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.on("messageCreate", (message) => {
    if (message.content == "balls"){
        message.reply("balls indeed")
    }
})

client.login(process.env.TOKEN)