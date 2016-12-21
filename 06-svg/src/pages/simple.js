const html = require('choo/html')
const nav = require('../elements/nav')

module.exports = (state, prev, send) => html`
  <main class="clearfix mxn2">
    <div class="col-10 px2 mx-auto">
      ${nav(state, prev, send)}
      <hr>
      <section class="clearfix mxn2">
        <div class="col-12 px2 mx-auto">
          <div class="clearfix mxn2">
            <div class="col-12 px2 mx-auto">
              <svg height="300">
                <rect x="30" y="30" width="240" height="240" fill="#ff0000" stroke="#0000ff" stroke-width="4"/>
              </svg>
            </div>
          </div>
          <div class="clearfix mxn2">
            <div class="col-12 px2 mx-auto">
              <svg height="300">
                <circle cx="50%" cy="150" r="120" fill="#ff0000" stroke="#0000ff" stroke-width="4"/>
              </svg>
            </div>
          </div>
          <div class="clearfix mxn2">
            <div class="col-12 px2 mx-auto">
              <svg height="300">
                <g transform="translate(60, 0)">
                  <rect x="30" y="30" width="120" height="120" fill="#ff0000" stroke="#0000ff" stroke-width="4"/>
                  <circle cx="50%" cy="150" r="60" fill="#ff0000" stroke="#0000ff" stroke-width="4"/>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </section>
    </div>
  </main>`
