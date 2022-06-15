const keyboardButton = require('./keyboardButton')
const { read } = require('../utils/fs')

const data = []

const allData = read('data.json')

for(let i = 0 ; i < allData.length; i += 2 ){
    let arr = []
    arr.push( { text: allData[i]?.name } , allData[ i + 1 ]?.name ? { text: allData[i + 1]?.name } : null)
    data.push(arr.filter(e => e))
}

data.push( [keyboardButton.back_two] )

module.exports = {
    personal:[
        [ keyboardButton.IT_course, keyboardButton.en_course ],
        [ keyboardButton.my_portfolio, keyboardButton.my_work ],
        [ keyboardButton.back]
    ],
    data
}