<script lang="ts">
import {defineComponent} from 'vue'
import Form from "@/components/form/Form.vue";

export default defineComponent({
  name: "TabbedForm",
  props: ['form', 'darkMode', 'data', 'checkTabErrors'],
  emits: ['submit'],
  components: {Form},
  data() {
    return {
      tab: null,
      tabErrors: <any> {},
      forms: <any> []
    };
  },
  methods: {
    getClass(tab: string): string{
      if(this.tabErrors[tab]){
        return 'error';
      }

      return '';
    },

    setTabError(tab: string, set: boolean){
        this.tabErrors[tab] = set;
    }
  }
})
</script>

<template>
  <v-tabs v-if="form.tabs" v-model="tab">
    <v-tab v-for="tab in form.tabs" :value="tab.key" :class="getClass(tab.key)">{{ tab.name }}</v-tab>
  </v-tabs>
  <v-form ref="form" v-on:submit.prevent v-on:submit="$emit('submit')">
    <v-tabs-window v-if="form.tabs" v-model="tab">
      <v-tabs-window-item v-for="tab in form.tabs" :value="tab.key">
        <Form :fields="tab.fields" :data="data" :darkMode="darkMode" @fieldError="setTabError"
              :checkErrors="checkTabErrors" :tab="tab.key"/>
      </v-tabs-window-item>
    </v-tabs-window>
    <Form v-else :fields="form.fields" :data="data" :darkMode="darkMode" ref="oneForm"/>
  </v-form>
</template>

<style scoped lang="scss">
  .v-dialog form{
    padding: 24px;
  }

  .v-tab.error{
    color: rgb(var(--v-theme-error));
  }
</style>