<template>
<div class=container>
  <div class=row>
    <div class="card">
      <!--  <div class="card-body" v-for="(artist, x) in artists" :key="x" :id='this.$route.params.id'>-->
      <div class="card-body">
        <h2 class="card-title">{{ title }}</h2>
        <h3 class="card-subtitle mb-2">··· Paroles ···</h3>
        <p class="card-text">{{ detail }}</p>
        <a href="#" @click="back" class="card-link">Retour au tableau</a> 
          <!-- <router-link :to="{ name: 'NoteCard' }">Retour au taleau</router-link>
          this.$router.back()
          -->
      </div>
    </div>
  </div>
</div>
</template>

<script>
//import NoteCardView from './NoteCardView.vue'

export default {

  name: 'NoteCardDetail',
  //components: {NoteCardView},
  components: { },
  props: ['id', 'title', 'author', 'test', 'detail'],
  
  /*data (){
    return {
      id: this.$route.params.id,
      
      artists: [
       {id: 1, title: "- Sur Un Trapeze -", author: '=Bashung=', text: "Ce qui nous entoure, l'extension de nos corps ~ Quand nous sommes à l'écart, mineur, chercheur d'or", detail: "On dirait qu'on sait lire sur les lèvres ~ Et que l'on tient tous les deux sur un trapèze ~ On dirait que sans les poings on est toujours aussi balèzes ~ Et que les fenêtres nous apaisent", isFav: 'true'},
       {id:2, title: "- Espoir Adapté -", author: '=Grand Corps Malade=', text: "Un espoir adapté, c'est l'envie d'croire qui résiste ~ Même en milieu hostile, c'est la victoire qui existe", detail: "Un espoir adapté, c'est l'envie de croire qui résiste ~ Meme en milieu hostile, c'est la victoire qui existe ~ Ces cinq potes un peu perdus qui tentent de battre encore des ailes", isFav: ''},
       {id: 3, title: "- En Surface -", author: '=Daho=', text: "Je pensais ne pas y penser ~ Oui mais nos pensées nous dépassent", detail: "Je rêvais d'une vie de plumes ~ Ignorais la stèle et l'enclume ~ Je balayais mes propres traces ~ Que de temps perdu en surface ~ Que de temps passé en surface ~ Que de temps à ne pas succomber ~ Au spleen et aux étoiles plombées", isFav: 'null'},
      ]
      
    }
  },*/
  
  methods: {
    
    back() {

        this.$router.go(-1)
    } 

  }

}

</script>

<style scoped>

.container {

 display: flex;
 flex-direction: column;
 background-image: url('../assets/bois.jpg');
 background-size: 100%;

}

.column {

  display: flex;
  flex: wrap;
  flex-direction: column;

}

.card {

  display: flex;
  flex: wrap;
  flex-direction: column;
  text-align: center;

  width: 500px;
 
  margin: 5% auto;
  background-color: rgb(58, 141, 143);
  color: whitesmoke;
  font-family: 'Nothing You Could Do', cursive, Arial, sans-serif;
  box-shadow: 2px 7px 6px #444;
  -moz-box-shadow: 2px 7px 6px #444;
  -webkit-box-shadow: 1px 7px 6px #444;
  transform: rotate(2deg);
  -moz-transform: rotate(2deg);
  -webkit-transform: rotate(2deg);
  -o-transform: rotate(2deg);
  -ms-transform: rotate(2deg);
  border-bottom-right-radius: 60px 10px;

}

/*.card {

padding: 10px;
width: 30%;
margin: 10px auto;
background-color: rgb(32, 169, 179);
color: whitesmoke;
font-family: 'Nothing You Could Do', cursive, Arial, sans-serif;
box-shadow: 7px 7px 5px grey;
}*/

.card-text {

font-size: 1.5rem;
margin-top: 5%;
margin-bottom: 5%;
padding: 10px;

}

.card-subtitle {

font-family: 'Kaushan Script', cursive, Arial, sans-serif;
padding: 2px;

  
}

.card-body {


  justify-content: stretch;
   flex: wrap;
   flex-direction: column;

 
}

.card-body a {
  width: 70%;
  text-align: center;
  font-size: 1.5rem;
  color: gold;
  padding: 7px;
  text-decoration: none;
  border-style:dashed;
  border-color: white;
  border-width: 0.1rem;
  border-right-style: hidden;
  border-left-style: hidden;
  cursor: pointer;
 
}


.card-body a:hover {

  font-size: 1.5rem;
  color: whitesmoke;
  padding: 7px;
  text-decoration: none;
  border-style:dashed;
  border-color: gold;
  border-width: 0.12rem;
  border-right-style: hidden;
  border-left-style: hidden;
  cursor: pointer;
 
}
</style>