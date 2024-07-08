import bodyParser from "body-parser";
import { log } from "console";
import path from "path";
import express from "express";
import {dirname} from "path"
import { fileURLToPath } from "url";
import nodemailer from "nodemailer"
import pg from 'pg'
const { Pool } = pg;
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

//conexion a base de datos//
const db = new Pool({
    user:'postgres',
    host:'localhost',
    database:'EYSA',
    password:'olasanty',
    port:5432
})


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

app.get("/vinculate",(req,res)=>{
  res.render('vinculate')
})

///////REGISTER PROFE HDV////////////////////
app.get("/hdv",(req,res)=>{
  
  res.render("profHDV")

})
app.post("/hdv",async(req,res)=>{
  console.log(req.body);
  res.redirect('OK')
  // respuestA SOLICITUD RECIBIDA
})
//////LOGIN/////

app.get('/login',(req,res)=>{
  res.sendFile(path.join(__dirname, '/aulaVirtual-v2/dist', 'src/login.html'));
  const user = 'NICIAL,APELLIDO_COMPLETO,INICIAL_SEGUNDO_APE @ EYSAEDU.COM'
  const clave = 'Numero de identidad'

})
app.post("/login",async(req,res)=>{
  try {
        const client = await db.connect()
        const result = await client.query('SELECT * FROM users_admin')
        const [{_,email,password_admin}] = result.rows
        const {email_post,password_post} = req.body
        
        if (email_post == email && password_admin == password_post){
          res.sendFile(path.join(__dirname, '/aulaVirtual-v2/dist', 'src/home.html'));
        }
        else{
            res.redirect('/login')
        }
        client.release();
  } catch (error) {
        console.error(error);
  }
  // respuestA SOLICITUD RECIBIDA
})

//////LOGIN/////


  

// Puerto a activar 

app.listen(port, () => {


    console.log('Express server initialized');
});
    // email: 'admin@eysaedu.com',
    // password_admin: 'eysa.admin2024