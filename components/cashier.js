Vue.component('cashier', {
    props: ['data'],
    template: document.getElementById("cashierTemplate"),
    computed: {
        total: function () {
            let sum = 0;
            this.data.cart.forEach(function (item) {
                sum += parseFloat(item.price);
            });
            return sum;
        }
    },
    methods : {
        buyitems : function() {
            this.$emit("buyitems", this.data.cart)
            this.data.cart.splice(0, this.data.cart.length)
        },
        addtocart : function(item) {
            for(var i = 0; i<this.data.cart.length; i++)
            {
            }
            this.data.cart.push(item);
        }
    }
});