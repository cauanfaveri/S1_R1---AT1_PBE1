const express = require('express');
const router = express.Router();

const produtosRoutes = require('./produtosRoutes');
router.use('/', produtosRoutes);