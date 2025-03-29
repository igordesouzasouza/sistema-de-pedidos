import express, { Response, Request, NextFunction } from "express";
import { router } from "./routes";
import 'express-async-errors'; // Import express-async-errors to handle async errors
import cors from "cors"; 

const app = express();

app.use(express.json());    

app.use(cors()); //qulquer ip consegue realizar requisições para a api

app.use(router);
app.use((err: Error, req: Request, res: Response, next: NextFunction) =>{
    if(err instanceof Error){
        //se for uma instancia de erro 
        return res.status(400).json({
            error: err.message
        })
    }
    return res.status(500).json({   
        status: "error",    
        message: "Erro no servidor interno",
    })
})

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
