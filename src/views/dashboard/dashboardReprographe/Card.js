import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { CRow, CCol, CWidgetStatsA } from '@coreui/react';

const WidgetsDropdown = (props) => {
  const [demandeCount, setdemandeCount] = useState(0);
  const [acceptanceRate, setaccepterdemande] = useState(0);
  const [refuseRate, setrefuserdemande] = useState(0);
  const [recueRate, setrecudemande] = useState(0);




  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const responseDemande = await axios.get('http://localhost:8080/api/countdemande');
        setdemandeCount(responseDemande.data.demandeCount);
        const responseTauxaccept = await axios.get('http://localhost:8080/api/acceptanceRate');
        setaccepterdemande(responseTauxaccept.data.acceptanceRate);
        const responseTauxrefusé = await axios.get('http://localhost:8080/api/refuserate');
        setrefuserdemande(responseTauxrefusé.data.refuseRate);
        const responseTauxrecu = await axios.get('http://localhost:8080/api/recudemande');
        setrecudemande(responseTauxrecu.data.recueRate);
      } catch (error) {
        console.error('Failed to fetch counts:', error);
        setError(true);  // Mise à jour de l'état d'erreur
      }
    };

    fetchCounts();
  }, []);

  

  return (
    <CRow className={props.className} xs={{ gutter: 4 }}>
      <CCol sm={6} xl={4} xxl={3}>
        <CWidgetStatsA
          color="primary"
          value={<> {demandeCount} <span className="fs-6 fw-normal">demandes</span> </>}
          title="Nombre total de demandes"
        />
      </CCol>
      <CCol sm={6} xl={4} xxl={3}>
        <CWidgetStatsA
          color="info"
          value={<> {acceptanceRate}% <span className="fs-6 fw-normal">demaande accépté</span> </>}
          title="taux d'acceptation"
        />
      </CCol>
      <CCol sm={6} xl={4} xxl={3}>
        <CWidgetStatsA
          color="warning"
          value={
            <>
              {refuseRate}% <span className="fs-6 fw-normal">demande refusé</span>
            </>
          }
          title="taux de refuse"
        />
      </CCol>
      <CCol sm={6} xl={4} xxl={3}>
        <CWidgetStatsA
          color="danger"
          value={
            <>
              {recueRate}% <span className="fs-6 fw-normal"> récupérer</span>
            </>
          }
          title="taux de reçu"
        />
      </CCol>
    </CRow>
  );
}

export default WidgetsDropdown;
