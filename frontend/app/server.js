import express from "express";



const server = express();


server.set("port", process.env.PORT || 4860);



export default server;