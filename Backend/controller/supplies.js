

const MedicalSupplies = require('../models/supplies');

// Controller function to fetch total quantity of each medical supply type
const getTotalQuantityBySupplyType = async (req, res) => {
    try {
        const pipeline = [
            {
                "$group": {
                    "_id": "$supplieslist",
                    "total_quantity": {
                        "$sum": "$Quantity"
                    }
                }
            }
        ];

        const result = await MedicalSupplies.aggregate(pipeline);
        res.json(result);
    } catch (error) {
        console.error('Error fetching data:', error.message);
        // Send a more descriptive error message
        res.status(500).json({
            error: 'Failed to fetch data from the database',
            message: error.message
        });
    }
};


// Controller function to fetch quantity over time for a specific supply name
const getQuantityOverTime = async (req, res) => {
    const { supplyName } = req.query;
    try {

        const pipeline = [
            {
                "$match": { "supplieslist": supplyName }
            },
            {
                "$group": {
                    "_id": {
                        "$dateToString": { "format": "%Y-%m-%d", "date": "$Date_Purchased" }
                    },
                    "total_quantity": {
                        "$sum": "$Quantity"
                    }
                }
            },
            {
                "$sort": { "_id": 1 }
            }
        ];

        const result = await MedicalSupplies.aggregate(pipeline);
        res.json(result);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send('Internal Server Error');
    }
};

module.exports = {
    getTotalQuantityBySupplyType,
    getQuantityOverTime,
};