Vue.component("addproductheader", {
    props: ["data"],
    template: document.getElementById("titleTemplate"),
    methods: {
        saveWare: function () {
            if(list.newWareName != "" && list.newWarePrice != ""){
                list.ware["wareList"].push({id : list.wareList.length, name : list.newWareName, description : list.newWareDescription, price : list.newWarePrice, storageEnabled : list.storageEnabled, storageAmount : list.newStorageAmount})
                list.ware["newWareName"] = ""
                list.ware["newWareDescription"] = ""
                list.ware["newWarePrice"] = ""
                list.ware["newStorageAmount"] = ""
                list.ware["storageEnabled"] = false
            }
            else{
                alert("Must have a name and a price");
            }
        }
    }
  });