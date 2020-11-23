Vue.component('ware-list', {
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
}});