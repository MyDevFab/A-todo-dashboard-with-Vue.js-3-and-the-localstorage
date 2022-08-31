<template>
  <NoteCardView :notes="notes">
  
    <router-link :to="{ name: 'NoteCardDetail', params: { id: note.id }}">Découvrir</router-link>

  </NoteCardView>

  <div class=action>

          <router-link :to="{ name: 'NoteCardCreate'}">Ecrire un post-it</router-link>

   </div>
</template>

<script>
import NoteCardView from './NoteCardView.vue'
//import NoteCardDetail from './views/NoteCardDetail.vue'




export default {
  name: 'NoteHome',
  components: {
  NoteCardView,
  //NoteCardDetail
  
  },

   data() {

    return{

      notes: JSON.parse(localStorage.getItem('notes')) || []
    }
   /*data (){
    return {
      
      artists: [
       {id: 1, title: "Sur Un Trapeze", author: 'Bashung', text: "Ce qui nous entoure, l'extension de nos corps ~ Quand nous sommes à l'écart, mineur, chercheur d'or", detail: "On dirait qu'on sait lire sur les lèvres ~ Et que l'on tient tous les deux sur un trapèze ~ On dirait que sans les poings on est toujours aussi balèzes ~ Et que les fenêtres nous apaisent", isFav: 'true'},
       {id:2, title: "Espoir Adapté", author: 'Grand Corps Malade', text: "Un espoir adapté, c'est l'envie d'croire qui résiste ~ Même en milieu hostile, c'est la victoire qui existe", detail: "Un espoir adapté, c'est l'envie de croire qui résiste ~ Meme en milieu hostile, c'est la victoire qui existe ~ Ces cinq potes un peu perdus qui tentent de battre encore des ailes", isFav: 'true'},
       {id: 3, title: "En Surface", author: 'Daho', text: "Je pensais ne pas y penser ~ Oui mais nos pensées nous dépassent", detail: "Je rêvais d'une vie de plumes ~ Ignorais la stèle et l'enclume ~ Je balayais mes propres traces ~ Que de temps perdu en surface ~ Que de temps passé en surface ~ Que de temps à ne pas succomber ~ Au spleen et aux étoiles plombées", isFav: ''},
      ]
    }
  }*/
   }
}
    </script>


<style scoped>

.action {

  display: flex;
  justify-content: center;
}
.action a {

  font-family: 'Nothing You Could Do', cursive, Arial, sans-serif;
  font-size: 1.8rem;
  color: black;
  padding: 7px;
  margin: 10%;
  text-decoration: none;
  border-style:dashed;
  border-color: coral;
  border-width: 0.2rem;
  border-right-style: hidden;
  border-left-style: hidden;
  cursor: pointer;
 
}

.action a:hover {

  font-family: 'Nothing You Could Do', cursive, Arial, sans-serif;
  font-size: 1.8rem;
  color: coral;
  padding: 7px;
  margin: 10%;
  text-decoration: none;
  border-style:dashed;
  border-color: black;
  border-width: 0.2rem;
  border-right-style: hidden;
  border-left-style: hidden;
  cursor: pointer;
 
}
</style>