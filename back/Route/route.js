const express = require('express')
const router = express.Router()
const appelfichier = require('./../Controlleur/controlleur');
router.route('/').get(appelfichier.default);
router.route('/test').get(appelfichier.test);
router.route('/list')
    .get(appelfichier.list)
    .post(appelfichier.posterlist)
    .put(appelfichier.editlist)
    .delete(appelfichier.supprimerlist)

module.exports = router;