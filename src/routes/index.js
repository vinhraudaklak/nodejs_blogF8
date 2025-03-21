const newsRouter = require('./news');
const siteRouter = require('./site');
const coursesRouter = require('./courses')
const meRouter = require('./me')

function route(app) {
  // Định nghĩa Route
  app.use('/news', newsRouter);

  app.use('/', siteRouter);

  app.use('/courses', coursesRouter)

  app.use('/me', meRouter)
}

module.exports = route;
