var wares = new Vue({
  el: '#wares',
  data: {
    newWareName : "",
    newWareDescription: "",
    newWarePrice: "",
    storageEnabled : false,
    newStorageAmount : "",
    title_list : [],
    wareList: []
  },
  methods: {
    saveWare: function () {
      if(this.newWareName != "" && this.newWarePrice != ""){
        this.wareList.push({id : this.wareList.length, name : this.newWareName, description : this.newWareDescription, price : this.newWarePrice, storageEnabled : this.storageEnabled, storageAmount : this.newStorageAmount})
        this.newWareName = ""
        this.newWareDescription = ""
        this.newWarePrice = ""
        this.newStorageAmount = ""
        this.storageEnabled = false

      }
      else{
        alert("Must have a name and a price");
      }
    }
  }
});

