import express from "express";
import router from "./routes/index.routes";


const app = express();


app.use(express.json());

const PORT = process.env.PORT || 3000;

app.use("/api/v1/", router);


app.all("*", (req, res) => {
    res.send(`Oh, can't find ${req.originalUrl} on this server!`)
    
});

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});
