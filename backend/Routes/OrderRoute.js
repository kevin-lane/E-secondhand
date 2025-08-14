const { Makeorder } = require('../Controllers/OrderController');
const router = require("express").Router();

router.post("makeorder", Makeorder);
module.exports = router;
