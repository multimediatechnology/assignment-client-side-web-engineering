const html = require('choo/html')

module.exports = (state, prev, send) => {
  return html`
    <nav>
      <a href="/">Start</a>
      <a href="/simple">Simple</a>
      <a href="/style">Style</a>
      <a href="/animation">Animation</a>
      <a href="/text">Text</a>
      <a href="/interaction">Interaction</a>
    </nav>`
}
