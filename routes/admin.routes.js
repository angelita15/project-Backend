const router = require("express").Router()
const fileUploader = require('../config/cloudinary.config');
const { isLoggedIn } = require("../middleware/route-guard")
const { isOwner, isAdmin, isPartner, isUser, formatDate } = require("../utils")
const User = require('./../models/User.model')


router.get('/', isLoggedIn, (req, res, next) => {
    const user = req.session.currentUser
    if (req.session.currentUser.role === 'ADMIN') {
        res.render('Admin/admin-home')
    } else {
        res.render('auth/login-form', { errorMessage: 'Espacio no autorizado' })
    }
})


router.get('/colaboradores', isLoggedIn, (req, res, next) => {

    User
        .find()
        .then(user => res.render('Admin/partners-list', { user }))
        .catch(err => next(err))
})

router.get('/usuarios', isLoggedIn, (req, res, next) => {

    User
        .find()
        .then(user => res.render('Admin/users-list', { user }))
        .catch(err => next(err))
})

router.post('/usuarios/delete/:_id', isLoggedIn, (req, res, next) => {
    const { _id } = req.params

    User
        .findByIdAndDelete(_id)
        .then(() => res.redirect('/admin/usuarios'))
        .catch(err => next(err))
})

module.exports = router