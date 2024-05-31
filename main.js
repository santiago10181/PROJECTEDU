import bodyParser from "body-parser";
import { log } from "console";
import express from "express";
import {dirname} from "path"
import { fileURLToPath } from "url";

import fs from "fs"
import {JSDOM} from "jsdom"
// inicializacion de express
const app = express();
// avtivacion de middleware
const __dirname = dirname(fileURLToPath(import.meta.url))
app.use(bodyParser.urlencoded({extended: true}))
app.set('view engine', 'ejs');
app.use(express.static('public'))
//Pagina de inicio, creamos las fechas y la info a ingresar en el calendar

app.get('/',(req,res)=>{
    
    const date = new Date()
    // establece el año
    const año = date.getFullYear()
    // estable el mes
    const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio","Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];  
    const mesAct = meses[date.getMonth()]
    // obtener dia
    const diasSem = ["Dom", "Lun", "Mar", "Mié","Jue","Vie","Sáb"];
    const diaAct = diasSem[date.getDay()]
    res.render('index',{meses:meses,diasSem:diasSem})

    
})

// idclient = 6916670296-qse3pc6trqav3bi7vl34tb4il5vgau4d.apps.googleusercontent.com








// Puerto a activar 

app.listen(3000, () => {
    console.log('Express server initialized');
});