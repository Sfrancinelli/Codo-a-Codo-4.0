const {createApp} = Vue 

createApp ({
    data() {
        return{
            info: {} 
        }
    },
    created() {
        fetch('https://covid-api.mmediagroup.fr/v1/cases?country=Argentina')
        .then(response => response.json())
        .then(data => { 
            console.log(data.All);
            this.info=data.All
            })
        .catch( error => console.log(error));
    }
}).mount('#app');;