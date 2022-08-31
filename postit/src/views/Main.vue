<template>
<div class=container>
    <div class=action>
     <router-link :to="{ name: 'NoteCardCreate'}">Ecrire un post-it</router-link>
   </div>
  <div class='row' @dblclick="isHidden = true">
   <div class="card-body" v-for="(note, x) in notes" :id='note.id' :key="x">
    <div class="card">
     <h2 class="card-title">- {{ note.title }} -</h2>
     <h3 class="card-subtitle mb-2">= {{ note.author }} =</h3>
     <p class="card-text">{{ note.text }}</p>
     <div class='action-note'><router-link id="note" :to="{ name: 'NoteCardDetail', params: { id: note.id, title: note.title, author: note.author, text: note.text, detail: note.detail }}">Découvrir</router-link>
          <a href="#" @click="deleteNote(note.id)" class="card-link">Retirer</a>
    </div>
   </div>
  </div>
 </div>
    <p class="action"><a href="#" id="back">Back to top</a></p>
</div>
</template>

<script>
export default {

  name: 'NoteCardView',
  //props: ['artists', 'isFav'],
  data() {
    return {

      notes: JSON.parse(localStorage.getItem('notes')) || [],
      isHidden: false

    }
  },

  methods: {

        removeElement(id) {

        console.log('sending message up to remove id', id)
        this.$emit('remove', id)  
        const x = this.notes.findx(f => f.id === id)
        this.notes.splice(x,1)        
        
        },
  
  deleteNote(id) {

            const postits = JSON.parse(localStorage.getItem('notes'));

            const filtered = postits.filter(postit => postit.id !== id );

            localStorage.setItem('notes', JSON.stringify(filtered));

            this.$router.push({ name: 'Main' });

            location.reload(true);

        }
  
  
  
  }
}
</script>

<style scoped>

#note {

color: rgb(146, 202, 62);

}

#back {

border-color: rgb(58, 141, 143);

}

html, body {
  width: 100%;
  height: 100%;
  margin: 0px;
}
.container {

 height: 100%;
  width: 100%;
 background-image: url('../assets/bois.jpg');
 background-size: 100%;

}

.action {

  display: flex;
  justify-content: center;
  align-items: flex-start;
}

.action a {

  font-family: 'Nothing You Could Do', cursive, Arial, sans-serif;
  font-size: 1.8rem;
  color: black;
  padding: 7px;
  margin: 10%;
  text-decoration: none;
  background-color: rgb(253, 235, 208, 0.4);
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

.action-note {

  display: flex;
 flex: wrap;
 
}

.action-note a {

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

.action-note a:hover {

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


.column {

  display: flex;
  flex: wrap;
  flex-direction: column;
  justify-content: space-between;

}

.card {
  
  display: flex;
  flex: wrap;
  flex-direction: column;
  text-align: center;
  justify-content: space-around;
  width: 350px;
  padding: 5% 5% 0% 5%;
  margin: 1% auto;
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

.card-title {

    font-size: 1.8rem;
    margin-top: 5%;

}

/*.card.fav {
  
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

}*/

.card-text {

    display: flex;
    font-size: 1.5rem;
    padding: 10px;
    margin-top: 10%;
    margin-bottom: 0%;

}

.card-subtitle {

    font-family: 'Kaushan Script', cursive, Arial, sans-serif;
    padding: 2px;
    margin-bottom: 20%;

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
padding: 7px 0px 7px 0px;
  text-decoration: none;
  border-style:dashed;
  border-color: rgb(247, 169, 140);
  border-width: 0.12rem;
  border-right-style: hidden;
  border-left-style: hidden;
  cursor: pointer;
 
}
</style>