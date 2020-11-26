Vue.component('cart', {
    name: "cart",
    props: ['cartitems'],
    template: document.getElementById("cartTemplate"),
    computed: {
        total: function () {
            let sum = 0;
            this.cartitems.forEach(function (item) {
                sum += parseFloat(item.price);
            });
            return sum;
        }
    },
    methods: {
        clickadd: function (item) {
            this.$emit('addtocart', item)
            console.log(item)
        }
    }
});