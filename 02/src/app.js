import Handlebars from 'handlebars'
import Appclass from './appclass'

Handlebars.registerHelper('eq', function(a, b, options) {
  return a === b ? options.fn(this) : options.inverse(this)
})

let App = new Appclass()
