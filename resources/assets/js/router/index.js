import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

export default new VueRouter({
    saveScrollPosition: true,
    routes: [
        {
            name:"index",
            path:'/',
            component: resolve =>void(require(['../components/ExampleComponent.vue'], resolve))
        },
        {
            name:"test",
            path:'/test',
            component: resolve =>void(require(['../components/TestComponent.vue'], resolve))
        },
    ]
})