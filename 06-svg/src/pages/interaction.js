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
            <div class="col-12 px mx-auto">
              <iframe height='596' scrolling='no' title='Elastic SVG Sidebar Material Design' src='//codepen.io/suez/embed/emjwvP/?height=596&theme-id=light&default-tab=result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/suez/pen/emjwvP/'>Elastic SVG Sidebar Material Design</a> by Nikolay Talanov (<a href='http://codepen.io/suez'>@suez</a>) on <a href='http://codepen.io'>CodePen</a>.</iframe>
            </div>
          </div>
          <div class="clearfix mxn2">
            <div class="col-12 px mx-auto">
              <iframe height='578' scrolling='no' title='Pull Down to Refresh (Paper Plane)' src='//codepen.io/suez/embed/oXLroX/?height=578&theme-id=light&default-tab=result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/suez/pen/oXLroX/'>Pull Down to Refresh (Paper Plane)</a> by Nikolay Talanov (<a href='http://codepen.io/suez'>@suez</a>) on <a href='http://codepen.io'>CodePen</a>.</iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  </main>`
