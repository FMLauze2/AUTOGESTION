// backend/server.js
const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

// Middleware pour analyser les données JSON
app.use(express.json());
app.use(cors());

const mysql = require('mysql2');

// Créez une connexion à la base de données
const db = mysql.createConnection({
  host: 'localhost',       // L'adresse du serveur de base de données
  user: 'root',            // L'utilisateur pour se connecter à MySQL
  password: 'root', // Ton mot de passe MySQL
  database: 'autogestion'  // Le nom de ta base de données
});

// Vérifier la connexion
db.connect((err) => {
  if (err) {
    console.error('Erreur de connexion à la base de données:', err.stack);
    return;
  }
  console.log('Connecté à la base de données MySQL');
});

module.exports = db;

// Route pour créer un ticket
app.post('/create-ticket', async (req, res) => {
  const ticketData = req.body; // Récupère les données envoyées depuis le frontend
  try {
    console.log(req.body); // Vérifie si les données sont bien reçues

    const { titreTicket, dateHeure, nomClient, descriptionTicket, etapesSuivies } = ticketData;

    const query = `
      INSERT INTO tickets (
        titre_ticket, 
        date_heure, 
        nom_client, 
        description_ticket, 
        etapes_suivies
      ) 
      VALUES (?, ?, ?, ?, ?)
    `;

    const values = [
      titreTicket,
      dateHeure,
      nomClient,
      descriptionTicket,
      etapesSuivies
    ];

    // Utilisation d'un promisify pour exécuter la requête de manière asynchrone
    await new Promise((resolve, reject) => {
      db.query(query, values, (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });

    res.status(200).json({ message: "Ticket créé avec succès" });

  } catch (error) {
    console.error("Erreur serveur:", error);
    res.status(500).json({ error: "Erreur interne du serveur" });
  }
});


app.get('/tickets', (req, res) => {
  console.log('Requête reçue:', req.url); // Exemple d'utilisation de req
  const sql = 'SELECT * FROM tickets';
  db.query(sql, (err, results) => {
    if (err) {
      console.error('Erreur lors de la récupération des tickets:', err);
      res.status(500).send('Erreur serveur');
    } else {
      res.status(200).json({ tickets: results });
    }
  });
});


// Démarrer le serveur
app.listen(port, () => {
  console.log(`Serveur backend en écoute sur http://localhost:${port}`);
});
