const manager = { 
  template: '<manager v-bind:data="datalist"></manager>',
  prop: ["data"],
  methods: {
    save : function()
    {
      localStorage.items = JSON.stringify(this.datalist);
      
    },
    load : function()
    {
      var json_string = localStorage["items"];
      if(json_string == undefined)
      {
        // this.datalist.ware = [];
      }
      else
      {
        this.datalist = JSON.parse(json_string);
      }
    }
  },
  data(){
    return {
      datalist : { 
        ware : {
          newWareName: "", 
          newWareDescription : "", 
          newWarePrice : "", 
          storageEnabled : false, 
          newStorageAmount : "", 
        },
        wareList : [],
        soldList : []
      },
    };
  },
  mounted(){
    this.load();
  }
}
const cashier = {
  template: '<cashier v-bind:cashierdata="datalist"></cashier>',
  prop : ["data"],
  methods: {
    save : function()
    {
      localStorage.items = JSON.stringify(this.datalist);
    },
    load : function()
    {
      var json_string = localStorage["items"];
      if(json_string == undefined)
      {
        this.datalist = [];
      }
      else
      {
        this.datalist = JSON.parse(json_string);
      }
    }
  },
  data(){
    return {
      datalist : { 
        wareList : [],
        cart : []
      }
    };
  },
  mounted(){
    this.load();
  }
}
const routes = {

  '#/' : manager ,
  '#/cashier': cashier 
}

var wares = new Vue({
  el: '#wares',
  data: {
  currentRoute : window.location.hash
},
  render(h) { console.log(this.currentRoute); return h(this.ViewComponent) },
  computed : {
    ViewComponent() {
      return routes[this.currentRoute] || manager;
    }
  }
});


window.onhashchange = function(){
  wares.currentRoute = window.location.hash;
  console.log(window.location.hash)
}