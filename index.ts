import { usePluginState } from './composables/plugin-state'

export function definePlugin() {
  return {
    uuid: '2fc8efbd-b1a5-49d8-abd6-c8451f7301e5',
    name: '.NET Code Generator',
    author: 'sawich',
    state: usePluginState,
  }
}
