const express = require('express');
const router = express.Router();

// Rotta d'esempio
router.get('/', (req, res) => {
  res.send('Messaggi inviati (vuoto)');
});

module.exports = router;
