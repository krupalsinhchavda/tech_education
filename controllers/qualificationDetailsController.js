const qualificationDetailsService = require('../services/qualificationDetailsService');

// Add a new qualification detail
const addQualificationDetail = async (req, res) => {
    try {
        const data = req.body;
        const result = await qualificationDetailsService.addQualificationDetail(data);
        res.status(201).json({ message: "Qualification detail added successfully", data: result });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update a qualification detail by ID
const updateQualificationDetail = async (req, res) => {
    try {
        const QualificationDetailsId = req.params.id;
        const data = req.body;
        const result = await qualificationDetailsService.updateQualificationDetail(QualificationDetailsId, data);
        res.status(200).json({ message: "Qualification detail updated successfully", data: result });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete a qualification detail by ID
const deleteQualificationDetail = async (req, res) => {
    try {
        const QualificationDetailsId = req.params.id;
        const result = await qualificationDetailsService.deleteQualificationDetail(QualificationDetailsId);
        res.status(200).json({ message: "Qualification detail deleted successfully", data: result });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get a qualification detail by ID
const getQualificationDetailById = async (req, res) => {
    try {
        const QualificationDetailsId = req.params.id;
        const result = await qualificationDetailsService.getQualificationDetailById(QualificationDetailsId);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get all qualification details
const getAllQualificationDetails = async (req, res) => {
    try {
        const result = await qualificationDetailsService.getAllQualificationDetails();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    addQualificationDetail,
    updateQualificationDetail,
    deleteQualificationDetail,
    getQualificationDetailById,
    getAllQualificationDetails,
};
