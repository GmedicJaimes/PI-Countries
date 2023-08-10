const { Router } = require('express');
const { 
  postActivitiesHandler, activityHandler
} = require('../controllers/handlerActivities');

const activitiesRouter = Router();

activitiesRouter.post('/', postActivitiesHandler); //body

activitiesRouter.get('/', activityHandler);//params


module.exports = activitiesRouter;
