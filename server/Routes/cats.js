const router = require('express').Router();

router.get('/', (req, res) => {
  const cats = ['rondon', 'garfield', 'felix'];
  res.json(cats);
});

module.exports = router;