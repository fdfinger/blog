/**
 * @file 求风险值
 */

const { createApp, ref, reactive, computed, nextTick, onMounted, onUpdated, onBeforeUnmount, toRefs } = Vue;

export default {
  props: ['title'],
  setup(props, ctx) {
    const form = ref({
      amount: 1000, // 本金
      current: 1, // 当前价位
      stopLossPercentage: 2, // 止损
      risk: 0, // 风险
    });

    const risk = computed(() => {
      const { current, amount, stopLossPercentage } = form.value;
      return (((amount / current) * stopLossPercentage) / 100).toFixed(2);
    })

    const stopLoss = computed(() => {
      const { current, stopLossPercentage } = form.value;
      return ((current * (100 - stopLossPercentage)) / 100).toFixed(2);
    })

    return { form, risk, stopLoss };
  },
  template: `
  <v-container>
    <v-row>
      <v-col md="6" cols="12">
        <v-sheet class="mx-auto">
          <v-form fast-fail @submit.prevent>
            <v-text-field
              v-model="form.amount"
              label="本金"
              required
            ></v-text-field>
    
            <v-text-field
              v-model="form.current"
              label="当前价位"
              required
            ></v-text-field>
    
            <v-text-field
              v-model="form.stopLossPercentage"
              label="止损百分比"
              required
            ></v-text-field>
    
            <v-btn type="submit" block class="mt-2">提交</v-btn>
          </v-form>
        </v-sheet>
      </v-col>
      <v-col md="6" cols="12">
        <v-sheet height="150" class="mx-auto bg-surface-variant pa-2">
          风险值: {{ risk }}
        </v-sheet>
        <v-sheet height="150" class="mx-auto bg-warning pa-2">
          止损位: {{ stopLoss }}
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
  `
}