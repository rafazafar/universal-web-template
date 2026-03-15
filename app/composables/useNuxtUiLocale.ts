import { de, en, fr, ja } from '@nuxt/ui/locale'

const nuxtUiLocales = {
  de,
  en,
  fr,
  ja
} as const

export function useNuxtUiLocale() {
  const { locale } = useI18n()

  const uiLocale = computed(() => nuxtUiLocales[locale.value as keyof typeof nuxtUiLocales] ?? en)

  return {
    uiLocale
  }
}
