import { useAsyncProjectData } from '@/composables/async-project-data'
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

  const { data } = useAsyncProjectData()

  watch(() => data.value.opcodeList, async (opcodeList) => {
    await generateEnum('group', opcodeList, path.value.enum)
    await generateOpcode(path.value.type.common, path.value.enum, opcodeList)

    for (const group of opcodeList) {
      await generateEnum(group.name, group.commandList, path.value.enum)
    }
  }, { deep: true })

  /**
   * - - -
   */

  return { path }
})
