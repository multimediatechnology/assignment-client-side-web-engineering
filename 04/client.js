const choo = require('choo')
const html = require('choo/html')

const app = choo()

app.model(require('./models/choo'))

app.router((route) => [
    route('/', require('./pages/first')),
    route('/second', require('./pages/second'))
])

const tree = app.start()
document.body.appendChild(tree)
