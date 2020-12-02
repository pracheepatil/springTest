const models = require('../models');

exports.getAllUserCompanyMap = (req, res) => {
    models.userCompanyMap.findAll()
    .then(data => {
        if(data.length === 0){
            res.sendStatus(204)
        }else {
            res.status(200).send(data)
        }
    })
    .catch(err => res.status(500).send(err))
}

exports.getUserCompanyMap = (req, res) => {
    models.userCompanyMap.findAll({ 
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

exports.createUserCompanyMap = (req, res) => {
    models.user.userCompanyMap(req.body)
    .then(data => res.status(201).send(data))
    .catch(err => res.status(500).send(err))
}