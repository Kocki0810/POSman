Vue.component('ware-list', {
  // The todo-item component now accepts a
  // "prop", which is like a custom attribute.
  // This prop is called todo.
  props: ['list'],
  template: document.getElementById("warelistTemplate"),
  methods : {
    deleteList(id)
    {   
      wares.wareList.splice(id.id, 1);
      for(var i= 0; i < wares.wareList.length; i++)
      {
        wares.wareList[i].id = i;
      }
    }
}
  
})

Vue.component('ware', {
  props: ['todo'],
  template: document.getElementById("wareTemplate"),
  methods : {
    deleteItem: function(){
        this.$emit("delete-row", {id : this.todo.id});
  }
}  
});

var wares = new Vue({
  el: '#wares',
  data: {
    newWareName : "",
    newWareDescription: "",
    newWarePrice: "",
    wareList: []
  },
  methods: {
    saveWare: function () {
      if(this.newWareName != "" && this.newWarePrice != ""){
        this.wareList.push({id : this.wareList.length, name:this.newWareName, description:this.newWareDescription, price :this.newWarePrice})
        this.newWareName = ""
        this.newWareDescription = ""
        this.newWarePrice = ""
      }
      else{
        alert("Must have a name and a price");
      }


    }
  }
});

