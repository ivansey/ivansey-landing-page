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
let technologyModel = require("./models/technology");

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
            res.json({response: "NOT_TOKEN", _id: null, data: {}});
        }

        res.json({response: "CHECK_TOKEN_DONE", _id: data[0].idUser});
    });
});

app.post("/api/v1/users/get", (req, res) => {
    usersModel.findById(req.body._id).then(data => {
        console.log(data);
        res.json({
            response: "USER_FOUND", data: {
                _id: data._id,
                email: data.email
            }
        });
    });
});

app.post("/api/v1/users/admin/get", (req, res) => {
    userSessionModel.find({token: req.body.token}).then(data => {
        console.log(data);
        if (data.length === 0) {
            res.json({
                response: "NOT_ACCESS", data: {
                    _id: null,
                    email: null
                }
            });
        }

        usersModel.findById(data[0].idUser).then(data => {
            res.json({
                response: "USER_FOUND", data: {
                    _id: data._id,
                    email: data.email
                }
            });
        });
    });
});

app.post('/api/v1/technology/get', (req, res) => {
    technologyModel.find({type: req.body.type}).then(data => {
        if (data.length === 0) {
            return res.json({
                response: "NOT_FOUND", data: [{}]
            });
        } else {
            return res.json({
                response: "DONE", data: data
            });
        }
    });
});

app.post("/api/v1/technology/add", (req, res) => {
    userSessionModel.find({token: req.body.token}).then(data => {
        if (data.length === 0) {
            return res.json({response: "NOT_ACCESS"});
        }

        let technology = new technologyModel({
            name: req.body.name,
            description: req.body.description,
            icon: req.body.icon,
            type: req.body.type,
        });
        technology.save();
        return res.json({response: "DONE"});
    });
});

app.post("/api/v1/technology/delete", (req, res) => {
    userSessionModel.find({token: req.body.token}).then(data => {
        if (data.length === 0) {
            return res.json({response: "NOT_ACCESS"});
        }

        technologyModel.remove({_id: req.body._id}).then((data) => {
            return res.json({
                response: "DONE"
            });
        }).catch((err) => {
            return res.status(500).send(err);
        });
    });
});

app.post("/api/v1/technology/edit", (req, res) => {
    userSessionModel.find({token: req.body.token}).then(data => {
        if (data.length === 0) {
            return res.json({response: "NOT_ACCESS"});
        }

        technologyModel.findById(req.body._id).then((data) => {
            if (data.length === 0) {
                return res.json({response: "NOT_FOUND"})
            }

            technologyModel.updateOne({_id: req.body._id}, {
                name: req.body.name,
                description: req.body.description,
                icon: req.body.icon,
                type: req.body.type,
            }).then((data) => {
                return res.json({response: "DONE"})
            }).catch((err) => {
                return res.status(500).send(err)
            });
        }).catch((err) => {
            return res.status(500).send(err)
        });
    });
});

app.listen(PORT, () => {
    usersModel.find({email: "admin"}).then((data) => {
        if (data.length === 0) {
            console.error("Not found admin user\nCreate admin user...");
            let user = new usersModel({
                email: "admin",
                pass: md5("admin"),
            });
            user.save().then(() => {
                console.log("Add admin user\nLogin: admin\nPassword: admin");
            }).catch((err) => {
                console.error("Error add admin user\n" + err);
            });
        }
    });
    console.log("Server started on port " + PORT);
});