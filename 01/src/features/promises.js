export function es5(cb) {
    setTimeout(function() {
        cb(null, 10)
    }, 1)
}

export function es6() {
    const val = 10
    return Promise.resolve(val)
}
