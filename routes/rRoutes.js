const express = require('express');

const helpers = require('../dbHelpers/otherModels.js');

const rRoutes = express.Router();

//endpoint route handler to create a new user
postRoutes.post('/users', async (req, res) => {
    try {
        
        if (req.body.name == null || req.body.password == null || req.body.email == null
            || req.body.phone == null || req.body.country == null || req.body.org_id == null
            || req.body.role_id == null) {
            res.status(400).json({errorMessage: "Please provide information for all of the form fields."});
        } else {
            const user = await helpers.createUser(req.body);
            res.status(201).json(user)
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "There was an error while saving the user to the database"});
    }
});


//endpoint route handler to create a new group
postRoutes.post('/groups', async (req, res) => {
    try {
        
        if (req.body.name == null) {
            res.status(400).json({errorMessage: "Please provide a name for the group or class."});
        } else {
            const group = await helpers.createGroups(req.body);
            res.status(201).json(group)
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "There was an error while saving the group to the database"});
    }
});



//endpoint route handler to create a new organization
postRoutes.post('/orgs', async (req, res) => {
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
postRoutes.post('/reminders', async (req, res) => {
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

module.exports = rRoutes;