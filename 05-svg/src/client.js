const choo = require('choo')
const log = require('choo-log')
require('./styles')

const app = choo()

app.use(log())

app.model({
  namespace: 'data',
  state: {},
  reducers: {}
})

app.router(route => [
  route('/', require('./pages/main')),
  route('/simple', require('./pages/simple')),
  route('/style', require('./pages/style')),
  route('/animation', require('./pages/animation')),
  route('/text', require('./pages/text')),
  route('/interaction', require('./pages/interaction'))
])

function style(src) {
  const el = document.createElement('link')
  el.setAttribute('type', 'text/css')
  el.setAttribute('rel', 'stylesheet')
  el.setAttribute('href', src)
  return el
}
const styles = [
  style('https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css'),
  style('https://unpkg.com/basscss@8.0.2/css/basscss.min.css')
]

const tree = app.start()

document.body.appendChild(tree)
styles.forEach(style => document.head.appendChild(style))
