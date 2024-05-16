var express = require('express');
var router = express.Router();
var axios = require('axios')

/* GET home page. */
router.get('/', function(req, res, next) {
  axios.get("http://localhost:16000/contratos")
  .then(resp => {
      lcontratos = resp.data
      res.status(200).render("index", {'lContratos' : lcontratos})
  })
  .catch(erro =>{
      res.status(503).render('error', {'error' : erro})
  })});

router.get('/:id', function(req, res, next) {
  var id = req.params.id
  axios.get("http://localhost:16000/contratos/" +id)
  .then(resp =>{
      contrato = resp.data
      res.status(200).render("contratoPage", {'contrato' : contrato})
  })
  .catch(erro =>{
      res.status(503).render('error', {'error' : erro})
  })
});

module.exports = router;
