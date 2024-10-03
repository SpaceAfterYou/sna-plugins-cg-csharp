import { useAsyncProject } from '@/composables/async-project'
import { generateOpcode } from '../core/common/generate-opcode'
import { generateEnum } from '../core/enum'

export const usePluginState = createGlobalState(() => {
  // TODO: save inside project.json instead of storage
  const path = useStorage('csharp-temp', {
    enum: {
      namespace: '',
      path: '',
    },
    type: {
      // types used in packets
      common: {
        namespace: '',
        path: '',
      },

      // packets for client and server
      shared: {
        namespace: '',
        path: '',
      },

      // packets for client
      client: {
        namespace: '',
        path: '',
      },

      // packets for server
      server: {
        namespace: '',
        path: '',
      },
    },
  })

  /**
   * TODO: plugin system
   */

  const { data } = useAsyncProject()

  watch(() => data.value.opcodeList, opcodeList => Promise.all([
    generateEnum('group', opcodeList, path.value.enum),
    generateOpcode(path.value.type.common, path.value.enum, opcodeList),

    ...opcodeList.map(group => generateEnum(group.name, group.commandList, path.value.enum)),
  ]), { deep: true })

  /**
   * - - -
   */

  return { path }
})
