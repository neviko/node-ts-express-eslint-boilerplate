import express, {Request, Response} from 'express';

const router = express.Router();

router.get('/api/test',
async (req: Request,res:Response)=>{
  res.status(201).send({});

});

export {router as test};
