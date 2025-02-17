import React, { useState } from 'react';
import './TicketForm.css';

const TicketForm = () => {
  const [formData, setFormData] = useState({
    titreTicket: '',
    dateHeure: '',
    nomClient: '',
    praticiens: [],
    postes: [],
    descriptionInstallation: '',
    etapesSuivies: '',
    fournisseurLecteurs: '',
    posteServeur: '',
    sauvegardeDonnees: '',
    versionInstallee: '',
    typeLecteurs: ''
  });

  const [praticienInput, setPraticienInput] = useState('');
  const [posteInput, setPosteInput] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const addPraticien = () => {
    if (praticienInput) {
      setFormData({
        ...formData,
        praticiens: [...formData.praticiens, praticienInput]
      });
      setPraticienInput('');
    }
  };

  const addPoste = () => {
    if (posteInput) {
      setFormData({
        ...formData,
        postes: [...formData.postes, posteInput]
      });
      setPosteInput('');
    }
  };

  const handleReset = () => {
    setFormData({
      titreTicket: '',
      dateHeure: '',
      nomClient: '',
      praticiens: [],
      postes: [],
      descriptionInstallation: '',
      etapesSuivies: '',
      fournisseurLecteurs: '',
      posteServeur: '',
      sauvegardeDonnees: '',
      versionInstallee: '',
      typeLecteurs: ''
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="ticket-form">
      <h2>Création de Ticket</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="titreTicket" className="form-label">Titre du ticket</label>
          <input
            type="text"
            id="titreTicket"
            name="titreTicket"
            className="form-control w-100"
            value={formData.titreTicket}
            onChange={handleInputChange}
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
          />
        </div>

        <div className="mb-3">
          <label htmlFor="praticiens" className="form-label">Liste des praticiens</label>
          <div className="d-flex">
            <input
              type="text"
              id="praticienInput"
              className="form-control w-75 me-2"
              value={praticienInput}
              onChange={(e) => setPraticienInput(e.target.value)}
            />
            <button type="button" className="btn btn-primary" onClick={addPraticien}>Ajouter</button>
          </div>
          <ul className="list-unstyled mt-2">
            {formData.praticiens.map((praticien, index) => (
              <li key={index} className="bg-light p-2 mb-2 rounded">{praticien}</li>
            ))}
          </ul>
        </div>
       

        <div className="mb-3">
          <label htmlFor="descriptionInstallation" className="form-label">Description de l'installation</label>
          <textarea
            id="descriptionInstallation"
            name="descriptionInstallation"
            className="form-control w-100"
            value={formData.descriptionInstallation}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="etapesSuivies" className="form-label">Étapes suivies</label>
          <textarea
            id="etapesSuivies"
            name="etapesSuivies"
            className="form-control w-100"
            value={formData.etapesSuivies}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="fournisseurLecteurs" className="form-label">Fournisseur des lecteurs</label>
          <input
            type="text"
            id="fournisseurLecteurs"
            name="fournisseurLecteurs"
            className="form-control w-100"
            value={formData.fournisseurLecteurs}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="postes" className="form-label">Liste des postes</label>
          <div className="d-flex">
            <input
              type="text"
              id="posteInput"
              className="form-control w-75 me-2"
              value={posteInput}
              onChange={(e) => setPosteInput(e.target.value)}
            />
            <button type="button" className="btn btn-primary" onClick={addPoste}>Ajouter</button>
          </div>
          <ul className="list-unstyled mt-2">
            {formData.postes.map((poste, index) => (
              <li key={index} className="bg-light p-2 mb-2 rounded">{poste}</li>
            ))}
          </ul>
        </div>

        <div className="mb-3">
          <label htmlFor="posteServeur" className="form-label">Poste serveur</label>
          <input
            type="text"
            id="posteServeur"
            name="posteServeur"
            className="form-control w-100"
            value={formData.posteServeur}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="sauvegardeDonnees" className="form-label">Sauvegarde des données</label>
          <input
            type="text"
            id="sauvegardeDonnees"
            name="sauvegardeDonnees"
            className="form-control w-100"
            value={formData.sauvegardeDonnees}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="typeLecteurs" className="form-label">Type de lecteurs</label>
          <input
            type="text"
            id="typeLecteurs"
            name="typeLecteurs"
            className="form-control w-100"
            value={formData.typeLecteurs}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="versionInstallee" className="form-label">Version installée</label>
          <input
            type="text"
            id="versionInstallee"
            name="versionInstallee"
            className="form-control w-100"
            value={formData.versionInstallee}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-3">
          <div className="d-flex justify-content-between">
            <button type="submit" className="btn btn-success">Soumettre</button>
            <button type="button" className="btn btn-secondary" onClick={handleReset}>Réinitialiser</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default TicketForm;
