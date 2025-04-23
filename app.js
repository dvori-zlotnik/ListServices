import express from 'express'
import bodyParser from 'body-parser'
import renderApi from '@api/render-api';
import dotenv from 'dotenv'
dotenv.config(); // טוען את משתני הסביבה מהקובץ .env
const app = express()
const port = process.env.PORT

app.use(bodyParser.json())
app.get('',(req,res)=>{
    renderApi.auth(process.env.API_KEY);
    renderApi.listServices({includePreviews: 'true', limit: '20'})
      .then(({ data }) => res.status(200).send(data))
      .catch(err => console.error(err));
})
app.listen(port, () => {
    console.log(`my application is running on http://localhost:${port}`)
})
