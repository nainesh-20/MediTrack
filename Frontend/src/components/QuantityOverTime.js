
import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';

function QuantityOverTime() {
    const [labels, setLabels] = useState([]);
    const [quantities, setQuantities] = useState([]);
    const [data, setData] = useState(null);
    const [supplyName, setSupplyName] = useState('Epoetin');
    const [supplyName1, setSupplyName1] = useState('Epoetin');
    const [lineData, setLineData] = useState({
        labels: labels,
        datasets: [
            {
                label: `Quantity Over Time for ${supplyName}`,
                data: quantities,
                backgroundColor: 'green',
                borderColor: 'green',
                borderWidth: 1,
            },
        ],
    })
    const s = ()=>{
        // Fetch data from the API
        fetch(`http://localhost:4012/api/supplies/quantity-over-time?supplyName=${supplyName}`)
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
                setLineData({
                    labels: labels,
                    datasets: [
                        {
                            label: `Quantity Over Time for ${supplyName}`,
                            data: quantities,
                            backgroundColor: 'green',
                            borderColor: 'green',
                            borderWidth: 1,
                        },
                    ],
                })
                setSupplyName1(supplyName)
            })
            .catch(error => {
                // console.error('Error fetching data:', error);
            });
    }
    useEffect(s,[]);
    
    function t() {
         lineData={
        labels: labels,
        datasets: [
            {
                label: `Quantity Over Time for ${supplyName}`,
                data: quantities,
                backgroundColor: 'green',
                borderColor: 'green',
                borderWidth: 1,
            },
        ],
    };}

    // Options for the bar chart
    const options = {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };


    const changeSupplyName= async function (params) {
        setSupplyName(params.target.value)
        await s();
        console.log(supplyName);
    }
    

    return (
        <div>
            <h2 style={{fontWeight:600, fontSize:"1.5em", marginBottom:"2em"}}>Quantity Over Time for {supplyName}</h2>
            <Line data={lineData} />
            <div>
                <label htmlFor="supply-name">Supply Name: </label>
                <select value={supplyName1} onChange={changeSupplyName} class="block w-full px-4 py-2 text-sm text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
                    <option value="Epoetin">Item 1</option>
                    <option value="Walkers">Item 2</option>
                    <option value="Blood Glucose Monitors">Item 3</option>
                </select>
            </div>
        </div>
    );
}

export default QuantityOverTime;