import bodyParser from "body-parser";
import { log } from "console";
import path from "path";
import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import nodemailer from "nodemailer";
import dotenv from 'dotenv';
dotenv.config();

// Inicialización de Express
const port = process.env.PORT || 3000;
const app = express();

// Middleware
const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("views", __dirname + "/Staticapp/views");
app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/Staticapp/public"));
app.use(express.static(path.join(__dirname, 'aulaVirtual/dist')));

// Página de inicio
app.get('/', (req, res) => {
  res.render('index');
});

app.get("/nosotros", (req, res) => {
  res.render('nosotros');
});

app.get("/programas", (req, res) => {
  res.render('programas');
});

app.get("/contact", (req, res) => {
  res.render('form_email');
});

app.post("/contact", async (req, res) => {
  let { email, text, nombre, numero, asunto } = req.body;
  console.log(req.body);

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: 'admisiones.eysa@gmail.com',
      pass: process.env.PASSWORD_APPWEB
    }
  });

  let message = {
    from: email,
    to: process.env.EMAILTOSEND,
    subject: `${asunto} - ${nombre} - ${numero}`,
    text: text,
    html: text
  };

  transporter.sendMail(message, function (error, info) {
    if (error) {
      console.log('Error al enviar correo electrónico:', error);
    } else {
      console.log('Correo electrónico enviado:', info.response);
    }
    res.render('form_email');
  });
});

// Servir el archivo index.html
app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'aulaVirtual/dist', 'login.html'));
});

// Puerto a activar
app.listen(port, () => {
  console.log('Express server initialized');
});
