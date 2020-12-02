const models = require('../models');

exports.getAllCompany = (req, res) => {
    models.company.findAll()
    .then(data => {
        if(data.length === 0){
            res.sendStatus(204)
        }else {
            res.status(200).send(data)
        }
    })
    .catch(err => res.status(500).send(err))
}

exports.getCompany = (req, res) => {
    models.company.findAll({
        where: {
            id: req.params.id
        },
        include: [{
            model: models.user,
            include: [{
                model: models.userCompanyMap
            }]
        }]
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

exports.createCompany = (req, res) => {
    models.company.create(req.body)
    .then(data => res.status(201).send(data))
    .catch(err => res.status(500).send(err))
}

exports.deleteCompany = (req, res) => {
    models.company.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(data => res.send({msg: 'Branch Deleted'}))
    .catch(err => res.status(500).send(err))
}
