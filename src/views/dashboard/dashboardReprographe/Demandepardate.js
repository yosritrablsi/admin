import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register the necessary components for Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Demandepardate = () => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: []
  });

  useEffect(() => {
    const fetchDelays = async () => {
      try {
        const { data } = await axios.get('http://localhost:8080/api/demandes-par-date');
        // Assuming data is the array as shown in your Postman example
        const labels = data.map(item => item._id);
        const demandData = data.map(item => item.nombreDemandes);

        setChartData({
          labels: labels,
          datasets: [
            {
              label: 'Number of Demands',
              data: demandData,
              borderColor: 'rgb(75, 192, 192)',
              backgroundColor: 'rgba(75, 192, 192, 0.5)',
            }
          ]
        });
      } catch (error) {
        console.error('Error fetching delay data:', error);
      }
    };

    fetchDelays();
  }, []);

  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Number of Demands'
        }
      },
      x: {
        title: {
          display: true,
          text: 'Date'
        }
      }
    },
    plugins: {
      legend: {
        display: true,
        position: 'top'
      }
    }
  };

  return <div>
    <h2>Demande par date</h2>
    <Line data={chartData} options={options} />
  </div>;
};

export default Demandepardate;
