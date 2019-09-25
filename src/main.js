import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

function WidgetFactory(){
  let component = new Vue({
    render: h => h(App),
  }).$mount();

  return component;
}

const isVueWidget = true;

export {
    WidgetFactory,
    isVueWidget
};


