const express = require('express');
const app = express();
const cors = require('cors');

app.set('port',process.env.PORT || 8080);
app.use(cors());
app.use(express.json());
app.use('/api/koder',require('./routes/koder.js'));

async function main(){
	await app.listen(app.get('port'));
	console.log(`server on port ${app.get('port')}`);
}
main();