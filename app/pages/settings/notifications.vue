<script setup lang="ts">
const { t } = useI18n()

const state = reactive<{ [key: string]: boolean }>({
  email: true,
  desktop: false,
  product_updates: true,
  weekly_digest: false,
  important_updates: true
})

const sections = computed(() => [{
  title: t('settings.notifications.channelsTitle'),
  description: t('settings.notifications.channelsDescription'),
  fields: [{
    name: 'email',
    label: t('common.email'),
    description: t('settings.notifications.emailDescription')
  }, {
    name: 'desktop',
    label: t('settings.notifications.desktop'),
    description: t('settings.notifications.desktopDescription')
  }]
}, {
  title: t('settings.notifications.accountUpdatesTitle'),
  description: t('settings.notifications.accountUpdatesDescription'),
  fields: [{
    name: 'weekly_digest',
    label: t('settings.notifications.weeklyDigest'),
    description: t('settings.notifications.weeklyDigestDescription')
  }, {
    name: 'product_updates',
    label: t('settings.notifications.productUpdates'),
    description: t('settings.notifications.productUpdatesDescription')
  }, {
    name: 'important_updates',
    label: t('settings.notifications.importantUpdates'),
    description: t('settings.notifications.importantUpdatesDescription')
  }]
}])

async function onChange() {
  // Do something with data
  console.log(state)
}
</script>

<template>
  <div v-for="(section, index) in sections" :key="index">
    <UPageCard
      :title="section.title"
      :description="section.description"
      variant="naked"
      class="mb-4"
    />

    <UPageCard variant="subtle" :ui="{ container: 'divide-y divide-default' }">
      <UFormField
        v-for="field in section.fields"
        :key="field.name"
        :name="field.name"
        :label="field.label"
        :description="field.description"
        class="flex items-center justify-between not-last:pb-4 gap-2"
      >
        <USwitch
          v-model="state[field.name]"
          @update:model-value="onChange"
        />
      </UFormField>
    </UPageCard>
  </div>
</template>
