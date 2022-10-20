// const {createApp} = Vue

// createApp ({
//     data() {
//         return {
//             url: 'https://mocki.io/v1/58dce575-7d57-413d-a768-07c249bf850c', //fake api creada por mí
//             noticias: []
//         }
//     },
//     methods: {
//         async fetchData(url) {
//             const res = await fetch(url);
//             data = await res.json();
//             this.noticias = data.results;
//         }
//     },
//     async created() {
//         await this.fetchData(this.url);
//     }
// }).mount('#app');

// const {createApp} = Vue;

// createApp ({
//     data() {
//         return {
//             url:'https://mocki.io/v1/f807fc94-68b6-442d-ad34-5b869ced8412',
//             covid:[]
//         }
//     },
//     methods: {
//         async fetchData(url) {
//             const res = await fetch(url);
//             data = await res.json;
//             this.covid = data.results;
//         }
//     },
//     async created() {
//         await this.fetchData(this.url)
//     }
// }).mount('#app')


const {createApp} = Vue 

createApp ({
    data() {
        return{
            info: {} 
        }
    },
    created() {
        fetch('https://mocki.io/v1/f807fc94-68b6-442d-ad34-5b869ced8412')
        .then(response => response.json())
        .then(data => { 
            console.log(data);
            this.info=data
            })
        .catch( error => console.log(error));
    }
}).mount('#app');;