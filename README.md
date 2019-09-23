
# Summary
### 使用Vue-CLI创建的default项目


# Webpack config (详见vue.config.js)
### 1. publicPath需要注意配置(如：http://127.0.0.1:5501/vue-widget/dist/)；
###  2. 去掉filename hash（不允许每build一次文件名就不同）；


# Output 
### {
###    VueWidgetFactory[Function]:
####           @return vue component
###    isVueWidget[Boolean]:是否为Vue组件
#####        @default true
### }

    eg.
    main.js
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

# Build
### npm run build
    