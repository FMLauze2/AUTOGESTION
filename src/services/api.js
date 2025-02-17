// src/services/api.js
const API_URL = 'http://localhost:5000';  // URL de ton backend

export const createTicket = async (ticketData) => {
  try {
    const response = await fetch(`${API_URL}/create-ticket`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(ticketData),
    });

    const result = await response.json();
    return result.ticket;
  } catch (error) {
    console.error('Erreur lors de la création du ticket :', error);
    throw error;
  }
};
