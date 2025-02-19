import React, { useState } from 'react';
import './TicketForm.css';

const TicketForm = () => {
  const [formData, setFormData] = useState({
    titreTicket: '',
    dateHeure: '',
    nomClient: '',   
    descriptionTicket: '',
    etapesSuivies: ''    
  });



  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  async function createTicket(ticketData) {
    try {
        const response = await fetch("http://localhost:5000/create-ticket", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(ticketData)
        });

        const data = await response.json(); // Essayer d'extraire la réponse
        if (!response.ok) {
            throw new Error(`Erreur serveur: ${response.status} - ${data.error || 'Aucune info'}`);
        }

        console.log("Ticket créé:", data);
    } catch (error) {
        console.error("Erreur lors de la création du ticket:", error.message);
    }
}





  const handleReset = () => {
    setFormData({
      titreTicket: '',
      dateHeure: '',
      nomClient: '',
      descriptionTicket: '',
      etapesSuivies: ''      
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log("📨 Envoi des données:", formData);
      await createTicket(formData); // 🔹 Envoi au backend
      handleReset(); // 🔹 Réinitialisation du formulaire après soumission réussie
    } catch (error) {
      console.error("❌ Erreur lors de l'envoi:", error);
    }
  };

  const copyToClipboard = () => {
    const ticketText = `
      Titre: ${formData.titreTicket}
      Date et Heure: ${formData.dateHeure}
      Client: ${formData.nomClient}
      Description: ${formData.descriptionTicket}
      Étapes suivies: ${formData.etapesSuivies}
    `;
    navigator.clipboard.writeText(ticketText).then(() => {
      alert('Ticket copié dans le presse-papier');
    });
  };

  return (
  <div>
    <h2 className="title">Création de Ticket</h2> 
    <div className="ticket-form-container">
      
      <form onSubmit={handleSubmit} className="ticket-form">
        <div className="mb-3">
          <label htmlFor="titreTicket" className="form-label">Titre du ticket</label>
          <input
            type="text"
            id="titreTicket"
            name="titreTicket"
            className="form-control w-100"
            value={formData.titreTicket}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="dateHeure" className="form-label">Date et heure</label>
          <input
            type="datetime-local"
            id="dateHeure"
            name="dateHeure"
            className="form-control w-100"
            value={formData.dateHeure}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="nomClient" className="form-label">Nom du client</label>
          <input
            type="text"
            id="nomClient"
            name="nomClient"
            className="form-control w-100"
            value={formData.nomClient}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Description de l'installation */}
        <div className="mb-3">
          <label htmlFor="descriptionTicket" className="form-label">Description de l'installation</label>
          <textarea
            id="descriptionTicket"
            name="descriptionTicket"
            className="form-control w-100"
            value={formData.descriptionTicket}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Étapes suivies */}
        <div className="mb-3">
          <label htmlFor="etapesSuivies" className="form-label">Étapes suivies</label>
          <textarea
            id="etapesSuivies"
            name="etapesSuivies"
            className="form-control w-100"
            value={formData.etapesSuivies}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <div className="d-flex justify-content-between">
            <button type="submit" className="btn btn-success">Soumettre</button>
            <button type="button" className="btn btn-secondary" onClick={handleReset}>Réinitialiser</button>
          </div>
        </div>
      </form>
      {/* Visionneuse du ticket */}
      <div className="ticket-viewer">
        <h3>Prévisualisation du Ticket</h3>
        <pre>{`
          Titre: ${formData.titreTicket}
          Date et Heure: ${formData.dateHeure}
          Client: ${formData.nomClient}
          Description: ${formData.descriptionTicket}
          Étapes suivies: ${formData.etapesSuivies}
        `}</pre>
        <button onClick={copyToClipboard} className="btn btn-primary">Copier dans le CRM</button>
      </div>
    </div>  
  </div>  
  );
};

export default TicketForm;
