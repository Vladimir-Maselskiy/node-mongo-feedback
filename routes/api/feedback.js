const express = require("express");

const router = express.Router();

const ctrl = require("../../controllers/feedback");

router.get("/", ctrl.getAll);

router.post("/", ctrl.add);

module.exports = router;
