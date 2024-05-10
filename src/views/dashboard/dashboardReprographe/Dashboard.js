import React from 'react';
import { CCard, CCardBody, CCardFooter, CCol, CRow } from '@coreui/react';
import WidgetsDropdown from './Card';
import PieChart from './Demandecouleur'; // Make sure this path matches the actual file location
import Demandepardate from './Demandepardate';
const Dashboard = () => {
  return (
    <>
      <WidgetsDropdown className="mb-4" />
      <CCard className="mb-4">
        <CCardBody>
          <CRow>
            <CCol sm={12}>
              <h4 id="traffic" className="card-title mb-0">demande</h4>
              <div className="small text-muted">2023/2024</div>
            </CCol>
            <CCol md={6}>
            <h3 id="traffic" className="card-title mb-0">demande selon choix de couleur</h3>

              <PieChart /> 
            </CCol>
            <CCol md={6}>
              <Demandepardate/> 
            </CCol>
          </CRow>
        </CCardBody>
      </CCard>
    </>
  );
}

export default Dashboard;
