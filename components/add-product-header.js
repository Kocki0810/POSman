Vue.component("addproductheader", {
    props: ["data"],
    template: document.getElementById("titleTemplate"),
    methods: {
        saveWare: function () {
            if(this.data.newWareName != "" && this.data.newWarePrice != ""){
                this.data.wareList.push({id : this.data.wareList.length, name : this.data.newWareName, description : this.data.newWareDescription, price : this.data.newWarePrice, storageEnabled : this.data.storageEnabled, storageAmount : this.data.newStorageAmount})
                this.data.newWareName = ""
                this.data.newWareDescription = ""
                this.data.newWarePrice = ""
                this.data.newStorageAmount = ""
                this.data.storageEnabled = false
            }
            else{
                alert("Must have a name and a price");
            }
        },
        ToggleMode: function(){
                
        }
    }
  });