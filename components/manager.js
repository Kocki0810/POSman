Vue.component("manager", {
    props: ["data"],
    template: document.getElementById("titleTemplate"),
    methods: {
        saveWare: function () {
            
            if(this.data.newWareName != "" && this.data.newWarePrice != ""){
                this.data.wareList.push({id : this.data.wareList.length, name : this.data.ware.newWareName, description : this.data.ware.newWareDescription, price : this.data.ware.newWarePrice, storageEnabled : this.data.ware.storageEnabled, storageAmount : this.data.ware.newStorageAmount})
                this.data.ware.newWareName = ""
                this.data.ware.newWareDescription = ""
                this.data.ware.newWarePrice = ""
                this.data.ware.newStorageAmount = ""
                this.data.ware.storageEnabled = false
            }
            else{
                alert("Must have a name and a price");
            }
        }
    }
  });