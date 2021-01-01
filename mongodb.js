// // CRUD (create, read, update, delete)

// //------------------------------------------------------------------------------------------------------------------------------------

// // const mongodb = require('mongodb')
// // const MongoClient = mongodb.MongoClient
// // const ObjectID = mongodb.ObjectID

// --- const { MongoClient, ObjectID } = require('mongodb')

// // const id = new ObjectID()
// // console.log(id)
// // console.log(id.toHexString().length)
// // //console.log(id.getTimestamp())


// ---------const connectionURL = 'mongodb://127.0.0.1:27017'
// ---------const databaseName = 'task-manager'

// ------MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
//      ----if(error) {
//         =----  return console.log('Unable to connect to database!')
//      ----}

//      //console.log('Connected Correctly!!!')

//      -----const db = client.db(databaseName)

// //------------------------------------------------------------Create Data in mongodb---------------------------------------------     
//      // db.collection('users').insertOne({
//      //      name: 'Mitu',
//      //      age: 30
//      // }, (error, result) => {
//      //      if(error) {
//      //           return console.log('Unable to insert users')
//      //      }

//      //      console.log(result.ops)
//      // })

//      // db.collection('Users').insertMany([
//      //      {
//      //           name: 'Sumi',
//      //           age: 31
//      //      },
//      //      {
//      //           name: 'Hitender',
//      //           age: 32
//      //      }
//      // ], (error, result) => {
//      //      if(error) {
//      //           return console.log('Unable to insert documents')
//      //      }

//      //      console.log(result.ops)
//      // })

//      // db.collection('Task1').insertMany([
//      //      {
//      //           description: 'code1',
//      //           completed: true
//      //      },
//      //      {
//      //           description: 'code2',
//      //           completed: true
//      //      },
//      //      {
//      //           description: 'code3',
//      //           completed: false
//      //      }
//      // ], (error, result)=> {
//      //      if(error) {
//      //           return console.log('unable to insert task1')
//      //      }

//      //      console.log(result.ops)
//      // })

// //------------------------------------------Fetchind data / Read data from database---------------------------------------------------

//      // db.collection('users').findOne({name: 'Mitu', age: 25}, (error, user) => {
//      // db.collection('users').findOne({ _id: "5fc72961cff2af174c47076b" }, (error, user) => {    // output = null, not accurate way

//      // db.collection('users').findOne({ _id: new ObjectID("5fc72961cff2af174c47076b") }, (error, user) => {     // retrun accurate data
//      //      if(error) {
//      //           return console.log('unable to fetch user data')
//      //      }

//      //      console.log(user)
//      // })

//      // db.collection('users').find({ age: 32 }).toArray((error, users)=> {
//      //      if(error) {
//      //           return console.log('Unable to read/fetch data with age 32')
//      //      }
//      //      console.log(users)
//      // })

//      // db.collection('users').find({ age: 32 }).count((error, count)=> {
//      //      if(error) {
//      //           return console.log('Unable to read/fetch data with age 32')
//      //      }

//      //      console.log(count)
//      // })

//      // db.collection('Task1').findOne({ _id: ObjectID("5fc7252d57826207946f18ca")}, (error, task1) => {
//      //      console.log(task1)
//      // })

//      // db.collection('Task1').find({ completed: false }).toArray((error, task) => {
//      //      console.log(task)
//      // })

// //----------------------------------Updating the data-----------------------------------------------------------------------------

//      // db.collection('users').updateOne({
//      //      _id: ObjectID("5fc71949a21afc1cd08acc8a")
//      // },{
//      //      // $set: {
//      //      //      name: 'Sumi'
//      //      // }

//      //      $inc: {
//      //           age: -1
//      //      }
//      // }).then((result)=>{
//      //      console.log(result)
//      // }).catch((error)=> {
//      //      console.log(error)
//      // })

//      // db.collection('Task1').updateMany({
//      //      completed: false
//      // },{
//      //      $set: {
//      //           completed: true 
//      //      }
//      // }).then((result)=> {
//      //      console.log(result.matchedCount)
//      // }).catch((error)=>{
//      //      console.log(error)
//      // })

// //------------------------------------Delete the data----------------------------------------------------------------------------

//      // db.collection('users').deleteOne({ 
//      //      _id: ObjectID("5fc71acf58bf6904e0f25895")
//      // }).then((result)=>{
//      //      console.log(result)
//      // }).catch((error)=>{
//      //      console.log(error)
//      // })

//      // db.collection('Task1').deleteMany({
//      //      description: 'code1'
//      // }).then((result)=>{
//      //      console.log(result.deletedCount)
//      // }).catch((error)=>{
//      //      console.log(error)
//      // })

// })