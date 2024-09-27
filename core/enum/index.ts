import type { OpcodeBodyList } from '@/datatypes/opcode/body/list'
import type { ConfigPair } from '../../types/config-pair'
import { save } from '../save'
import { bodyOf } from './body-of'
import { nameOf } from './name-of'

export function generateEnum(name: string, list: OpcodeBodyList, config: ConfigPair) {
  const computedName = nameOf(name)
  const body = bodyOf(computedName, `${config.namespace}.Opcodes`, list)

  return save(computedName, body, config.path, 'Opcodes')
}
