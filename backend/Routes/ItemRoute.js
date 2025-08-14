const { Additem, GetItems } = require('../Controllers/ItemController');
const router = require("express").Router();

router.post("/additem", Additem);
router.get("/items", GetItems);
module.exports = router;
