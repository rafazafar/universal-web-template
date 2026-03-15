<script setup lang="ts">
import type { NuxtError } from '#app'

defineProps<{
  error: NuxtError
}>()

const { uiLocale } = useNuxtUiLocale()

useSeoMeta({
  title: 'Page not found',
  description: 'We are sorry but this page could not be found.'
})

useHead({
  htmlAttrs: {
    lang: computed(() => uiLocale.value.code),
    dir: computed(() => uiLocale.value.dir)
  }
})
</script>

<template>
  <UApp :locale="uiLocale">
    <UError :error="error" />
  </UApp>
</template>
