import bodyParser from "body-parser";
import { log } from "console";
import express from "express";
import {dirname} from "path"
import { fileURLToPath } from "url";


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


// Puerto a activar 

app.listen(3000, () => {
    console.log('Express server initialized');
});

/* <p> Nosotros, 1 pag, todo</p>
<p>Programas, pag principal con todos programs => cada uan se dirige a su pag info</p>
<p>formulario eysa</p> */