<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

const route = useRoute();
const localePath = useLocalePath();
const { t } = useI18n();
const head = useLocaleHead();
const toast = useToast();
const title = computed(() => {
  const pageTitleKey =
    typeof route.meta.title === "string" && route.meta.title.length > 0
      ? route.meta.title
      : "app.title";

  return t(pageTitleKey);
});
const open = ref(false);

const links = computed<NavigationMenuItem[][]>(() => [
  [
    {
      label: t("common.home"),
      icon: "i-lucide-house",
      to: localePath("/"),
      onSelect: () => {
        open.value = false;
      },
    },
    {
      label: t("common.inbox"),
      icon: "i-lucide-inbox",
      to: localePath("/inbox"),
      badge: "4",
      onSelect: () => {
        open.value = false;
      },
    },
    {
      label: t("common.customers"),
      icon: "i-lucide-users",
      to: localePath("/customers"),
      onSelect: () => {
        open.value = false;
      },
    },
    {
      label: t("common.settings"),
      to: localePath("/settings"),
      icon: "i-lucide-settings",
      defaultOpen: true,
      type: "trigger",
      children: [
        {
          label: t("common.general"),
          to: localePath("/settings"),
          exact: true,
          onSelect: () => {
            open.value = false;
          },
        },
        {
          label: t("common.members"),
          to: localePath("/settings/members"),
          onSelect: () => {
            open.value = false;
          },
        },
        {
          label: t("common.notifications"),
          to: localePath("/settings/notifications"),
          onSelect: () => {
            open.value = false;
          },
        },
        {
          label: t("common.security"),
          to: localePath("/settings/security"),
          onSelect: () => {
            open.value = false;
          },
        },
      ],
    },
  ],
  [
    {
      label: t("navigation.feedback"),
      icon: "i-lucide-message-circle",
      to: "https://github.com/nuxt-ui-templates/dashboard",
      target: "_blank",
    },
    {
      label: t("navigation.helpSupport"),
      icon: "i-lucide-info",
      to: "https://github.com/nuxt-ui-templates/dashboard",
      target: "_blank",
    },
  ],
]);

const groups = computed(() => [
  {
    id: "links",
    label: t("search.goTo"),
    items: links.value.flat(),
  },
  {
    id: "code",
    label: t("search.code"),
    items: [
      {
        id: "source",
        label: t("search.viewPageSource"),
        icon: "i-simple-icons-github",
        to: "https://github.com/nuxt-ui-templates/dashboard/tree/main/app/pages",
        target: "_blank",
      },
    ],
  },
]);

onMounted(async () => {
  const cookie = useCookie("cookie-consent");
  if (cookie.value === "accepted") {
    return;
  }

  toast.add({
    title: t("cookie.title"),
    duration: 0,
    close: false,
    actions: [
      {
        label: t("cookie.accept"),
        color: "neutral",
        variant: "outline",
        onClick: () => {
          cookie.value = "accepted";
        },
      },
      {
        label: t("cookie.optOut"),
        color: "neutral",
        variant: "ghost",
      },
    ],
  });
});
</script>

<template>
  <Html :lang="head.htmlAttrs.lang" :dir="head.htmlAttrs.dir">
    <Head>
      <Title>{{ title }}</Title>
      <template v-for="link in head.link" :key="link.key">
        <Link
          :id="link.key"
          :rel="link.rel"
          :href="link.href"
          :hreflang="link.hreflang"
        />
      </template>
      <template v-for="meta in head.meta" :key="meta.key">
        <Meta
          :id="meta.key"
          :property="meta.property"
          :content="meta.content"
        />
      </template>
    </Head>
    <Body>
      <UDashboardGroup unit="rem">
        <UDashboardSidebar
          id="default"
          v-model:open="open"
          collapsible
          resizable
          class="bg-elevated/25"
          :ui="{ footer: 'lg:border-t lg:border-default' }"
        >
          <template #header="{ collapsed }">
            <TeamsMenu :collapsed="collapsed" />
          </template>

          <template #default="{ collapsed }">
            <UDashboardSearchButton
              :collapsed="collapsed"
              class="bg-transparent ring-default"
            />

            <UNavigationMenu
              :collapsed="collapsed"
              :items="links[0] ?? []"
              orientation="vertical"
              tooltip
              popover
            />

            <UNavigationMenu
              :collapsed="collapsed"
              :items="links[1] ?? []"
              orientation="vertical"
              tooltip
              class="mt-auto"
            />
          </template>

          <template #footer="{ collapsed }">
            <UserMenu :collapsed="collapsed" />
          </template>
        </UDashboardSidebar>

        <UDashboardSearch :groups="groups" />

        <slot />

        <NotificationsSlideover />
      </UDashboardGroup>
    </Body>
  </Html>
</template>
