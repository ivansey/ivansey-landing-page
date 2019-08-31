let express = require('express');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
let md5 = require('md5');
let cors = require('cors');
let nodemailer = require('nodemailer');

let smtp;

try {
	smtp = nodemailer.createTransport({
		host: 'smtp.yandex.ru',
		port: 465,
		secure: true,
		auth: {
			user: 'root@ivansey.ru',
			pass: '20021212QqQq'
		},
		tls: {
			ciphers: 'SSLv3'
		}
	});
} catch (e) {
	console.error(e);
}

const PORT = 3001;

mongoose.connect("mongodb://localhost/ivansey-landing-page");

let usersModel = require('./models/users');
let userSessionModel = require('./models/userSession');

let app = express();

app.use(bodyParser());
app.use(cors());

app.post("/api/v1/users/reg", (req, res) => {
	usersModel.find({email: req.body.email}).then(data => {
			if (data.length > 0) {
				res.json({response: "EMAIL_NOT_FREE"});
			} else {
				let user = new usersModel({email: req.body.email});
				user.setPass(req.body.pass);
				user.save();
				res.json({response: "DONE"});
			}
		}
	);
});

app.post("/api/v1/users/login", (req, res) => {
	usersModel.find({email: req.body.email}).then(data => {
		if (data.length === 0) {
			res.json({response: "USER_NOT_FOUND", token: null});
		} else {
			if (data[0].validatePass(req.body.pass)) {
				res.json({response: "INVALID_PASSWORD", token: null});
			}
			
			let session = new userSessionModel({idUser: data[0]._id});
			
			let token = session.generateToken();
			session.token = token;
			
			session.save();
			res.json({response: "DONE", token: token});
		}
	})
});

app.post("/api/v1/users/checkToken", (req, res) => {
	userSessionModel.find({token: req.body.token}).then(data => {
		if (data.length === 0) {
			res.json({response: "NOT_TOKEN", id: null});
		}
		
		res.json({response: "CHECK_TOKEN_DONE", id: data[0].idUser});
	});
});

app.post("/api/v1/users/get", (req, res) => {
	usersModel.find({_id: req.body.idUser}).limit(1).then(data => {
		if (data.length === 0) {
			res.json({response: "NOT_USER", data: {}});
		} else {
			res.json({
				response: "USER_FOUND", data: data[0]
			});
		}
	});
});

app.listen(PORT, () => console.log("Server started on port " + PORT));