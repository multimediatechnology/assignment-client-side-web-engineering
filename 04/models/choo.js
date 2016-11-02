const emoji = require('node-emoji')

module.exports = {
	state: {
        title: 'ChooChoo',
        clicks: 0,
        trains: [],
        parkedtrains: [],
        message: '',
        emoji: [emoji.get('steam_locomotive'), emoji.get('train')]
    },
    reducers: {
        addWaggon: function(params, state, send) {
            if (state.clicks === 0) {
                state.trains.push(state.emoji[0])
                state.clicks++
            } else {
                if (state.clicks > 5) {
                    state.message = "It's way to heavy!"
                }
                state.trains.push(state.emoji[1])
                state.clicks++
            }
            return state
        },
        parkWaggon: function(params, state, send) {
            if (state.clicks > 5) {
                let reduce = state.clicks - 5;
                for (let i = 0; i < reduce; i++) {
                    state.parkedtrains.push(state.emoji[1])
                    state.trains.pop()
                }
                state.clicks = 5;
            }
            state.message = 'Park that Shit!'
            return state

        }
    }
}