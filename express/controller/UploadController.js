const { read, write } = require('../../utils/fs')


const upload = (req,res) => {
    const { name } = req.body
    const { path } = req.file

    const allData = read('data.json')

    allData.push({id: allData.length + 1, name , img: path})

    write('data.json', allData)

    res.json('ok')
}

module.exports = {
    upload
}