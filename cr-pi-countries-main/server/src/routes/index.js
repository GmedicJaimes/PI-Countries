const { Router } = require("express");
const activityRouter = require('../routes/activityRouter');
const countriesRouter = require('../routes/countriesRouter');

const router = Router();

router.use('/countries', countriesRouter);
router.use('/activities', activityRouter);

module.exports = router;
