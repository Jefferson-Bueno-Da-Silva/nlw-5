import express, { response } from 'express';
const app = express();
/**
 * GET = Buscas
 * POST = Criação
 * PUT = Alteração
 * DELETE = Deletar
 * PATCH = Alterar uma informação especifica 
 */
app.get('/', (req, res) => {
  return res.json({
    message: "Olá NLW 05"
  });
});

app.post("/", (req, res) =>{
  return res.json({ 
    message : "Usuário Salvo com sucesso"
  });
});

app.listen(3333, () => console.log("Server is running on port: 3333") );