
export function es5() {
    var module = require('../utils')
    return module.uuid()
}

import {uuid} from '../utils'
export function es6() {
    return uuid()
}
