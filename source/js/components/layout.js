/**
 * @file 布局文件
 */

const { createApp, ref, reactive, nextTick, onMounted, onUpdated, onBeforeUnmount, toRefs } = Vue;

export default {
  props: ['title'],
  setup(props, ctx) {
    const drawer = ref(false);
    return { drawer };
  },
  template: `<v-app id="inspire">
    <v-navigation-drawer v-model="drawer">
    </v-navigation-drawer>
    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-app-bar-title title="title">{{title}}</v-app-bar-title>
    </v-app-bar>
    <v-main>
      <slot />
    </v-main>
  </v-app>
  `
}