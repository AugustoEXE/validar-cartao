const express = require("express");
const app = express();

app.get("/", (req, res) => {
  const { token, data } = req.query;

  const uuidRegex =
    /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
  if (uuidRegex.test(token)) {
    res.send(`Cartão valido para o aluno: ${data} `);
  } else {
    // Token inválido
    res.send("Token inválido");
  }
});

app.listen(3001, () => {
  console.log("Servidor iniciado na porta 3000");
});
