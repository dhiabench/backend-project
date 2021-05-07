const express = require ('express');
const router = express.Router();
const projetCtrl = require ('../controllers/projet');

router.post('/Add',projetCtrl.Add);
router.delete('/Delete/:id',projetCtrl.Delete);
router.put('/Update/:id',projetCtrl.Update);
router.get('/find/:id',projetCtrl.find);
router.get('/all',projetCtrl.All);


module.exports = router ;
