const express = require('express');
const router = express.Router();

// Exemple de route
router.get('/api/test', (req, res) => {
    res.json({ message: 'Ceci est un test de l’API.' });
});

module.exports = router;
