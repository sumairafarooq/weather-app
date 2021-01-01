const express = require('express')
//const User = require('./models/user')
//const Tasks = require('./models/task')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')
require('./db/mongoose')


const app = express()
const port = process.env.PORT
//const port = process.env.PORT || 3000

// app.use((req, res, next) => {
//      if(req.method === 'GET') {
//           res.send('GET request is not allowed')
//      } else {
//           next()
//      }
// })

// Note: always restart server after adding middleware

// app.use((req, res, next) => {
//      res.send('This Site is Under Maintainance')
// })

// const multer = require('multer')
// const upload = multer({
//      dest: 'images',
//      limits: {
//           fileSize: 1000000
//      },
//      fileFilter(req, file, cb) {
//           // if(!file.originalname.endsWith('.pdf')) {
//           if(!file.originalname.match(/\.(doc|docx)$/)) {
//                return cb(new Error('Please upload word format'))
//           }
//           cb(undefined, true)
//      }
// })

// app.post('/upload', upload.single('upload'), (req, res) => {
//      res.send()
// }, (error, req, res, next) => {
//      res.status(400).send({ error: error.message })
// })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, ()=> {
     console.log('Server is up to the port ' + port)
})

//-------------------Lect 106 Json web token for authentication of login and user-----

// const jwt = require('jsonwebtoken')

// const myFunction = async() => {
//      const token = jwt.sign({_id: 'abc123'}, 'thisismycourse', {expiresIn: '7 days'})
//      console.log(token)

//      const data = jwt.verify(token, 'thisismycourse')
//      console.log(data)
// }

// myFunction()

// --------------------Lect 103 Securly storing password part:1--------------------------------------------

///    ----------- for understading purpose of 'hash' and 'compare' to secure passord----------------

// const bcrypt = require('bcryptjs')

// const myFunction = async() => {
//      const password = 'red12345!'
//      const hashedPassword = await bcrypt.hash(password, 8)  // hash return promise so use await here

//      console.log(password)
//      console.log(hashedPassword)

//      const isMatch = await bcrypt.compare('red12345!', hashedPassword) // compare return promise so use await here
//      console.log(isMatch)
// }
// myFunction()

// const Tasks = require('./models/task')
// const User = require('./models/user')

//  const main = async () => {
// //      const task = await Task.findById('5fdc453a7f70c11a9813b491')
// //      await task.populate('owner').execPopulate()
// //      console.log(task.owner)

//      const user = await User.findById('5fddc0ecf39af82bd0a82caf')
//      await user.populate('tasks').execPopulate()
//      console.log(user.tasks)

// }
// main()