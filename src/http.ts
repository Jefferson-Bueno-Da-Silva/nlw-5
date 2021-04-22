import express from 'express';
import { createServer } from "http";
import { Server, Socket } from "socket.io"
import path from "path";

import "./database";
import { routes } from './routes';

const app = express();

// Configuração para utilizar o html da pasta Public
app.use( 
  express.static( 
    path.join( __dirname, "..", "public" ) 
  ) 
);
app.set("views", path.join(__dirname, "..", "public") );
app.engine("html", require("ejs").renderFile);
app.set( "view engine", "html" );
//Rota para interpretar o arquivo html
app.get("/pages/client", (request, response) => {
  return response.render("html/client.html");
});

// Configurando o Socket
const http = createServer(app); //Criando Protocolo HTTP
const io = new Server(http); //Criando Protocolo WS

io.on("connection", (socket: Socket) => {
  // console.log("Se Conectou ", socket.id);
});

// Configurando o http do express
app.use(express.json());
app.use(routes);

export { http, io };