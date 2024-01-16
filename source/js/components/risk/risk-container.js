/**
 * @file 风险管理容器
 */

const { createApp, ref, reactive, computed, nextTick, onMounted, onUpdated, onBeforeUnmount, toRefs, defineAsyncComponent, defineComponent } = Vue;
import RiskTranche from '/js/components/risk/risk-tranche.js';
import RiskValue from '/js/components/risk/risk-value.js';

export default {
  components: {
    RiskTranche,
    RiskValue
  },
  setup(props, ctx) {
    const tab = ref('one');
    return { tab }
  },
  template: `
    <v-card>
      <v-tabs
        v-model="tab"
        bg-color="primary"
      >
        <v-tab value="one">求风险值和买入份额</v-tab>
        <v-tab value="two">求风险值和买入总额</v-tab>
      </v-tabs>

      <v-card-text>
        <v-window v-model="tab">
          <v-window-item value="one">
            <RiskValue />
          </v-window-item>
          <v-window-item value="two">
            <RiskTranche />
          </v-window-item>
        </v-window>
      </v-card-text>
    </v-card>
  `
}