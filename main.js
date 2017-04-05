Vue.component('product-detail', {
    props: ['item'],
    template: '<div class="product-detail"><h1 class="product-detail__title">{{ item.title }}</h1><div class="product-detail__subtitle">{{ item.subtitle }}</div><img class="product-detail__img" v-bind:href="item.img"></img></div>'
});

var app = new Vue({
    el: '#app'
});