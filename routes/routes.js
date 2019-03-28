const express = require('express');

const helpers = require('../dbHelpers/otherModels.js');

const routes = express.Router();



//endpoint route handler to create a new group
routes.post('/api/groups', async (req, res) => {
    try {
        
        if (req.body.name == null) {
            res.status(400).json({errorMessage: "Please provide a name for the group or class."});
        } else {
            const group = await helpers.createGroup(req.body);
            res.status(201).json(group)
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "There was an error while saving the group to the database"});
    }
});



//endpoint route handler to create a new organization
routes.post('/api/orgs', async (req, res) => {
    try {
        
        if (req.body.name == null || req.body.description == null) {
            res.status(400).json({errorMessage: "Please provide a name and a description for the organization."});
        } else {
            const organization = await helpers.createOrg(req.body);
            res.status(201).json(organization)
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "There was an error while saving the organization to the database"});
    }
});



//endpoint route handler to create a new message/reminder
routes.post('/api/reminders', async (req, res) => {
    try {
        
        if (req.body.name == null || req.body.description == null || 
            req.body.group_id == null || req.body.user_id == null) {
            res.status(400).json({errorMessage: "Please provide a name and a description for the organization. Group and user ids are also required."});
        } else {
            const reminder = await helpers.createReminder(req.body);
            res.status(201).json(reminder)
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "There was an error while saving the reminder to the database"});
    }
});

module.exports = routes;