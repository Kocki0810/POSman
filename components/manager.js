Vue.component("manager", {
    props: ["data"],
    template: document.getElementById("titleTemplate"),
    methods: {
        saveWare: function () {
            var length = this.data.wareList.length;
            if(this.data.ware.newWareName != "" && this.data.ware.newWarePrice != ""){
                this.data.wareList.push({
                id : length, 
                name : this.data.ware.newWareName,
                description : this.data.ware.newWareDescription,
                price : this.data.ware.newWarePrice,
                amount: this.data.ware.newStorageAmount,
                storageEnabled : this.data.ware.storageEnabled})
                
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