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
              <iframe height='547' scrolling='no' title='Shaded Text' src='//codepen.io/rgg/embed/ozLzbz/?height=547&theme-id=light&default-tab=result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/rgg/pen/ozLzbz/'>Shaded Text</a> by Rafael González (<a href='http://codepen.io/rgg'>@rgg</a>) on <a href='http://codepen.io'>CodePen</a>.</iframe>
            </div>
          </div>
          <div class="clearfix mxn2">
            <div class="col-12 px2 mx-auto">
              <iframe height='265' scrolling='no' title='Shattering Text Animation' src='//codepen.io/ARS/embed/pjypwd/?height=265&theme-id=light&default-tab=result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/ARS/pen/pjypwd/'>Shattering Text Animation</a> by Arsen Zbidniakov (<a href='http://codepen.io/ARS'>@ARS</a>) on <a href='http://codepen.io'>CodePen</a>.</iframe>
            </div>
          </div>
          <div class="clearfix mxn2">
            <div class="col-12 px2 mx-auto">
              <iframe height='265' scrolling='no' title='SVG Text Filling with Water' src='//codepen.io/lbebber/embed/doagyV/?height=265&theme-id=light&default-tab=result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/lbebber/pen/doagyV/'>SVG Text Filling with Water</a> by Lucas Bebber (<a href='http://codepen.io/lbebber'>@lbebber</a>) on <a href='http://codepen.io'>CodePen</a>.</iframe>
            </div>
          </div>
          <div class="clearfix mxn2">
            <div class="col-12 px2 mx-auto">
              <iframe height='265' scrolling='no' title='Elastic stroke CSS + SVG' src='//codepen.io/yoksel/embed/XJbzrO/?height=265&theme-id=light&default-tab=result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/yoksel/pen/XJbzrO/'>Elastic stroke CSS + SVG</a> by yoksel (<a href='http://codepen.io/yoksel'>@yoksel</a>) on <a href='http://codepen.io'>CodePen</a>.</iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  </main>`
