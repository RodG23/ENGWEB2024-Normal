var express = require('express');
var router = express.Router();
var Contrato = require('../controllers/contrato');

/* GET users listing. */
router.get('/', function(req, res, next) {
  if(req.query.entidade){
    Contrato.findByEntidade(req.query.entidade)
        .then(data => res.jsonp(data))
        .catch(erro => res.jsonp(erro))
  }else if (req.query.tipo) {
    Contrato.findByTipo(req.query.tipo)
        .then(data => res.jsonp(data))
        .catch(erro => res.jsonp(erro))
  } else {
    Contrato.list()
        .then(data => res.jsonp(data))
        .catch(erro => res.jsonp(erro))
  }
});

router.get('/entidades', function(req, res) {
  Contrato.findEntidadesDistinct()
    .then(data => res.jsonp(data))
    .catch(erro => res.jsonp(erro))
});

router.get('/entidades/:id', function(req, res) {
  Contrato.findEntidadesId(req.params.id)
    .then(data => res.jsonp(data))
    .catch(erro => res.jsonp(erro))
});

router.get('/tipos', function(req, res) {
  Contrato.findTiposDistinct()
    .then(data => res.jsonp(data))
    .catch(erro => res.jsonp(erro))
});


router.get('/:id', function(req, res) {
  Contrato.findById(req.params.id)
    .then(data => res.jsonp(data))
    .catch(erro => res.jsonp(erro))
});

router.post('/', function(req, res) {
  var contrato = {
    _id : req.body._id,
    nAnuncio : req.body.nAnuncio,
    tipoprocedimento : req.body.tipoprocedimento,
    objectoContrato : req.body.objectoContrato,
    dataPublicacao : req.body.dataPublicacao,
    dataCelebracaoContrato : req.body.dataCelebracaoContrato,
    precoContratual : req.body.precoContratual,
    prazoExecucao : req.body.prazoExecucao,
    NIPC_entidade_comunicante : req.body.NIPC_entidade_comunicante,
    entidade_comunicante : req.body.entidade_comunicante,
    fundamentacao : req.body.fundamentacao
  }

  Contrato.insert(contrato)
    .then(data => {res.jsonp(data)})
    .catch(erro => res.jsonp(erro))
});

router.delete('/:id', function(req, res) {
  return Contrato.remove(req.params.id)
    .then(res.jsonp("Deleted " + req.params.id))
    .catch(erro => res.jsonp(erro))
});

router.put('/:id', function(req, res) {
  Contrato.update(req.params.id, req.body)
    .then(data => res.jsonp(data))
    .catch(erro => res.jsonp(erro))
  });

module.exports = router;
