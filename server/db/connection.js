const mongoose = require('mongoose')

const conn = mongoose.createConnection(
  'mongodb://127.0.0.1:27017/user', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
)

conn.on('open', ()=> {
  console.log('成功')
})

conn.on('error', (e)=> {
  console.log('失败', e)
})

module.exports = conn