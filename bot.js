const Discord = require("discord.js")
const fs = require("fs")

const client = new Discord.Client()

let entitiesFILE = fs.readFileSync("entities.json")
let entities = JSON.parse(entitiesFILE)

function randomElement(arr){
    let elem = arr[Math.floor(Math.random() * arr.length)]
    if(elem.category == 'Hostile mobs' || elem.category == 'Passive mobs'){
        return elem
    }else{
        return randomElement(arr)
    }
}


client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.on('message', msg => {
    if(msg.content == "!minecraft"){
        msg.reply(encodeURI(`https://minecraft.gamepedia.com/${randomElement(entities).displayName}`))
    }
})

client.login("NzIwMjQ1MzU1NjUxNzkyODk4.XuDK1A.P-s_Ja32wvGwsbCJPN9sQBZlYVk")