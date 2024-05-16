const mongoose = require('mongoose')
var Contrato = require("../models/contrato")

module.exports.list = () => {
    return Contrato
        .find()
        .exec()
}

module.exports.findById = id => {
    return Contrato
        .findOne({_id : id})
        .exec()
}

module.exports.findByEntidade = ent => {
    return Contrato
        .find({entidade_comunicante : ent})
        .exec()
}

module.exports.findByTipo = tipo => {
    return Contrato
        .find({tipoprocedimento : tipo})
        .exec()
}

module.exports.findEntidadesId = id => {
    return Contrato
        .find({NIPC_entidade_comunicante : id})
        .exec()
}

module.exports.findEntidadesDistinct = () => {
    return Contrato.distinct('entidade_comunicante')
}

module.exports.findTiposDistinct = () => {
    return Contrato.distinct('tipoprocedimento')
}

module.exports.insert = contrato => {
    if((Contrato.find({_id : contrato._id}).exec()).length != 1){
        var newContrato = new Contrato(contrato)
        return newContrato.save()
    }
}

module.exports.remove = id => {
    return Contrato
        .findByIdAndDelete({_id : id})
        .exec()
}

module.exports.update = (id, contrato) => {
    return Contrato
        .findByIdAndUpdate(id, contrato, {new : true})
        .exec()
}