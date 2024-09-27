import { useAsyncProjectData } from '@/composables/async-project-data'
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

  watch(data, async (data) => {
    await generateEnum('group', data.opcodeList, path.value.enum)

    for (const group of data.opcodeList) {
      await generateEnum(group.name, group.commandList, path.value.enum)
    }
  }, { deep: true })

  /**
   * - - -
   */

  return { path }
})
