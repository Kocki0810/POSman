const Foo = { template: '<div>foo</div>' }

const routes = [
    { path: '/foo', component: Foo }
]

const router = new VueRouter({
    routes
})

var wares = new Vue({
  el: '#wares',
  data: {
    ware: {newWareName: "", newWareDescription : "", newWarePrice : "", storageEnabled : false, newStorageAmount : "", wareList : []}
  },
  methods: {
 
    },
  router
}).$mount('#wares');

