const express = require('express')
const idx = require('idx')

const router = express.Router()

const {
    getUserById,
    getUserActivityById,
    getUserAverageSession,
    getUserPerformance
} = require('./models')

const {
    handleNoUserData
} = require('./middleware')

router.get('/favicon.ico', (req, res) => {
    res.status(204).end(); // Répond avec un statut HTTP 204 (pas de contenu)
});

router.get('/user/:id', (req, res) => {
    const userId = idx(req, _ => _.params.id)
    const userData = getUserById(Number(userId))

    return handleNoUserData(res, userData)
})

router.get('/api/user/:id', (req, res) => {
    const userId = Number(req.params.id);
    const userData = getUserById(userId);
    
    if (!userData) {
      return res.status(404).json({ message: "Utilisateur non trouvé" });
    }
  
    res.json(userData);
  });

router.get('/user/:id/activity', (req, res) => {
    const userId = idx(req, _ => _.params.id)
    const userData = getUserActivityById(Number(userId))

    return handleNoUserData(res, userData)
})

router.get('/user/:id/average-sessions', (req, res) => {
    const userId = idx(req, _ => _.params.id)
    const userData = getUserAverageSession(Number(userId))

    return handleNoUserData(res, userData)
})

router.get('/user/:id/performance', (req, res) => {
    const userId = idx(req, _ => _.params.id)
    const userData = getUserPerformance(Number(userId))

    return handleNoUserData(res, userData)
})

router.get('/user/:id/score', (req, res) => {
    const userId = idx(req, _ => _.params.id)
    const userData = getUserScore(parseInt(userId))

    return handleNoUserData(res, userData)
})

module.exports = router
