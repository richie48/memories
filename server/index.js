import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import nodemon from 'nodemon';
import mongoose from 'mongoose';

// had error 'ERR_MODULE_NOT_FOUND'>Have to add .js when importing files
import postRoutes from './routes/posts.js';

const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: 'true' }));
//I got error 'body-parser deprecated undefined extended:'when i  didnt set extended to true
app.use(bodyParser.urlencoded({ limit: '30mb', extended: 'true' }));
app.use(cors());

//This should be in environmental variables
const CONNECTION_URL =
  'mongodb+srv://richard:mypassword@cluster0.pdbaf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

//In this project i am using the then syntax and not async await
//connect to mongodb cloud
mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`server running on port :${PORT}`))
  )
  .catch((error) => console.log(error.message));

//another approach to setting this from how i know
//mongoose.set('useFindAndModify', false);

app.use('/posts', postRoutes);
