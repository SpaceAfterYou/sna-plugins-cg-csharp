import type { OpcodeField } from '@/datatypes/opcode/body'

import { commentOf } from '../misc/comment-of'
import { indentOf } from '../misc/indent-of'
import { nameOf } from '../misc/name-of'

export function fieldOf({ name, value, comment }: OpcodeField, offset: number) {
  return `${commentOf(comment, offset)}${indentOf(offset)}${nameOf(name)} = 0x${value.toString(16).padStart(2, '0')},`
}
