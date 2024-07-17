import bodyParser from "body-parser";
import { log } from "console";
import path, { join } from "path";
import express from "express";
import {dirname} from "path"
import { fileURLToPath } from "url";
import nodemailer from "nodemailer"
import pkg from 'pg';
const { Pool } = pkg;
import multer from "multer";
// import dotenv from 'dotenv';
// dotenv.config();
const pool = new Pool({
  user: 'postgres',
  password: 'olasanty',
  database: 'EYSA',
  host: 'localhost',
  port: 5432
});
// inicializacion de express
const port = process.env.PORT || 3000;
const app = express();
// avtivacion de middleware

const __dirname = dirname(fileURLToPath(import.meta.url))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set("views", __dirname + "/Staticapp/views");
app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/Staticapp/public"));
app.use(express.static(path.join(__dirname, '/aulaVirtual-v2/dist')));


/////////////////////////////////////
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
app.get("/matricula",(req,res)=>{
  
  res.render("matricula")

})
///////REGISTER ALUMNO MATRICULA////////////////////

app.post("/matricula",(req,res)=>{

  let info = req.body
  console.log(info);
  res.send('OK')

})

app.get("/vinculate",(req,res)=>{
  res.render('vinculate')
})

///////REGISTER PROFE HDV////////////////////
app.get("/hdv",async(req,res)=>{
  res.render("profHDV")
})

const multerHDV = multer({
  dest: join(__dirname,'./Hojas_de_vida')
}
)

app.post("/hdv",multerHDV.single('file'),async(req,res)=>{

  
  try {
   
    const {fname,lname,sexo,tipo_id,num_id,profesion,area_dese,tel,email,direccion,ciudad,depto,anos_exp, perfil_prof,
      inst_exp_ult,  cargo_ult, tiemp_lab_ult} = req.body
    const query = `
      INSERT INTO profesors (nombre, apellido, sexo, tipo_id, num_id, profesion,
      area_dese, tel, email, direccion, ciudad, depto, anos_exp, perfil_prof, inst_exp_ult, cargo_ult, tiemp_lab_ult)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17)
    `;

  const values = [fname, lname, sexo, tipo_id, num_id, profesion, area_dese, tel, email, direccion,
    ciudad, depto, anos_exp, perfil_prof, inst_exp_ult, cargo_ult, tiemp_lab_ult

  ]; 

  const result = await pool.query(query, values);
    res.send('OK')
    pool.end()
  } catch (error) { 
    console.error(error);
  }
  
})
app.get('/home',(req,res)=>{
  res.sendFile(path.join(__dirname, '/aulaVirtual-v2/dist', 'src/home.html'));
})
app.post('hdv_file')
//////LOGIN/////

app.get('/login',(req,res)=>{
  res.sendFile(path.join(__dirname, '/aulaVirtual-v2/dist', 'src/login.html'));
  const user = 'NICIAL,APELLIDO_COMPLETO,INICIAL_SEGUNDO_APE @ EYSAEDU.COM'
  const clave = 'Numero de identidad'

})
app.post("/login",async(req,res)=>{

  try {

        const result = await pool.query('SELECT * FROM users_admin')
        const [{_,email,password_admin}] = result.rows
        const {email_post,password_post} = req.body
        
        if (email_post == email && password_admin == password_post){
          res.sendFile(path.join(__dirname, '/aulaVirtual-v2/dist', 'src/home.html'));
        }
        else{
            res.redirect('/login')
        }

  } catch (error) {
        console.error(error);
  }
})

// Puerto a activar 

app.listen(port, () => {
    console.log('Express server initialized');
});
    // email: 'admin@eysaedu.com',
    // password_admin: 'eysa.admin2024