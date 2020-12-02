const models = require('../models');

exports.getAllUser = (req, res) => {
    models.user.findAll()
    .then(data => {
        if(data.length === 0){
            res.sendStatus(204)
        }else {
            res.status(200).send(data)
        }
    })
    .catch(err => res.status(500).send(err))
}

exports.getUser = (req, res) => {
    models.user.findAll({ 
        where: {
             id: req.params.id
        }
    })
    .then(data => {
        if(data.length === 0){
            res.sendStatus(204)
        }else {
            res.status(200).send(data)
        }
    })
    .catch(err => res.status(500).send(err))
}

exports.createUser = (req, res) => {
    models.user.create(req.body)
    .then(data => res.status(201).send(data))
    .catch(err => res.status(500).send(err))
}