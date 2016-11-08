const choo = require('choo')
const html = require('choo/html')
const app = choo()
const emoji = require('node-emoji')

app.model({

  state: {
    title: 'Thomas die Lokomotive',
    subtitle: 'Bahnhof',
    warning: '', //Message die bei zu vielen Wagen ausgegen wird
    wagen_zug: [emoji.get('steam_locomotive')], //Enthält die Lokomotive und die angehängten Wagen
    wagen_gleis: []}, //Enthält die abgehängten Wagen am Abstellgleis

  reducers: {
    /*
    * Fügt dem Zug einen Wagen hinzu
    * Stehen Wagen am Abstellgleis, werden die zuerst hinzugefügt
    * Wenn mehr als fünf Wagen am Zug hängen wird eine Warnmeldung angezeigt
    */
    update: function(data, state) { 
      state.wagen_zug.push(emoji.get('train'))
      if(state.wagen_gleis.length > 0) {
        state.wagen_gleis.pop()
      }
      if(state.wagen_zug.length > 6){
        return{warning: 'ERMAGERD, die Lokomotive ist nur für fünf Wagen ausgelegt!'}
      }
    },
    /*
    * Entfernt alle Wagen von der Lokomotive, bis auf fünf, und stellt diese am Abstellgleis ab
    * Löscht die Warnmeldung wenn vorhanden
    */
    release: function(data, state) {
      while(state.wagen_zug.length > 6) {
        state.wagen_zug.pop()
        state.wagen_gleis.push(emoji.get('train'))
      }
      return{warning: ''}
    },
    /*
    * Entfernt alle Wagen vom Abstellgleis
    */
    trash: function(data, state) {
      while(state.wagen_gleis.length > 0) {
        state.wagen_gleis.pop()
      }
    },
    /*
    * Entfernt alle Wagen vom Zug
    */
    trash_zug: function(data, state) {
      while(state.wagen_zug.length > 1) {
        state.wagen_zug.pop()
      }
    }
  }
})

/*
* MAINVIEW
*/
const mainView = (state, prev, send) => html`
  <main>
    <a href="/home">Home</a> <a href="/contact">Contact</a>
    <p>******************</p>
    <h3>DEBUG</h3>
    <p># Wagen am Zug</p>
    <p>${state.wagen_zug.length - 1}</p>
    <p># Wagen am Abstellgleis</p>
    <p>${state.wagen_gleis.length}</p>
    <p>******************</p>

    <h1>${state.title}</h1>
    <h2>${state.subtitle}</h2>
    <button onclick=${(e) => send('update', 1)}>
        Wagen anhängen
    </button>
    <button onclick=${(e) => send('release', 5)}>
        Wagen abhängen
    </button>
    <button onclick=${(e) => send('trash_zug', 0)}>
        Zug entrümpeln
    </button>
    <p>${state.warning}</p>
    <p>${state.wagen_zug}</p>
    <h2>Abstellgleis</h2>
    <button onclick=${(e) => send('trash', 0)}>
        Abstellgleis entrümpeln
    </button>
    <p>${state.wagen_gleis}</p>
  </main>
`

/*
* CONTACTVIEW
*/
const contact = (state, prev, send) => html`
    <main>
    <a href="/home">Home</a> <a href="/contact">Contact</a>
    <h1>Author: Philipp Gigler</h1>
  </main>
`

app.router((route) => [
  route('/', mainView),
  route('/contact', contact)
])

const tree = app.start()
document.body.appendChild(tree)
