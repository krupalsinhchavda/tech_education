const feesService = require('../services/feesService');

// Add a new fee record
const addFee = async (req, res) => {
    try {
        const feeData = req.body;
        const result = await feesService.addFee(feeData);
        res.status(201).json({ message: "Fee record added successfully", data: result });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update a fee record by ID
const updateFee = async (req, res) => {
    try {
        const FeesId = req.params.id;
        const feeData = req.body;
        const result = await feesService.updateFee(FeesId, feeData);
        res.status(200).json({ message: "Fee record updated successfully", data: result });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete a fee record by ID
const deleteFee = async (req, res) => {
    try {
        const FeesId = req.params.id;
        const result = await feesService.deleteFee(FeesId);
        res.status(200).json({ message: "Fee record deleted successfully", data: result });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get a fee record by ID
const getFeeById = async (req, res) => {
    try {
        const FeesId = req.params.id;
        const result = await feesService.getFeeById(FeesId);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get all fee records
const getAllFees = async (req, res) => {
    try {
        const result = await feesService.getAllFees();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    addFee,
    updateFee,
    deleteFee,
    getFeeById,
    getAllFees,
};
