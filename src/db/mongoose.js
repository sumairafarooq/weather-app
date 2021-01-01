const mongoose = require('mongoose')


mongoose.connect(process.env.MONGODB_URL, {
     useNewUrlParser: true,
     useCreateIndex: true,
     useFindAndModify: false,
     autoIndex: true
})

// const User = mongoose.model('User', {
//      name : {
//           type: String,
//           required: true,
//           trim: true
//      }, 
//      password: {
//           type: String,
//           required: true,
//           trim: true,
//           minLength: 7,
//           validate(value) {
//                if(value === 'password'  || value.includes('password')) {
//                     throw new Error('Cannot use this password')
//                }
//           }
//      },
//      email : {
//           type: String,
//           required: true,
//           trim: true,
//           lowercase: true,
//           validate(value) {
//                if(!validator.isEmail(value)) {
//                     throw new Error('Invalid Email Address')
//                }
//           }
//      },
//      age : {
//           type: Number,
//           default: 0,
//           validate(value) {
//                if(value < 0) {
//                     throw new Error('Age must be a positive value')
//                }
//           }
//      }
// })

// // const me = new User({
// //      name: '   Nishu  ',
// //      //age: -1
// //      email: 'Nishu88000@GMAIL.COM',
// //      password: 'password123'
// // })

// // me.save().then(()=>{
// //      console.log(me)
// // }).catch((error)=> {
// //      console.log(error)
// // })

// const Tasks = mongoose.model('Tasks', {
//      description: {
//           type: String,
//           required: true, 
//           trim: true
//      }, 
//      completed: {
//           type: Boolean,
//           default: false
//      }
// })

// const task1 = new Tasks({
//      description: '   Learning the mongoose   '
     
// })

// task1.save().then(()=>{
//      console.log(task1)
// }).catch((error)=>{
//      console.log(error)
// })