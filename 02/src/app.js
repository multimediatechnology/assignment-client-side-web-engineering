import $ from 'jquery'
import Handlebars from 'handlebars'
import {ENTER_KEY, ESCAPE_KEY} from './consts'
import util from 'util'
import Appclass from './appclass'

Handlebars.registerHelper('eq', function(a, b, options) {
  return a === b ? options.fn(this) : options.inverse(this)
})

util.uuid()
util.pluralize()
util.store()


new Appclass(this);
