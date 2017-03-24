const html = require('choo/html')

module.exports = (state, prev, send) => {
  return html`
    <nav>
      <a href="/">Home</a>
    </nav>`
}
