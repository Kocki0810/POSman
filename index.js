const manager = { 
  template: '<manager v-bind:data="data"></manager>',
  prop: ["data"],
  methods: {
    save : function()
    {
      localStorage.items = JSON.stringify(this.wareList);
    },
    load : function()
    {
      var json_string = localStorage["items"];
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
    return {
      data : { 
        ware : {
          newWareName: "", 
          newWareDescription : "", 
          newWarePrice : "", 
          storageEnabled : false, 
          newStorageAmount : "", 
        },
        wareList : []
      },
    };
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
      return routes[this.currentRoute] || cashier;
    }
  }
});


window.onhashchange = function(){
  wares.currentRoute = window.location.hash;
  console.log(window.location.hash)
}