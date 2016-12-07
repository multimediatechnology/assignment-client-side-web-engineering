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
                  <pattern id="pattern1" width="10" height="10" patternUnits="userSpaceOnUse" patternTransform="rotate(45 50 50)">
                    <rect width="10" height="10"/>
                    <line stroke-width="2px" y2="10"/>
                  </pattern>
                </defs>
                <rect width="300" height="300" class="animation-pattern1"/>
              </svg>
            </div>
          </div>
          <div class="clearfix mxn2">
            <div class="col-12 px2 mx-auto">
              <svg height="300">
                <rect width="300" height="300" class="animation-pattern2"/>
              </svg>
            </div>
          </div>
          <div class="clearfix mxn2">
            <div class="col-12 px mx-auto">
              <iframe height='512' scrolling='no' title='SVG Heart Animation with CSS' src='//codepen.io/suez/embed/ZGWbmE/?height=512&theme-id=light&default-tab=result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/suez/pen/ZGWbmE/'>SVG Heart Animation with CSS</a> by Nikolay Talanov (<a href='http://codepen.io/suez'>@suez</a>) on <a href='http://codepen.io'>CodePen</a>.</iframe>
            </div>
          </div>
          <div class="clearfix mxn2">
            <div class="col-12 px mx-auto">
              <iframe height='728' scrolling='no' title='SVG Animation' src='//codepen.io/jjperezaguinaga/embed/yuBdq/?height=728&theme-id=light&default-tab=result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/jjperezaguinaga/pen/yuBdq/'>SVG Animation</a> by jjperezaguinaga (<a href='http://codepen.io/jjperezaguinaga'>@jjperezaguinaga</a>) on <a href='http://codepen.io'>CodePen</a>.</iframe>
            </div>
          </div>
        </div>        
      </section>
    </div>
  </main>`
