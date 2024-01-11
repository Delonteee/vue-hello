

//Funzione createApp da Vue

const { createApp } = Vue;

createApp({
    data(){
        return{
            message: "Hello Vue!",
            imageLink:"img/53ololoekrn51.jpg"
        };
    }
}).mount("#app");