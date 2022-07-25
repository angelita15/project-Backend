module.exports = app => {

  app.use('/', require('./index.routes'))
  app.use('/', require('./auth.routes'))
  app.use('/', require('./user.routes'))
  app.use('/eventos', require('./event.routes'))
  app.use('/colaboradores', require('./partner.routes'))
  app.use('/admin', require('./admin.routes'))
}