import React, { useEffect, useState } from 'react';

const TicketList = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const response = await fetch("http://localhost:5000/tickets");
        if (!response.ok) {
          throw new Error("Erreur lors de la récupération des tickets");
        }
        const data = await response.json();
        setTickets(data.tickets);  // Accède à 'tickets' dans la réponse
      } catch (error) {
        console.error("Erreur:", error);
      }
    };

    fetchTickets();
  }, []);

  return (
    <div className="container mt-4">
      <h2>Liste des Tickets</h2>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Titre</th>
            <th>Date</th>
            <th>Client</th>
            <th>Description</th>
            <th>Etapes suivies</th>
          </tr>
        </thead>
        <tbody>
        {tickets.map((ticket) => (
            <tr key={ticket.id}>
            <td>{ticket.id}</td>
            <td>{ticket.titre_ticket}</td>
            <td>{new Date(ticket.date_heure).toLocaleString()}</td>
            <td>{ticket.nom_client}</td>
            <td>{ticket.description_ticket || 'Aucune description'}</td>  {/* Affichage description_ticket */}
            <td>{ticket.etapes_suivies || 'Aucune étape suivie'}</td>  {/* Affichage etapes_suivies */}
            </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
};

export default TicketList;
