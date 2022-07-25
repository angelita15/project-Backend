const router = require("express").Router()
const bcryptjs = require('bcryptjs')

const User = require('./../models/User.model')
const saltRounds = 10
const { isOwner, isAdmin, isPartner, isUser, formatDate } = require("../utils")


// registro users
router.get('/registro', (req, res, next) => {
    res.render('auth/signup-form')
})

router.post('/registro', (req, res, next) => {
    const { username, email, password } = req.body

    bcryptjs
        .genSalt(saltRounds)
        .then(salt => bcryptjs.hash(password, salt))
        .then(hashedpass => {
            return User.create({ username, email, password: hashedpass })
        })
        .then(createdUser => res.redirect('/'))
        .catch(err => next(err))
})

//registro partners

router.get('/colaboradores/registro', (req, res, next) => {
    res.render('auth/partners-signup-form')
})

router.post('/colaboradores/registro', (req, res, next) => {
    const { username, email, category, password } = req.body
    //TODO const role equal PARTNER

    const role = 'PARTNER'
    bcryptjs
        .genSalt(saltRounds)
        .then(salt => bcryptjs.hash(password, salt))
        .then(hashedpass => {
            return User.create({ username, email, category, password: hashedpass, role })
        })
        .then(createdUser => res.redirect('/'))
        .catch(err => next(err))
})


//  login 

router.get('/inicio-sesion', (req, res, next) => res.render('auth/login-form'))


// TODO redirect to user profile or partner profile (check roles)
// Login form (handle)
router.post('/inicio-sesion', (req, res, next) => {

    const { email, password } = req.body



    if (email.length === 0 || password.length === 0) {
        res.render('auth/login-form', { errorMessage: 'Por favor, rellena todos los campos' })
        return
    }

    User
        .findOne({ email })
        .then(user => {
            if (!user) {
                res.render('auth/login-form', { errorMessage: 'Email no registrado en la Base de Datos' })
                return
            } else if (bcryptjs.compareSync(password, user.password) === false) {
                res.render('auth/login-form', { errorMessage: 'La contraseña es incorrecta' })
                return


            } else {
                req.session.currentUser = user

                console.log("locals", res.locals.currentUserLogged)
                if (req.session.currentUser.role === 'ADMIN') {

                    res.app.locals.currentUserLogged = req.session.currentUser
                    res.app.locals.isLoggedIn = true
                    res.redirect(`/admin`)
                } else {
                    res.app.locals.currentUserLogged = req.session.currentUser
                    res.redirect(`/perfil-usuario/${user._id}`)
                }



                // if (req.session.currentUser.role === 'PARTNER') {
                //     res.redirect(`/colaboradores/perfil/${user._id}`)
                // } else if (req.session.currentUser.role === 'ADMIN') {
                //     res.redirect(`/admin`)
                // } else if (req.session.currentUser.role === 'USER') {
                //     res.redirect(`/perfil-usuario/${user._id}`)
                // }
                // console.log(req.session.currentUser)
                // console.log('El objeto de EXPRESS-SESSION', req.session)
            }
        })
})


//cerrar cesion 
router.post('/cerrar-sesion', (req, res) => {
    res.app.locals.currentUserLogged = undefined
    res.app.locals.isLoggedIn = false
    req.session.destroy(() => res.redirect('/inicio-sesion'))
})

module.exports = router