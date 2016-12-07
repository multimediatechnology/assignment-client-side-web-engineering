const html = require('choo/html')

module.exports = (state, prev, send) => {
    return html `
    <main class="app">
      <h1>${state.title}</h1>
      <p>Nothing to see!</p>
      <a href="/">First</a><br>
    </main>
  `
}