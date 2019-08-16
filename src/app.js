define(function(require) {

    let Vue = require("Vue")
    let VueRouter = require("VueRouter")
    let Router = require("Router")

    Vue.use(VueRouter);

    let App = new Vue({
        el: "#app",
        router: Router
    })

})
