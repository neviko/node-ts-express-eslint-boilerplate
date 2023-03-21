import express from 'express';
import { json } from 'body-parser';
import { signinRouter } from './routes/signin';
import { test } from './routes/test';

const app = express();

app.use(json());
app.use(signinRouter);
app.use(test)
// if a route not found call to not found error, which it will call to error handler 
app.all('*', async ()=>{
  // not found
});


export { app };