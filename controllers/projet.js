
const projet = require('../models/projet');
exports.Add = (req, res, next) => {
    //req.body.save()
    var projet1 = new projet(req.body)
    projet1.save()
 .then(() => res.status(201).json({ message: 'projet ajoutée !' }))
       .catch(error => res.status(400).json({ error }));
}
exports.Delete = (req, res, next) => {
    projet.deleteOne({ _id: req.params.id })
      .then(() => res.status(200).json({ message: 'projet supprimé !' }))
      .catch(error => res.status(400).json({ error }));
  }
  
  exports.Update = (req, res, next) => {
    projet.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
      .then(() => res.status(200).json({ message: 'projet modifié !' }))
      .catch(error => res.status(400).json({ error }));
  }

  exports.find = (req, res, next) => {
    projet.findOne({ _id: req.params.id })
      .then(projet => res.status(200).json(projet))
      .catch(error => res.status(404).json({ error }));
  }
  exports.All = (req, res) => {
    projet.find() 
      .then(projet => res.status(200).json(projet))
      .catch(error => res.status(400).json({ error }));
  }