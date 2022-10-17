const {createApp} = Vue

createApp ({
    data() {
        return {
            url: 'https://mocki.io/v1/58dce575-7d57-413d-a768-07c249bf850c', //fake api creada por mí
            noticias: []
        }
    },
    methods: {
        async fetchData(url) {
            const res = await fetch(url);
            data = await res.json();
            this.noticias = data.results;
        }
    },
    async created() {
        await this.fetchData(this.url);
    }
}).mount('#app');