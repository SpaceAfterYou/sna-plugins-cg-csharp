<script setup lang="ts">
import type { ConfigPair } from '../types/config-pair'
import { open } from '@tauri-apps/plugin-dialog'

const model = defineModel<ConfigPair>({ required: true })

const placeholder = (value: string) => value || 'unknown'

async function onChange(title: string, path: string, onChanged: (path: string) => void) {
  const result = await open({
    defaultPath: path,
    directory: true,
    title,
  })

  if (typeof result === 'string') {
    onChanged(result)
  }
}
</script>

<template>
  <UiGroup class="space-y-4">
    <span class="flex items-center justify-between gap-4">
      <p class="truncate">
        <slot name="name" />
      </p>

      <small class="truncate text-rose-300">
        <slot name="hint" />
      </small>
    </span>

    <UiButton class="w-full text-amber-300" size="small" @click="onChange('Select enum path', model.path, (e) => model.path = e)">
      {{ placeholder(model.path) }}
    </UiButton>

    <UiInput v-model="model.namespace" placeholder="namespace" />
  </UiGroup>
</template>
