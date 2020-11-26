const manager = { 
  template: '<manager v-on:saveware="save" v-bind:data="data"></manager>',
  prop: ["data"],
  methods: {
    save : function(warelist)
    {
      localStorage.items = JSON.stringify(warelist);
    },
    load : function()
    {
      var json_string = localStorage["items"];
      if(json_string == undefined)
      {
        this.data.wareList = [];
      }
      else
      {
        this.data.wareList = JSON.parse(json_string);
      }
    }
  },
  data(){
    return {
      data : { 
        ware : {
          newWareName: "", 
          newWarePrice : "", 
          storageEnabled : false, 
          newStorageAmount : "", 
        },
        wareList : [],
        cart : [],
      },
    };
  },
  mounted(){
    this.load();
  }
}
const cashier = { 
  template: '<cashier v-bind:data="data"></cashier>', 
  prop: ["data"],
  methods: {
    save : function(cart)
    {
    },
    load : function()
    {
      var json_string = localStorage.items;
      if(json_string == undefined)
      {
        this.data.products = [];
      }
      else
      {
        this.data.products = JSON.parse(json_string);
      }
    },
  
  },
  data(){
    return {
      data: {
      cart : [],
      products : [],
      sold : []
      }
    };
  },
  mounted(){
    this.load();
    }
}

const routes = {

  '' : manager ,
  '#/' : manager ,
  '#/cashier': cashier 
}

var wares = new Vue({
  el: '#wares',
  data: {
  currentRoute : window.location.hash
},
  render(h) { return h(this.ViewComponent) },
  computed : {
    ViewComponent() {
      return routes[this.currentRoute] || cashier;
    }
  }
});


window.onhashchange = function(){
  wares.currentRoute = window.location.hash;
}