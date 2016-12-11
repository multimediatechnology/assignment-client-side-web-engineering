const html = require('choo/html')
const nav = require('../elements/nav')

module.exports = (state, prev, send) => html `
  <main class="clearfix mxn2">
    <div class="col-10 px2 mx-auto">
      ${nav(state, prev, send)}
      <hr>
      <section class="clearfix mxn2">
        <div class="col-12 px2 mx-auto">
          <div class="clearfix mxn2">
            <div class="col-12 px2 mx-auto">
              <svg height="600" width="600">
                    <defs>
                      <linearGradient id="shadow">
                        <stop offset="5%" stop-color="#7C7C7C"/>
                        <stop offset="95%" stop-color="#212121"/>
                      </linearGradient>
                    </defs>

                  <polygon class="shadow" points="80,400 240,370 500,380 450,470 250,480 110,450"/>

                  <polygon class="froghead change1" points="0,30 70,60 10,80"/>
                  <polygon class="froghead change2" points="0,30 60,10 70,60"/>
                  <polygon class="froghead change1" points="60,10 70,60 140,30"/>
                  <polygon class="froghead change3" points="60,10 140,0 180,40"/>
                  <polygon class="froghead change4" points="10,80 140,30 110,170"/>
                  <polygon class="froghead change5" points="110,170 140,30 210,120"/>
                  

                  <polygon class="froghead change5" points="10,80 110,170 20,120"/> 
                  

                  <polygon class="froghead change1" points="140,30 210,120 180,40"/>

                  <polygon class="frogbody change6" points="140,210 200,210 340,340 240,330"/>
                  <polygon class="frogbody change3" points="180,40 210,120 350,140"/>
                  <polygon class="frogbody change4" points="210,120 110,170 200,210"/>
                  <polygon class="frogbody change1" points="110,170 200,210 130,230"/>
                  <polygon class="frogbody change1" points="210,120 190,250 300,250"/>
                  <polygon class="frogbody change1" points="210,120 350,140 300,250"/>
                  <polygon class="frogbody change3" points="350,140 480,280 300,250"/>
                  <polygon class="frogbody change1" points="300,250 480,280 340,340"/>
                  <polygon class="frogbody change5" points="190,250 300,250 340,340"/>

                  <polygon class="frogfrontleftleg change3" points="200,210 130,230 270,320"/>
                  <polygon class="frogfrontleftleg change1" points="270,320 240,300 130,390"/>
                  <polygon class="frogfrontleftleg change7" points="270,320 130,390 140,410"/>
                  <polygon class="frogfrontleftleg change1" points="80,400 130,390 140,410"/>

                  <polygon class="frogbackrightleg change6" points="400,380 440,300 550,320"/>

                  <polygon class="frogbackleftleg change2" points="400,420 420,340 600,360"/>
                  <polygon class="frogbackleftleg change1" points="480,280 400,420 340,340"/>
                  <polygon class="frogbackleftleg change3" points="360,460 600,360 450,470"/>

                  <polygon class="frogeye change3" points="70,60 125,80, 115,25"/>
                  <polygon class="frogeye eye1" points="70,60 125,80, 90,90"/>
                  <polygon class="frogeye eye2" points="70,60 125,80, 105,50"/>
                  <polygon class="frogeye eye3" points="85,60 95,65, 97,57"/>


              </svg>
            </div>
          </div>
        </div>        
      </section>
    </div>
  </main>
  `
