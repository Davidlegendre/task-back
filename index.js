require('dotenv').config();
import {dbConnect} from './src/config/mongo';
const app = require('./src/app');



async function main()
{   
    const port = process.env.PORT || 3000;
    const HOST = process.env.HOST || "localhost";
    app.listen(port, ()=>{
        console.log(`Server on http://${HOST}:${port}`)    
    })   
    await dbConnect(); 
}
main();