//import handlebars
import Handlebars from 'handlebars'

export function() {
	Handlebars.registerHelper('eq', function(a, b, options) {
  return a === b ? options.fn(this) : options.inverse(this)
});
}
