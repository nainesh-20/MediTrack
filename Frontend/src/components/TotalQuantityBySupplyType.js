import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';


const TotalQuantityBySupplyType = () => {
    // State variables for labels and quantities
    const [labels, setLabels] = useState([]);
    const [quantities, setQuantities] = useState([]);

    // Fetch data from the API on component mount
    useEffect(() => {
        // console.log("c")
        fetch('http://localhost:4012/api/supplies/total-quantity-by-supply-type')
            .then(response => {
                if (!response.ok) {
                    // console.log("error",response)
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                // console.log("success",response)
                return response.json();
            })
            .then(data => {
                // Extract labels and quantities from the response data
                const newLabels = data.map(item => item._id);
                const newQuantities = data.map(item => item.total_quantity);
                // Update state variables
                setLabels(newLabels);
                setQuantities(newQuantities);
            })
            .catch(error => {
                // console.error('Error fetching data:', error);
            });
    }, []);

    // Define data for the bar chart
    const barData = {
        labels: labels,
        datasets: [
            {
                label: 'Supply Type',
                data: quantities,
                backgroundColor: 'rgba(54, 162, 235, 0.6)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
            },
        ],
    };

    // Options for the bar chart
    const options = {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };

    return (
        <div>
            <h2 style={{fontWeight:600, fontSize:"1.5em", marginBottom:"2em"}}>Total Quantity by Supply Type</h2>
            <Bar data={barData} options={options} />
        </div>
    );
};

export default TotalQuantityBySupplyType;