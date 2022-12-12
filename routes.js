const express = require("express");

const router = express.Router();

const { getArticles } = require("./controllers");

router.get("/articles", getArticles);

module.exports = router;
