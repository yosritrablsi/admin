import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CButton, CCard, CCardBody, CCardHeader, CCol, CContainer, CRow } from '@coreui/react';

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/getallporfil');
        setUsers(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des utilisateurs :', error);
      }
    };
    fetchUsers();
  }, []);

  const handleDeleteUser = async (userId) => {
    try {
      await axios.delete(`http://localhost:8080/api/deleteprofil/${userId}`);
      setUsers(users.filter((user) => user._id !== userId));
      toast.success('Utilisateur supprimé avec succès');
    } catch (error) {
      console.error('Erreur lors de la suppression de l\'utilisateur :', error);
      toast.error('Erreur lors de la suppression de l\'utilisateur');
    }
  };

  return (
    <div>
      <ToastContainer />
      <CContainer>
        <CRow>
          <CCol xs={12}>
            <CCard className="mb-4">
              <CCardHeader>
                <strong>Liste des utilisateurs</strong>
              </CCardHeader>
              <CCardBody>
                <div className="table-responsive">
                  <table className="table table-bordered table-striped">
                    <thead>
                      <tr>
                        <th>Nom</th>
                        <th>Email</th>
                        <th>Rôles</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {users.map((user, index) => (
                        <tr key={index}>
                          <td>{user.username}</td>
                          <td>{user.email}</td>
                          <td>
                            {user.roles.map((role, index) => (
                              <span key={index}>{role.name}</span>
                            ))}
                          </td>
                          <td>
                            <CButton onClick={() => handleDeleteUser(user._id)}>
                              <FontAwesomeIcon
                                icon={faTrash}
                                style={{ marginRight: '10px' }}
                                title="Supprimer"
                              />
                            </CButton>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
}
