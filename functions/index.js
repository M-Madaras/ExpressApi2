import functions from 'firebase-functions'
import  express  from "express";
import cors  from "cors"
import { getDogs } from "./src/dogs.js";
import { testApi } from './src/testApi.js';

const app = express(); // sets up are expres app 
app.use(cors()); // tells it to allow cross origin source sharing
app.use(express.json());// allow post with json body

//Routes
app.get('/dogs', getDogs);

app.get('/test', testApi);


// instead of app.listen(PORT)...

// create a cloud function an point it to app
export const api = functions.https.onRequest(app);