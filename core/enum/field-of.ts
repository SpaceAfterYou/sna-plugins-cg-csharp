import type { OpcodeBody } from '@/datatypes/opcode/body'
import { commentOf } from '../misc/comment-of'
import { indentOf } from '../misc/indent-of'
import { nameOf } from '../misc/name-of'

export function fieldOf({ name, code, comment }: OpcodeBody, offset: number) {
  return `${commentOf(comment, 4)}${indentOf(offset)}${nameOf(name)} = 0x${code.toString(16).padStart(2, '0')},`
}
