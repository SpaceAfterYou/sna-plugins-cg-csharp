import { nameOf as no } from '../misc/name-of'

export function nameOf(name: string) {
  return `${no(name)}Opcode`
}
