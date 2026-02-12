const router = require('express').Router()

const {resetValue,decrementValue,incrementValue,getValue} = require('../controllers/counter')

router.get('/',getValue)
router.post('/inc',incrementValue)
router.post('/dec',decrementValue)
router.post('/reset',resetValue)

module.exports = router