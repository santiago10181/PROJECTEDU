import bodyParser from "body-parser";
import { log } from "console";
import express from "express";
import {dirname} from "path"
import { fileURLToPath } from "url";
import nodemailer from "nodemailer"

// inicializacion de express
const app = express();
// avtivacion de middleware
const __dirname = dirname(fileURLToPath(import.meta.url))
app.use(bodyParser.urlencoded({extended: true}))
app.set('view engine', 'ejs');
app.use(express.static('public'))
//Pagina de inicio, creamos las fechas y la info a ingresar en el calendar

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
    // 
    let transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
    //El User admin de la web qu da permisos como remitente
    user: '<correo de permisos>',
    //  aplicación generada desde la configuración de seguridad de la cuenta de Google, en contraseñas de aplicaaciones
    pass: 'contraseña de aplicaciones'
  }
});
    
    let message = {
  from: email,
  to: 'ingles.eysa@gmail.com',
  subject: 'Asunto del correo electrónico',
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

// Puerto a activar 

app.listen(3000, () => {
    console.log('Express server initialized');
});

/* <p> Nosotros, 1 pag, todo</p>
<p>Programas, pag principal con todos programs => cada uan se dirige a su pag info</p>
<p>formulario eysa</p> */
// yexu ojrp qjcn ycjv
