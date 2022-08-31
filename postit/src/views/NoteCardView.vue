<template>
<div class=row>
  <div class="card-body" v-for="(note, x) in notes" :key="x">
    <div class="card" :class="{fav: artist.isFav}">
     <h2 class="card-title">- {{ note.title }} -</h2>
     <h3 class="card-subtitle mb-2">= {{ note.author }} =</h3>
    <p class="card-text">{{ note.text }}</p>
    <div><router-link :to="{ name: 'NoteCardDetail', params: { id: note.id }}">Découvrir</router-link>
     </div>
   <!--<a href="#" class="card-link">Découvrir</a>-->
    </div>
  </div>
 </div>
</template>

<script>


export default {

  name: 'NoteCardView',
  //props: ['artists', 'isFav'],
  data() {

    return{

      notes: JSON.parse(localStorage.getItem('notes')) || []
    }
  }

}
</script>

<style scoped>

.column {

  display: flex;
  flex: wrap;
  flex-direction: column;

}

.card.fav {
  
  display: flex;
  flex: wrap;
  flex-direction: column;
  text-align: center;
  justify-content: space-around;
  width: 400px;
  padding: 5%;
  margin: 5% auto;
  background-color: rgb(58, 141, 143);
  color: whitesmoke;
  font-family: 'Nothing You Could Do', cursive, Arial, sans-serif;
  box-shadow: 2px 10px 6px #444;
  -moz-box-shadow: 2px 10px 6px #444;
  -webkit-box-shadow: 1px 10px 6px #444;
  transform: rotate(1deg);
  -moz-transform: rotate(1deg);
  -webkit-transform: rotate(1deg);
  -o-transform: rotate(2deg);
  -ms-transform: rotate(1deg);
  border-bottom-right-radius: 80px 20px;
  border-bottom-left-radius: -10px 20px;

}

.card {
  
  display: flex;
  flex: wrap;
  flex-direction: column;
  text-align: center;
  justify-content: space-around;
  width: 400px;
  padding: 5%;
  margin: 5% auto;
  background-color: rgb(118, 68, 138 );
  color: whitesmoke;
  font-family: 'Nothing You Could Do', cursive, Arial, sans-serif;
  box-shadow: 2px 10px 6px #444;
  -moz-box-shadow: 2px 10px 6px #444;
  -webkit-box-shadow: 1px 10px 6px #444;
  transform: rotate(1deg);
  -moz-transform: rotate(1deg);
  -webkit-transform: rotate(1deg);
  -o-transform: rotate(2deg);
  -ms-transform: rotate(1deg);
  border-bottom-right-radius: 80px 20px;
  border-bottom-left-radius: -10px 20px;

}

/*.card {
  
  display: flex;
  flex: wrap;
  flex-direction: column;
  text-align: center;
  justify-content: space-around;
  width: 400px;
  padding: 5%;
  margin: 5% auto;
  background-color: rgb(58, 143, 76);
  color: whitesmoke;
  font-family: 'Nothing You Could Do', cursive, Arial, sans-serif;
  box-shadow: 2px 10px 6px #444;
  -moz-box-shadow: 2px 10px 6px #444;
  -webkit-box-shadow: 1px 10px 6px #444;
  transform: rotate(1deg);
  -moz-transform: rotate(1deg);
  -webkit-transform: rotate(1deg);
  -o-transform: rotate(2deg);
  -ms-transform: rotate(1deg);
  border-bottom-right-radius: 80px 20px;
  border-bottom-left-radius: -10px 20px;
}
*/

.card-text {

display: flex;
font-size: 1.5rem;
padding: 10px;

}

.card-subtitle {


font-family: 'Kaushan Script', cursive, Arial, sans-serif;
padding: 2px;

  
}

.card-body {


  justify-content: flex-end;
   flex: wrap;
   flex-direction: column;
}

.card-body a {
  
  width: 50%;
  text-align: center;
  font-size: 1.5rem;
  color:coral;
  padding: 7px 0px 7px 0px;
  text-decoration: none;
  border-style:dashed;
  border-color: white;
  border-width: 0.1rem;
  border-right-style: hidden;
  border-left-style: hidden;
  cursor: pointer;
 
}

.card-body a:hover {

  text-align: center;
  font-size: 1.5rem;
  color: whitesmoke;
  padding: 7px;
  text-decoration: none;
  border-style:dashed;
  border-color: rgb(247, 169, 140);
  border-width: 0.12rem;
  border-right-style: hidden;
  border-left-style: hidden;
  cursor: pointer;
 
}
</style>