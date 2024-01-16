/**
 * @file 求风险值和买入总金额
 */

const { createApp, ref, reactive, computed, nextTick, onMounted, onUpdated, onBeforeUnmount, toRefs } = Vue;

export default {
  props: ['title'],
  setup(props, ctx) {
    const form = ref({
      amount: 1000, // 份额
      current: 1, // 当前价位
      stopLossPercentage: 2, // 止损
      risk: 0, // 风险
    });

    const risk = /** 风险值 买入金额 * 止损百分比 */ computed(() => {
      const { stopLossPercentage } = form.value;
      return ((amount.value * stopLossPercentage) / 100).toFixed(2);
    })

    const stopLoss = /** 止损位 */ computed(() => {
      const { current, stopLossPercentage } = form.value;
      return (current * ((100 - stopLossPercentage) / 100)).toFixed(5);
    })

    const amount = /** 买入金额 */ computed(() => {
      const { current, amount } = form.value;
      return current * amount;
    })

    return { form, risk, stopLoss, amount  };
  },
  template: `
  <v-container>
    <v-row>
      <v-col md="6" cols="12">
        <v-sheet class="mx-auto">
          <v-form fast-fail @submit.prevent>
            <v-text-field
              v-model="form.amount"
              label="份额"
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
        <v-sheet height="100" class="mx-auto bg-red pa-2 text-center">
          <p>风险值</p>
          <p class="text-h3">{{ risk }}</p>
          </v-sheet>
        <v-sheet height="100" class="mx-auto bg-orange-darken-1 pa-2 text-center">
          <p>止损位</p>
          <p class="text-h3">{{ stopLoss }}</p>
        </v-sheet>
        <v-sheet height="100" class="mx-auto bg-green-darken-1 pa-2 text-center">
          <p>买入金额</p>
          <p class="text-h3">{{ amount }}</p>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
  `
}
