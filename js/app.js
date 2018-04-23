var fb_config = {
    apiKey: "AIzaSyAH_ae1ipZhJjlDr71FuECKT2p76C_NNrM",
    authDomain: "prueba1-eccbe.firebaseapp.com",
    databaseURL: "https://prueba1-eccbe.firebaseio.com",
    projectId: "prueba1-eccbe",
    storageBucket: "prueba1-eccbe.appspot.com",
    messagingSenderId: "931473994813"
};

firebase.initializeApp(fb_config);

var database = firebase.database();

// database.ref('web').on('value', function(snapshot){
//     console.log(snapshot.val());
// });





var app = new Vue({
    el: '#app',
    data: {
        items:[]
    },
    mounted(){
        var self = this;
        database.ref().on('value', function(snapshot){
            self.items = snapshot.val();
        });
        
    }
});