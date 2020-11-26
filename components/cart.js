Vue.component('cart', {
    name: "cart",
    props: ['cartitems'],
    template: document.getElementById("cartTemplate"),
    methods: {
        clickadd: function (item) {
            this.$emit('addtocart', item)
            console.log(item)
        }
    }
});