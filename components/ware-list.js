Vue.component('ware-list', {
    props: ['list'],
    template: document.getElementById("warelistTemplate"),
    methods : {
      deleteList(id)
      {   
        this.list.splice(id.id, 1);
        for(var i= 0; i < this.list.length; i++)
        {
          this.list[i].id = i;
        }
      }
}});