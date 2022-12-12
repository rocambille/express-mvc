const { getArticlesFromDatabase } = require("./models");

const getArticles = (req, res) => {
  getArticlesFromDatabase().then(([rows]) => {
    res.json(rows);
  });
};

module.exports = { getArticles };
