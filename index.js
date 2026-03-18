const express = require("express");
const app = express();
const PORT = 3000;

const cards = require("./api/data/cards.json");
const towers = require("./api/data/towers.json");

app.get("/cards", (req, res) => {
  res.json(cards);
});

app.get("/cards/:id", (req, res) => {
  const id = parseInt(req.params.id); 
  const card = cards.find(c => c.id === id); 
  if (card) {
    res.json(card)
  } else {
    res.status(404).json({ error: "Card not found" });
  }
});

app.get("/towers", (req, res) => {
  res.json(towers);
});

app.get("/towers/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const tower = towers.find(t => t.id === id);
  if (tower) {
    res.json(tower);
  } else {
    res.status(404).json({ error: "Tower not found" });
  }
});

app.listen(3000, "0.0.0.0", () => {
    console.log(`API rodando em http://localhost:${PORT}`);
});

// https://fankit.supercell.com/d/BmehSDJrZNff/game-assets-1?q=goblins
// https://postimg.cc/gallery/p2SXWyj
