const TelegramBot = require('node-telegram-bot-api')
const fetch = require('node-fetch')
const express = require('express')
const app = express()
const cors = require('cors')
const {read, write} = require('./utils/fs')
const keyboard = require('./keyboards/keyboards')
const router = require('./express/routes/router')
const PORT = process.env.PORT || 9000

const bot = new TelegramBot('5262532867:AAEKee55kPGIvTPwGy9HQiU1lDGd410ONKU', {
    polling: true
})

app.use(express.static('uploads'))
app.use(cors())
app.use(router)

bot.onText(/\/start/, (msg) => {
    bot.sendMessage(msg.chat.id, `Salom ${msg.from.first_name} , xush kelibsiz?`,{
        reply_markup: JSON.stringify({
            keyboard: [
                [
                    {
                        text:"Shaxsiy malumot 👆🧑‍💻"
                    },
                    {
                        text:"Foydali malumotlar 👉"
                    }
                ],
                [
                    {
                        text:"Qidiruv 🔎"
                    }
                ]
            ],
            resize_keyboard: true 
        })
    })
})


// Foydali malumotlar  for

bot.on('message', msg => {
    const chatId = msg.chat.id

    if(msg.text === "Shaxsiy malumot 👆🧑‍💻") {
        bot.sendMessage(chatId, 'Safarov Odilbek ',{
            reply_markup: JSON.stringify({
                keyboard: keyboard.personal,
                resize_keyboard: true
            })
        })
    }


    // basic Go back  for - Last
    if(msg.text === "Go back  ⬅️"){
        bot.sendMessage(chatId, 'Asosiy menyu', {
            reply_markup: JSON.stringify({
                keyboard: [
                    [
                        {
                            text:"Shaxsiy malumot 👆🧑‍💻"
                        },
                        {
                            text:"Foydali malumotlar 👉"
                        }
                    ],
                    [
                        {
                            text:"Qidiruv 🔎"
                        }
                    ]
                ],
                resize_keyboard: true 
            })
        })
    }

     // About my study Hard Work (English course)
     if(msg.text === "About my study Hard Work (English course)"){
        bot.sendMessage(chatId, "About my study Hard Work (English course)", {
            reply_markup: JSON.stringify({
                keyboard: [
                    [
                        {
                            text:"My study (center)"
                        },
                        {
                            text:"My classroom"
                        }
                    ],
                    [
                        {
                            text:"Go back ☜(ﾟヮﾟ☜)"
                        }
                    ]
                ],
                resize_keyboard: true 
            })
        })
    }

    // My center
    if(msg.text === "My study (center)"){
        bot.sendPhoto(chatId, "./img/hard.jpg", {
            caption: 'My english course center '
        })
    }

    // My center and classroom
    if(msg.text === "My classroom"){
        bot.sendPhoto(chatId, "./img/img2.JPG", {
            caption: 'My english course (classroom)'
        })
    }


    // My study Najot Ta'lim for - 2
    if(msg.text === "About my study Najot Ta'lim (IT course)"){
        bot.sendMessage(chatId, "About my study Najot Ta'lim", {
            reply_markup: JSON.stringify({
                keyboard: [
                    [
                        {
                            text:"First filial (Chimboy)"
                        },
                        {
                            text:"Second filial (Xadra)"
                        }
                    ],
                    [
                        {
                            text:"Three filial (Chilonzor)"
                        },
                        {
                            text:"Abutech (company)"
                        }
                    ],
                    [
                        {
                            text:"Go back ☜(ﾟヮﾟ☜)"
                        }
                    ]
                ],
                resize_keyboard: true 
            })
        })
    }

    // Three filial  for
    if(msg.text === "Three filial (Chilonzor)"){
        bot.sendVideo(chatId, "./img/video1.mp4", {
            caption: 'Chilonzorda master class [Xurshidbek Maroziqov] '
        })
    }

    // Second filial  for
    if(msg.text === "Second filial (Xadra)"){
        bot.sendPhoto(chatId, "./img/xadra.jpg", {
            caption:"Xadra filial",
            reply_markup:{
                inline_keyboard: [
                    [
                        {
                            text:'Havola',
                            callback_data:'Xadra_inline'
                        }
                    ]
                ]
            }
        })
    }


    // My workplace  for
    if(msg.text === "About my workplace (Abutech)"){
        bot.sendPhoto(chatId, './img/abutech.jpg',{
            caption: `
            <i>Time: 2021 10 10</i>\n<a href="https://www.instagram.com/abutech.uz/">Havola</a>
            `,
            parse_mode: 'HTML'
        })
    }


    // My portfolio  for
    if(msg.text === "My portfolio (website)"){
        bot.sendMessage(chatId, 'My portfolio', {
            reply_markup: JSON.stringify({
                keyboard: keyboard.data,
                resize_keyboard: true 
            })
        })
    }


    // My first website  for
    if(msg.text === "My first website"){
        const data = read('data.json').find(e => e.name == msg.text)
        bot.sendPhoto(chatId, "./img/Animal1.png", {
            caption:`<i>${data.name}</i>\n
            <b>Batafsil malumotlar uchun👇</b>\n 
            <a href="https://github.com/odilbekjon?tab=repositories">My github</a>  ||  <a href="https://app.netlify.com/teams/odilbek000/overview?_ga=2.6643058.1354957881.1648758707-1998536297.1642958841">My netlify</a>  ||  <a href="https://www.linkedin.com/in/safarov-odilbek-606431230/">My linkedin</a>`,
            parse_mode:"HTML",
            reply_markup:{
                inline_keyboard: [
                    [
                        {
                            text:'Havola',
                            url:'https://portfoilo-animals.netlify.app/index.html',
                            callback_data:'Website_inline'
                        }
                    ]
                ]
            }
        })
    }


    // My second website  for
    if(msg.text === "My second website"){
        bot.sendPhoto(chatId, "./img/kunuz.png", {
            caption:`<i>My second website</i>\n
            <b>Batafsil malumotlar uchun👇</b>\n 
            <a href="https://github.com/odilbekjon?tab=repositories">My github</a>  ||  <a href="https://app.netlify.com/teams/odilbek000/overview?_ga=2.6643058.1354957881.1648758707-1998536297.1642958841">My netlify</a>  ||  <a href="https://www.linkedin.com/in/safarov-odilbek-606431230/">My linkedin</a>`,
            parse_mode:"HTML",
            reply_markup:{
                inline_keyboard: [
                    [
                        {
                            text:'Havola',
                            url:'https://kun-uz-new.netlify.app',
                            callback_data:'Website_inline'
                        }
                    ]
                ]
            }
        })
    }


    // My instagram website  for
    if(msg.text === "My instagram website"){
        bot.sendPhoto(chatId, "./img/insta.png", {
            caption:`<i>My instagram website</i>\n
            <b>Batafsil malumotlar uchun👇</b>\n 
            <a href="https://github.com/odilbekjon?tab=repositories">My github</a>  ||  <a href="https://app.netlify.com/teams/odilbek000/overview?_ga=2.6643058.1354957881.1648758707-1998536297.1642958841">My netlify</a>  ||  <a href="https://www.linkedin.com/in/safarov-odilbek-606431230/">My linkedin</a>`,
            parse_mode:"HTML",
            reply_markup:{
                inline_keyboard: [
                    [
                        {
                            text:'Havola',
                            url:'https://instagram-newap.herokuapp.com/',
                            callback_data:'Website_inline'
                        }
                    ]
                ]
            }
        })
    }

    // My todo app for
    if(msg.text === "My first crm"){
        bot.sendPhoto(chatId, "./img/crm.png", {
            caption:`<i>My todo app</i>\n
            <b>Batafsil malumotlar uchun👇</b>\n 
            <a href="https://github.com/odilbekjon?tab=repositories">My github</a>  ||  <a href="https://app.netlify.com/teams/odilbek000/overview?_ga=2.6643058.1354957881.1648758707-1998536297.1642958841">My netlify</a>  ||  <a href="https://www.linkedin.com/in/safarov-odilbek-606431230/">My linkedin</a>`,
            parse_mode:"HTML",
            reply_markup:{
                inline_keyboard: [
                    [
                        {
                            text:'Havola',
                            url:'https://crm1-new.herokuapp.com/',
                            callback_data:'Website_inline'
                        }
                    ]
                ]
            }
        })
    }


    // Go back  for
    if(msg.text === "Go back ☜(ﾟヮﾟ☜)"){
        bot.sendMessage(chatId, 'Asosiy menyu',{
            reply_markup: JSON.stringify({
                keyboard: [
                    [
                        {
                            text:'About my study Hard Work (English course)'
                        },
                        { 
                            text:"About my study Najot Ta'lim (IT course)"
                        },
                    ],
                    [
                        {
                            text:"About my workplace (Abutech)"
                        },
                        {
                            text:'My portfolio (website)' 
                        },
                    ],
                    [
                        {
                            text:"Go back  ⬅️"
                        }
                    ]
                ],
                resize_keyboard: true
            })
        })
    }

})


bot.on('message', msg => {
    const chatId = msg.chat.id

    if(msg.text === "Foydali malumotlar 👉"){
        bot.sendMessage(chatId, 'Foydali malumotlar',{
            reply_markup: JSON.stringify({
                keyboard: [
                    [
                        {
                            text:'IT texnalogiyalari (technology language)'
                        },
                        { 
                            text:"Qiziqarli faktlar"
                        },
                    ],
                    [
                        {
                            text:"IT oqitish markazlari "
                        },
                        {
                            text:'Foydali kitoblar' 
                        },
                    ],
                    [
                        {
                            text:"Go back  ⬅️"
                        }
                    ]
                ],
                resize_keyboard: true
            })
        })
    }

    if(msg.text === "IT texnalogiyalari (technology language)"){
        bot.sendMessage(chatId, 'IT texnalogiyalri',{
            reply_markup: JSON.stringify({
                keyboard: [
                    [
                        {
                            text:'Java script'
                        },
                        { 
                            text:"Java"
                        },
                    ],
                    [
                        {
                            text:"Python"
                        },
                        {
                            text:'Go (nativ)' 
                        },
                    ],
                    [
                        {
                            text:"Go back"
                        }
                    ]
                ],
                resize_keyboard: true
            })
        })
    }

    if(msg.text === "Go back"){
        bot.sendMessage(chatId, 'Foydali malumotlar',{
            reply_markup: JSON.stringify({
                keyboard: [
                    [
                        {
                            text:'IT texnalogiyalari (technology language)'
                        },
                        { 
                            text:"Qiziqarli faktlar"
                        },
                    ],
                    [
                        {
                            text:"IT oqitish markazlari "
                        },
                        {
                            text:'Foydali kitoblar' 
                        },
                    ],
                    [
                        {
                            text:"Go back  ⬅️"
                        }
                    ]
                ],
                resize_keyboard: true
            })
        })
    }
})


bot.on('callback_query', msg => {
    const chatId = msg.message.chat.id
    if(msg.data === 'Xadra_inline') {
        bot.sendMessage(chatId, "Kontaktingizni jo'nating", {
            reply_markup: JSON.stringify({
                keyboard:[
                    [
                        {
                            text:'Tel raqamini ulashish',
                            request_contact: true
                        },
                        {
                            text:'Manzilni ulashish',
                            request_location: true
                        }
                    ]
                ],
                resize_keyboard: true 
            })
        })
    }
})


// Location  for
bot.on('location', async msg => {
    const { latitude, longitude } = msg.location

    const data  = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=87f526f534114673b84ec3e7d9b3adda`)

    const { results: [ address ]} = await data.json()

    bot.sendMessage(msg.chat.id, `${address.formatted}, shu manzilingiz togrimi axir`, {
        reply_markup: JSON.stringify({
            keyboard: [
                [
                    {
                        text: 'Ha ✅'
                    },
                    {
                        text: 'Yoq ❌'
                    }
                ]
            ],
            resize_keyboard: true
        })
    })

})

app.listen(PORT, console.log(PORT))