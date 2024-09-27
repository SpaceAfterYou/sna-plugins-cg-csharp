export function nameOf(value: string) {
  return value.split(' ').map(e => e[0].toUpperCase() + e.slice(1)).join('')
}
