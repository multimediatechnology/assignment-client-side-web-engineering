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
                <defs>
                  <linearGradient id="gradient1">
                    <stop offset="5%" stop-color="#ff0000"/>
                    <stop offset="95%" stop-color="#0000ff"/>
                  </linearGradient>
                </defs>
                <rect width="300" height="300" class="style-gradient1"/>
              </svg>
            </div>
          </div>
          <div class="clearfix mxn2">
            <div class="col-12 px2 mx-auto">
              <svg height="300">
                <defs>
                  <pattern id="pattern1" width="10" height="10" patternUnits="userSpaceOnUse" patternTransform="rotate(45 50 50)">
                    <rect width="10" height="10"/>
                    <line stroke-width="2px" y2="10"/>
                  </pattern>
                </defs>
                <rect width="300" height="300" class="style-pattern1"/>
              </svg>
            </div>
          </div>
        </div>
      </section>
    </div>
  </main>`
