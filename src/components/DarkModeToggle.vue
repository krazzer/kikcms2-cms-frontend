<script lang="ts">

import {defineComponent} from "vue";
import { useTheme } from 'vuetify'

export default defineComponent({
  data() {
    return {
      darkMode: false,
      theme: useTheme()
    }
  },
  methods: {
    toggle() {
      this.darkMode         = !this.darkMode;
      localStorage.darkMode = JSON.stringify(this.darkMode);
    }
  },
  emits: ['change'],
  watch: {
    darkMode(val) {
      let body = document.body;
      let globalTheme: any = this.theme.global;

      globalTheme.name = val ? 'dark' : 'light';

      body.classList.add('transitioning');
      body.classList.toggle('darkmode', val);

      body.addEventListener('transitionend', () => {
        body.classList.remove('transitioning');
      });

      this.$emit('change', val);
    }
  },
  mounted() {
    if (localStorage.darkMode) {
      this.darkMode = JSON.parse(localStorage.darkMode);
      return;
    }

    const colorSchemeQueryList = window.matchMedia('(prefers-color-scheme: dark)');

    const setColorScheme = (e: Event | MediaQueryList) => {
      if ("matches" in e) {
        this.darkMode = e.matches;
      }
    }

    setColorScheme(colorSchemeQueryList);
    colorSchemeQueryList.addEventListener('change', setColorScheme);
  }
});
</script>

<template>
  <v-btn class="darkmode-toggle" @click="toggle()">
    {{ darkMode ? '☀️' : '🌙' }}
  </v-btn>
</template>

<style scoped>
.darkmode-toggle {
  position: absolute;
  z-index: 2500;
  top: 10px;
  right: 10px;
}
</style>
