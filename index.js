import bodyParser from "body-parser";
import { log } from "console";
import path from "path";
import express from "express";
import {dirname} from "path"
import { fileURLToPath } from "url";
import nodemailer from "nodemailer"

// import dotenv from 'dotenv';
// dotenv.config();

// inicializacion de express
const port = process.env.PORT || 3000;
const app = express();
// avtivacion de middleware

const __dirname = dirname(fileURLToPath(import.meta.url))
app.use(bodyParser.urlencoded({extended: true}))
app.set("views", __dirname + "/Staticapp/views");
app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/Staticapp/public"));
app.use(express.static(path.join(__dirname, '/aulaVirtual-v2/dist')));

//Pagina de inicio, creamos las fechas y la info a ingresar en el calendar//

app.get('/',(req,res)=>{
    
    res.render('index')
    
})

app.get("/nosotros",(req,res)=>{
    res.render('nosotros')
})

app.get("/programas",(req,res)=>{
    res.render('programas')
})
app.get("/contact",(req,res)=>{
    res.render('form_email')
})
app.post("/contact",async (req,res)=>{
    // cuerpo del contenido
    let email = req.body.email
    let text = req.body.text
    let nombre = req.body.nombre
    let numero = req.body.numero
    let asunto = req.body.asunto
    console.log(req.body);
    // 
    let transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
    //El User admin de la web qu da permisos como remitente
    user: 'admisiones.eysa@gmail.com',
    //  aplicación generada desde la configuración de seguridad de la cuenta de Google, en contraseñas de aplicaaciones
    pass: "process.env.PASSWORD_APPWEB"
  }
});
    
    let message = {
  from: email,
  to: "process.env.EMAILTOSEND",
  subject: asunto + '-' + nombre + '-' + numero ,
  text: text,
  html: text
};
transporter.sendMail(message, function(error, info){
  if (error) {
    console.log('Error al enviar correo electrónico:', error);
  } else {
    console.log('Correo electrónico enviado:', info.response);
  }
  res.render('form_email')
});

})

///////REGISTER ALUMNO MATRICULA////////////////////
app.get("/matricula",(req,res)=>{
  
  res.render("matricula")

})
app.post("/matricula",(req,res)=>{

  let info = req.body
  console.log(info);
  res.send('OK')

})

///////REGISTER PROFE HDV////////////////////
app.get("/hdv",(req,res)=>{
  
  res.render("profHDV")

})
app.post("/hdv",async(req,res)=>{

  res.send('OK')
})
//////LOGIN/////

app.get('/login',(req,res)=>{
  res.sendFile(path.join(__dirname, '/aulaVirtual-v2/dist', 'login.html'));
})

// Puerto a activar 

app.listen(port, () => {


    console.log('Express server initialized');
});