<script setup lang="ts">
import { usePluginState } from '../composables/plugin-state'
import Item from './item.vue'

const { path } = usePluginState()

const pathList = [
  {
    name: 'enums',
    hint: '...',
    config: path.value.enum,
  },
  {
    name: 'common types',
    hint: 'types that are used inside messages',
    config: path.value.type.common,
  },

  {
    name: 'shared messages',
    hint: 'messages for both client and server',
    config: path.value.type.shared,
  },

  {
    name: 'client messages',
    hint: '...',
    config: path.value.type.client,
  },

  {
    name: 'server messages',
    hint: '...',
    config: path.value.type.server,
  },
]
</script>

<template>
  <section class="space-y-4">
    <h1 class="text-2xl">
      Output Directories
    </h1>

    <Item v-for="value of pathList" :key="value.name" v-model="value.config">
      <template #name>
        {{ value.name }}
      </template>

      <template #hint>
        {{ value.hint }}
      </template>
    </Item>
  </section>
</template>
