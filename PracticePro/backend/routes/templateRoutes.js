const express = require('express');
const router = express.Router();
const Template = require('../models/Template');

// Create a new template
router.post('/', async (req, res) => {
  const { category, templateName, templateStructure } = req.body;

  try {
    const newTemplate = new Template({ category, templateName, templateStructure });
    const savedTemplate = await newTemplate.save();
    res.status(201).json(savedTemplate);
  } catch (error) {
    console.error('Error creating template:', error); // Log error
    res.status(400).json({ message: error.message });
  }
});

// Get all templates or by category
router.get('/', async (req, res) => {
  const { categoryId } = req.query;
  console.log('Received request to get templates with categoryId:', categoryId); // Log categoryId

  try {
    let templates;
    if (categoryId) {
      templates = await Template.find({ category: categoryId });
    } else {
      templates = await Template.find();
    }
    console.log('Fetched templates:', templates); // Log fetched templates
    res.json(templates);
  } catch (error) {
    console.error('Error fetching templates:', error); // Log error
    res.status(500).json({ message: error.message });
  }
});

// Update a template
router.put('/:id', async (req, res) => {
  const { templateName, templateStructure } = req.body;

  try {
    const template = await Template.findById(req.params.id);
    if (!template) return res.status(404).json({ message: 'Template not found' });

    template.templateName = templateName || template.templateName;
    template.templateStructure = templateStructure || template.templateStructure;

    const updatedTemplate = await template.save();
    res.json(updatedTemplate);
  } catch (error) {
    console.error('Error updating template:', error); // Log error
    res.status(500).json({ message: error.message });
  }
});

// Delete a template
router.delete('/:id', async (req, res) => {
  try {
    const template = await Template.findById(req.params.id);
    if (!template) return res.status(404).json({ message: 'Template not found' });

    await template.remove();
    res.json({ message: 'Template deleted successfully' });
  } catch (error) {
    console.error('Error deleting template:', error); // Log error
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
