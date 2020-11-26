Vue.component('cashier', {
    props: ['data'],
    template: document.getElementById("cashierTemplate"),
    methods : {
        buyitems : function() {
            //this.$emit("buyitems", this.data.cart)
            console.log(this.data.cart)
        },
        addtocart : function(item) {
            for(var i = 0; i<this.data.cart.length; i++)
            {

            }
            this.data.cart.push(item);
            console.log(item)
        }
    }
});