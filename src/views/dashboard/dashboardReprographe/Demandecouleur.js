import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Pie } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels'; // Make sure you have installed this plugin

// Register the plugins needed for Pie chart
Chart.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const PieChart = () => {
  const [rates, setRates] = useState({ noirBlancRate: 0, couleurRate: 0 });

  useEffect(() => {
    const fetchDemandeStats = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/staticdemande');
        setRates({
          noirBlancRate: parseFloat(response.data.noirBlancRate),
          couleurRate: parseFloat(response.data.couleurRate)
        });
      } catch (error) {
        console.error('Failed to fetch demande stats:', error);
      }
    };

    fetchDemandeStats();
  }, []);

  const data = {
    labels: ['Noir et Blanc', 'Couleur'],
    datasets: [
      {
        label: 'Répartition des demandes',
        data: [rates.noirBlancRate, rates.couleurRate],
        backgroundColor: [
          'rgba(54, 162, 235, 0.6)',  
          'rgba(255, 206, 86, 0.6)'   
        ],
        borderColor: [
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)'
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // Ensure the aspect ratio is not maintained
    plugins: {
      tooltip: {
        callbacks: {
          label: function(tooltipItem) {
            return tooltipItem.label + ': ' + tooltipItem.raw.toFixed(2) + '%';
          }
        }
      },
      legend: {
        display: true,
        position: 'top'
      },
      datalabels: {
        color: '#fff',
        font: {
          weight: 'bold'
        },
        formatter: (value) => {
          return value.toFixed(2) + '%';
        }
      }
    },
    
  };

  return (
    <div style={{ width: '300px', height: '300px' }}> {/* Set fixed size here */}
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChart;
