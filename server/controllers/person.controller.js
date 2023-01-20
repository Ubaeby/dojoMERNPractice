const Person = require('../models/person.model')
module.exports.index = (req, res) => {
    res.json({
        message: "Hello World"
    });
}

module.exports.createPerson = (req, res) => {
    Person.create(req.body)
        .then(person => res.json(person))
        .catch( err => res.json(err));
}

module.exports.getAllPeople = (req, res) => {
    Person.find()
        .then( (allThePeoples) => {
            res.json(allThePeoples)
        })
        .catch( err => {
            res.json( {message: 'Something went wrong', error: err})
        });
}

module.exports.getPerson = (req, res) => {
    Person.findOne({_id:req.params.id})
        .then(person => res.json(person))
        .catch(err => res.json(err))
}

module.exports.updatePerson = (req,res) => {
    Person.findOneAndUpdate({_id:req.params.id}, req.body, {new:true})
        .then(updatedPerson => res.json(updatedPerson))
        .catch(err => res.json(err))
}

module.exports.deletePerson = (req,res) => {
    Person.deleteOne({_id:req.params.id})
        .then(avadaKedavra => res.json(avadaKedavra))
        .catch(err => res.json(err))
}