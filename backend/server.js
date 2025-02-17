// backend/server.js
const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

// Middleware pour analyser les données JSON
app.use(express.json());
app.use(cors());

// Route pour créer un ticket
app.post('/create-ticket', (req, res) => {
  const ticketData = req.body; // Récupère les données envoyées depuis le frontend

  // Simuler un ID pour le ticket
  const newTicket = {
    id: Date.now(),
    ...ticketData,
  };

  // Répondre avec le ticket créé
  res.status(201).json({ ticket: newTicket });
});

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Serveur backend en écoute sur http://localhost:${port}`);
});