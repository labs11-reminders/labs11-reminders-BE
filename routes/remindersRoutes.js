const express = require('express');

const helpers = require('../dbHelpers/otherModels');

const remindersRoutes = express.Router();

const secured = require('../middleware/secured.js');


//endpoint route handler that gets a single user by id
remindersRoutes.get('/:id', async (req, res) => {
     try {
      const reminder = await helpers.getReminderById(req.params.id);
      if (reminder) {
        res.status(200).json(reminder);
      } else {
        res.status(404).json({message: 'Elisha is working on an amazaing 404 page. In the meantime you get this boring message.'})
      }
    } catch (error) {
      res.status(500).send({message: 'This is embarrassing. Please try to refresh the page and/or Slack us.'});
    }
});
   
//endpoint route handler to delete a reminder
remindersRoutes.delete('/:id', async (req, res) => {
  try {
    const reminder = await helpers.getReminderById(req.params.id)
    console.log(reminder);
    console.log(req.params.id);
    if (reminder) {
        try {
            const destroy = await helpers.deleteReminder(req.params.id);
            if (destroy) {
                res.status(200).json({message: 'The reminder has been deleted.'});
            }
        } catch (error) {
            console.log(error);
            console.log(req.params.id);
            res.status(500).json({error: 'The reminder could not be deleted.'});
        }
    } else {
        res.status(404).json({message: 'The reminder with the specified ID does not exist.'});
    }
} catch (error) {
    res.status(500).json({error: 'The reminder could not be removed.'});
}
});

//endpoint route handler to create a new message/reminder
remindersRoutes.post('/', async (req, res) => {
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
  

module.exports = remindersRoutes; 