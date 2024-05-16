var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:id', function(req, res, next) {
  var id = req.params.id
  axios.get("http://localhost:16000/contratos/entidades/" +id)
  .then(resp =>{
      lContratos = resp.data
      var ent = resp.data[0].entidade_comunicante
      var preco = 0
      lContratos.forEach(element => { 
        preco += element.precoContratual
      });
      res.status(200).render("entidadePage", {'lContratos' : lContratos}, {'ent' : ent}, {'id' : id}, {'preco' : preco})
  })
  .catch(erro =>{
      res.status(503).render('error', {'error' : erro})
  })
});

module.exports = router;
