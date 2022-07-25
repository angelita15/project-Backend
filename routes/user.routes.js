const router = require("express").Router()
const fileUploader = require('../config/cloudinary.config');
const { isLoggedIn } = require("../middleware/route-guard")
const User = require('./../models/User.model')
const { isOwner, isAdmin, isPartner, isUser, formatDate } = require("../utils")
// router.get('/perfil-usuario', isLoggedIn, (req, res, next) => {
//     res.render("users/user-profile", { user: req.session.currentUser })
// })


router.get('/perfil-usuario/:_id', isLoggedIn, (req, res, next) => {
    const { _id } = req.params

    User
        .findById(_id)
        .then(user => {
            res.render(`users/user-profile`, {
                user,
                isUser: isUser(req.session.currentUser),
                isOwner: isOwner(req.session.currentUser._id, _id),
                isPartner: isPartner(user),
            })
        })
        .catch(err => next(err))
})

router.get('/perfil-usuario/editar/:_id', isLoggedIn, (req, res, next) => {
    const { _id } = req.params

    User
        .findById(_id)
        .then(user => res.render('users/edit-user-profile', user))
        .catch(error => next(error))

})


router.post('/perfil-usuario/editar/:_id', isLoggedIn, fileUploader.single('image'), (req, res, next) => {
    const { _id } = req.params
    const { username, email } = req.body

    User
        .findByIdAndUpdate(_id, { username, email, image: req.file?.path }, { new: true })
        .then(() => res.redirect(`/perfil-usuario/${_id}`))
        .catch(err => console.log(err))
})

router.get('/mis-eventos', isLoggedIn, (req, res, next) => {

    User
        .find()
        .then(() => res.render('users/assists-list'))
        .catch(err => next(err))

})

module.exports = router