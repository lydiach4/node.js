
console.log("Hello World");


const http = require('http');
const server = http.createServer((req, res) => {
    res.end('<h1>Hello Node!!!!</h1>\n');
});
server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});


const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
    service: 'gmail', 
    auth: {
        user: 'youremail@gmail.com', 
        pass: 'password' 
    }
});


const mailOptions = {
    from: 'youremail@gmail.com',
    to: 'yourotheremail@gmail.com', 
    subject: 'Hello from Node.js',
    text: 'This is a test email sent from Node.js!'
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Email sent: ' + info.response);
});








