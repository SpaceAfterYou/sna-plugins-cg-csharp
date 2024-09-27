import { indentOf } from './indent-of'

export function commentOf(value: string, offset: number) {
  const indent = indentOf(offset)

  let line = ''

  line += `${indent}/// <summary>\n`
  line += `${indent}/// ${value}\n`
  line += `${indent}/// </summary>\n`

  return line
}
