import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import { CButton, CContainer } from '@coreui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGroupArrowsRotate } from '@fortawesome/free-solid-svg-icons';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const styles = {
  container: {
    maxWidth: '600px',
    margin: 'auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  image: {
    maxWidth: '100%',
    height: 'auto',
    marginBottom: '20px',
  },
};

export default function ConsulterReunion() {
  const { id } = useParams();
  const [forms, setForms] = useState(null);

  useEffect(() => {
    const fetchForms = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/getonereunion/${id}`);
        setForms(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération de la réunion :', error);
      }
    };
    fetchForms();
  }, [id]);

  const participer = async () => {
    const utilisateur = JSON.parse(localStorage.getItem('utilisateur'));
    if (!utilisateur || !utilisateur.id) {
      console.error('ID de l\'utilisateur non disponible');
      return;
    }
    
    const userId = utilisateur.id;

    try {
      const response = await axios.post(`http://localhost:8080/api/participatereunion/${id}/${userId}`);
      console.log('Participation réussie:', response.data);
      toast.success('Participation réussie');
    } catch (error) {
      console.error('Erreur lors de la participation à la réunion :', error);
    }
  };

  if (!forms) {
    return <div style={styles.container}>Chargement en cours...</div>;
  }

  return (
    <div style={styles.container}>
      <CContainer>
        <ToastContainer/> 
        
        {forms && (
          <>
            <h1>{forms.name}</h1>
            <p>titre: {forms.titre}</p>
            <p>lieu: {forms.lieu}</p>
            <p>date_debut: {forms.date_debut}</p>
            <p>date_fin: {forms.date_fin}</p>
            <p>Description: {forms.description}</p>
          </>
        )}
        
        <CButton type="submit" color="primary" onClick={participer} style={{ margin: '12px', width: '120px' }}>
          Participer 
          <FontAwesomeIcon icon={faGroupArrowsRotate} style={{ marginLeft: '5px' }} />
        </CButton>

        <Link to={`/participationreunion/${id}`}>
          <CButton type="submit" color="primary" style={{ margin: '12px', width: '220px' }}>
            Liste de participation 
            <FontAwesomeIcon icon={faGroupArrowsRotate} style={{ marginLeft: '5px' }} />
          </CButton>
        </Link>  
        
        <CButton type="submit" color="primary" style={{ margin: '12px', width: '100px' }}>
          <Link to="/forms/Reunion" style={{ textDecoration: 'none', color: 'inherit'}}>Annuler</Link>
        </CButton>
      </CContainer>
    </div>
  );
}
