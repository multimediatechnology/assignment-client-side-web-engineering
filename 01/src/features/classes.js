export function es5(val) {
  var C = function(hello) {
    this.hello = hello
  }
  C.prototype.say = function() {
    return this.hello
  }

  var o = new C(val)
  return o.say()
}

export function es6(val) {
	class A {
		constructor(value) {
			this.value = value
		}

		say() {
			return this.value
		}
	}

	const a = new A(val);
	return a.say()
	
}
