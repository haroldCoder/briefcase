const mongoose = require('mongoose');
const uri =  process.env.MONGODB_URI ?
process.env.MONGODB_URI
: 'mongodb+srv://koder:koder@koderx.qxvmz.mongodb.net/coderx?retryWrites=true&w=majority';
 
 mongoose.connect(uri,{
	 useNewUrlParser: true
 });

const conection = mongoose.connection;

conection.once('open',()=>{
	console.log('db is connected');
})