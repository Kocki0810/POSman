Vue.component('productlist', {
    props: ['productlist'],
    template: document.getElementById("productlistTemplate"),
    methods : {
        clickadd : function(item)
        {
            this.$emit('addtocart', item)
        }
    }
});