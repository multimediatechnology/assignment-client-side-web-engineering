const html = require('choo/html')
const nav = require('../elements/nav')

module.exports = (state, prev, send) => html`
  <main class="clearfix mxn2">
    <div class="col-10 px2 mx-auto">
      ${nav(state, prev, send)}
      <hr>
      <section class="clearfix mxn2">
        <div class="col-12 px2 mx-auto">
          Add a page for every excercise.
        </div>
      </section>
    </div>
  </main>`
