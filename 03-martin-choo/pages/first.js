const html = require('choo/html')

module.exports = (state, prev, send) => {
    return html `
    <main class="app">
      <h1>${state.title}</h1>
      <button onclick=${(e) => send('addWaggon')}>Add Waggon</button>
      <button onclick=${(e) => send('parkWaggon')}>Park Waggon</button>
      <a href="/second">Second</a><br>
      <p>${state.trains}</p>
      <p>${state.message}</p>
      <p>${state.parkedtrains}</p>
    </main>
  `
}