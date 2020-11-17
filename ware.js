Vue.component('ware', {
    props: ['todo'],
    template: document.getElementById("wareTemplate"),
    methods : {
      deleteItem: function(){
          this.$emit("delete-row", {id : this.todo.id});
    }
  }  
  });