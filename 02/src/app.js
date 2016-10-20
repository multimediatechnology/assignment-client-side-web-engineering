import Handlebars from 'handlebars'

Handlebars.registerHelper('eq', function(a, b, options) {
  return a === b ? options.fn(this) : options.inverse(this)
})

//Import App_class
import Apps from './apps'

//Create App   
var app = new Apps()