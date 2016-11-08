export function es5() {
  const s = 'key'
  const o = {}
  o[s] = 'value'
  return o
}

export function es6() {
	const s = Symbol('key')
	const o = {
		[s]: 'value'
	}
	return 0 
}