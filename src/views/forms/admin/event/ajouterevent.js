import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CContainer,
  CFormInput,
  CInputGroup,
  CRow,
} from '@coreui/react';

export default function Ajouterevent() {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    lieu: '',
    description: '',
    duree: '',
    file: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      file: e.target.files[0],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('date', formData.date);
      formDataToSend.append('lieu', formData.lieu);
      formDataToSend.append('description', formData.description);
      formDataToSend.append('duree', formData.duree);
      formDataToSend.append('file', formData.file);
  
      const response = await axios.post('http://localhost:8080/api/createevent', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      
      console.log(response.data);
      toast.success('Événement ajouté avec succès');
      setFormData({
        name: '',
        date: '',
        lieu: '',
        description: '',
        duree: '',
        file: null,
      });
    } catch (error) {
      console.error('Error:', error);
      if (error.response && error.response.data && error.response.data.error) {
        toast.error('Erreur: ' + error.response.data.error);
      } else {
        toast.error('Erreur lors de la création de l\'événement');
      }
    }
  };

  return (
    <div>
      <ToastContainer />
      <CContainer>
        <form onSubmit={handleSubmit}>
          <CRow>
            <CCol xs={12}>
              <CCard className="mb-4">
                <CCardHeader>
                  <strong>Créer un nouvel événement</strong>
                </CCardHeader>
                <CCardBody>
                  <CInputGroup className="mb-3">
                    <CFormInput
                      placeholder="Nom de l'événement"
                      aria-label="Nom de l'événement"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                 <CFormInput
                  placeholder="Date de l'événement"
                  aria-label="Date de l'événement"
                  type="date"
                  name="date"
                  value={formData.date}
                 onChange={handleChange}
                 />
               </CInputGroup>
              <CInputGroup className="mb-3">
                <CFormInput
                  placeholder="Lieu de l'événement"
                  aria-label="Lieu de l'événement"
                  type="text"
                  name="lieu"
                  value={formData.lieu}
                 onChange={handleChange}
                />
            </CInputGroup>
             <CInputGroup className="mb-3">
              <CFormInput
                placeholder="Description de l'événement"
                aria-label="Description de l'événement"
                type="text"
               name="description"
               value={formData.description}
               onChange={handleChange}
              />
            </CInputGroup>
           <CInputGroup className="mb-3">
             <CFormInput
              placeholder="Durée de l'événement"
              aria-label="Durée de l'événement"
              type="text"
              name="duree"
              value={formData.duree}
              onChange={handleChange}
            />
           </CInputGroup>
          <CInputGroup className="mb-3">
           <input
           type="file"
            name="file"
            onChange={handleFileChange}
           />
         </CInputGroup>                  
                  <CButton type="submit" color="primary" style={{ marginRight: '10px' }}>
                    Créer événement
                  </CButton>
                  <Link to="/forms/event">
                    <CButton color="secondary">Retour à la liste</CButton>
                  </Link>
                </CCardBody>
              </CCard>
            </CCol>
          </CRow>
        </form>
      </CContainer>
    </div>
  );
}
