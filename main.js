import bodyParser from "body-parser";
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
//Pagina de inicio
app.get('/',(req,res)=>{
    res.render('index')
})










// Puerto a activar 

app.listen(3000, () => {
    console.log('Express server initialized');
});