import { http } from "./http";
import "./websocket/client";

//Subindo o servidor na porta 3333;
http.listen(3333, () => console.log("Server is running on port: 3333") );