import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

function VueWidgetFactory(){
  var component = new Vue({
    render: h => h(App),
  }).$mount();

  return component;
}

const isVueWidget = true;

export {
    VueWidgetFactory,
    isVueWidget
};


