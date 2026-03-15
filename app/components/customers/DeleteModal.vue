<script setup lang="ts">
withDefaults(defineProps<{
  count?: number
}>(), {
  count: 0
})

const open = ref(false)
const { t } = useI18n()

async function onSubmit() {
  await new Promise(resolve => setTimeout(resolve, 1000))
  open.value = false
}
</script>

<template>
  <UModal
    v-model:open="open"
    :title="t('customers.deleteCustomersTitle', { count })"
    :description="t('customers.deleteCustomersDescription')"
  >
    <slot />

    <template #body>
      <div class="flex justify-end gap-2">
        <UButton
          :label="t('common.cancel')"
          color="neutral"
          variant="subtle"
          @click="open = false"
        />
        <UButton
          :label="t('common.delete')"
          color="error"
          variant="solid"
          loading-auto
          @click="onSubmit"
        />
      </div>
    </template>
  </UModal>
</template>
