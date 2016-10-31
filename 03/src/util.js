export function uuid() {
    /* eslint-disable no-bitwise */
  let i, random,
    u = '';

  for (i = 0; i < 32; i++) {
    random = Math.random() * 16 | 0;
    if (i === 8 || i === 12 || i === 16 || i === 20) {
      u += '-';
    }
    if (i === 12) {
      u += 4;
      u.toString(16);
    }
    else {
      u += (i === 16 ? random & 3 | 8 : random).toString(16);
    }

        // u += (i === 12 ? 4 : i === 16 ? random & 3 | 8 : random).toString(16);
  }

  return u;
}

export function pluralize(count, word) {
  return count === 1 ? word : `${word}s`;
}

export function store(namespace, data) {
  if (arguments.length > 1) {
    return localStorage.setItem(namespace, JSON.stringify(data));
  }
  const store = localStorage.getItem(namespace);
  return store && JSON.parse(store) || [];
}
