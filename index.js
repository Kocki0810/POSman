<<<<<<< Updated upstream
// Routing for home-page

const Foo = { template: '<div>foo</div>' }

const routes = [
    { path: '/foo', component: Foo }
]

const router = new VueRouter({
    routes
=======
const manager = { 
  template: '<addproductheader v-bind:data="ware"></addproductheader>',
  methods: {
    save : function()
    {
      document.localStorage.items = JSON.stringify(this.wareList);
    },
    load : function()
    {
      var json_string = document.localStorage["items"];
      if(json_string == undefined)
      {
        this.wareList = [];
      }
      else
      {
        this.wareList = JSON.parse(json_string);
      }
    }
  },
  data(){
    return {wareList : []};
  },
  mounted(){
    this.load();
  }
}
const cashier = { 
template: '<div>bar</div>', 

methods : {
  mounted(){
    this.load();
  }
 }
}

const routes = [
    { path: '/#', component: manager },
    { path: '/#cashier', component: cashier }
];

const router = new VueRouter({
routes 
>>>>>>> Stashed changes
})

var wares = new Vue({
  router,
  el: '#wares',
  data: {
    ware: {
    newWareName: "", 
    newWareDescription : "", 
    newWarePrice : "", 
    storageEnabled : false, 
    newStorageAmount : "", 
    wareList : [],
    waresSold : []
    }
<<<<<<< Updated upstream
  },
  methods: {
 
    },
  router
}).$mount('#wares');
=======
  }
});
>>>>>>> Stashed changes

