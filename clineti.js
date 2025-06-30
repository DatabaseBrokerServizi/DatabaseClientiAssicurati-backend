const express = require('express');
const router = express.Router();

// QUI puoi mettere le rotte vere dopo
router.get('/', (req, res) => {
  res.send('Lista clienti (vuota per ora)');
});

module.exports = router;
