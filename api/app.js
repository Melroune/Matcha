import { MongoClient } from 'mongodb';
import cors from 'cors';
import express from 'express';
import bodyParser from 'body-parser';
import Nuance from 'nuance';
import firstCheck from './firstcheck';
import databaseCheck from './databasecheck';
import toDatabase from './todatabase';
import login	from './login';
import getIpLocation from './hiddenlocate';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

const corsOptions = {
	origin: 'http://localhost:3000',
	optionsSuccessStatus: 200,
}

// POST PUT DELETE... : req.body
// GET : req.query
// geolib

app.get('/', (req, res) => {
		res.send('Hello World!');
});

app.post('/speech', (req, res) => {
	const nuance = new Nuance('NMDPTRIAL_z_kerkeb_gmail_com20161021175837', 'f8d495505476c8e1f3e48f5021a13858b1073d19bb35c7263bec5d9ccaf93cc2cdd1132147db023bbf918be132c339e4ca76fd85acc5abe7b108837b01bf3ece');
	nuance.sendTTSRequest({
	text: 'hello world', // The text you would like to convert to speech.
	output: 'testFile.wav', // The output file.
	outputFormat: 'wav', // The codec you would like to use.
	language: 'en_US', // The language code (please refer to Nuance's documentation for more info).
	voice: 'Tom', // The voice you would like to use (please refer to Nuance's documentation for more info).
	identifier: 'randomIdentifierStringHere', // The user identifier (please refer to Nuance's documentation for more info).
	success: () => { // The success callback function.
		console.log('The file was saved.');
	},
	error : (response) => { //The error callback function - returns the response from Nuance that you can debug.
			console.log('An error was occurred');
			console.log(response);
	},
});

		console.log('que voit tu de la haut');
		return 	res.send('Registration ok');
});

app.post('/register', cors(corsOptions), (req, res) => {
	const url = 'mongodb://146.185.158.79:27017/matcha';
	MongoClient.connect(url, async (err, db) => {
		if (err) {
			console.log(err);
			return res.send(err || 'err');
		} else 	if (await firstCheck(req.body) === false) {
				console.log('les yeux du ciel');
				return 	res.send('Please fill all the form');
		}	else if (await databaseCheck(req.body, db) === false) {
			return 	res.send('The username / mail already exist');
		} else if (await toDatabase(req.body, db) === false) {
			return	res.send('Database Error');
		}
		// await getIpLocation();
		console.log('que voit tu de la haut');
		 return 	res.send('Registration ok');
	});
});

app.post('/login', (req, res) => {
	const url = 'mongodb://146.185.158.79:27017/matcha';
	MongoClient.connect(url, async (err, db) => {
		if (err) {
			console.log(err);
			return res.send(err || 'err');
		} if (await login(req.body, db) === false) {
			return res.send('login error');
		}
		return res.send('loged successfully');
});
});

app.listen(8080, () => {
	console.log('Example app listening on port 8080!');
});
