<template>
<div class=container>
  <div class="card-body">
     <div class="card">
        <h3 class="card-title"><input id="create-title" type="text" v-model="title" placeholder="- Titre -"></h3>
        <h3 class="card-subtitle mb-2"><input id="create-author" type="text" v-model="author" placeholder="=Artiste="></h3>
        <div class="card-text">
        <p><textarea  id="create-text" type="text" cols="29" rows="2" v-model="text" placeholder="Phrase clé"></textarea></p>
        <p><textarea  id="create-lyrics" type="text" cols="29" rows="7" v-model="detail" placeholder="Paroles"></textarea></p>
        </div>
        <div><a href="#" @click="add" class="card-link">Epingler</a><a href="#" id="effacer" @click="back" class="card-link">Retour</a>
       </div>
      </div>
   </div>
        <!--<div class='action'>
        <a href="#" @click="back" class="card-link">Retour</a> 
        </div>-->
 </div>
</template>

<script>

/*let artist = 
    {title: ' ', author: ' ', text: ' ', detail: ' '};

var artistString = JSON.stringify(firstArtist);
localStorage.setItem("newArtist", artistString);
//document.getElementById("storeObj").innerHTML = 
    //localStorage.getItem("newArtist");

let artists = [
       {title: ' ', author: ' ', text: ' ', detail: ' '}
      ];
localStorage.setItem("artists", JSON.stringify(artists));
*/
import uuid from '../../node_modules/uuid/dist/v4';

export default {
  name: 'NoteCardCreate',
  /*props: {
    title: String,
    author: String,
    text: String,
    detail: String,
  },*/
  data() {

        /*return {
            note: [{ 
            title: '- Titre -',
            author: '=Artiste=',
            text: 'Phrase clé ',
            detail: 'Paroles'

           }]
        
        }*/ 
  },   
    /*mounted() {
    if (localStorage.title) {
      this.title = localStorage.title;
    }
    if (localStorage.author) {
      this.author = localStorage.author;
    }
    if (localStorage.text) {
      this.text = localStorage.text;
    }
    if (localStorage.detail) {
      this.detail = localStorage.detail;
    }
  },*/
  methods: {
    /*persist() {
      localStorage.title = this.title;
      localStorage.author = this.author;
      localStorage.text = this.text;
      localStorage.detail = this.detail;
      console.log('maintenant prétendre que j\'ai fait plus de choses...');
    },*/
   
    add() {

      var notes = JSON.parse(localStorage.getItem('notes')) || [];
      var newNote = {id: uuid(), title: this.title, author: this.author, text: this.text, detail: this.detail}
      notes.push(newNote)
      localStorage.setItem('notes', JSON.stringify(notes))
      this.$router.push({ name: 'Main' });

    },

    clear() {

        localStorage.clear();
        location.reload(true);
    },

    /*created() {
    //for (i = 0; i < localStorage.length; i++) {
        this.title = localStorage.key(title);
        this.author = localStorage.getItem(localStorage.key(author));
        this.text = localStorage.getItem(localStorage.key(text));
        this.detail = localStorage.getItem(localStorage.key(detail));
    }*/
    back() {

      this.$router.go(-1)
    } 
  }
}
</script>

<style scoped>

/*.row {
display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
  

}*/

.container {
display: flex;
  background-image: url('../assets/table.jpg');
  background-repeat: no-repeat;
  background-size: 120%;
  justify-content:space-around;

}

.action {

  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items:baseline;
  margin-top: 0;
  
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

#create-title
{
    display:flex;
    text-align: center;
    justify-content: center;
    margin: 2px auto;
    min-width: 100%;
    background-color: transparent;
    font-size: 1.5rem;
    font-weight: 500;
    color: whitesmoke;
    border-width: 1px;
    border-color: whitesmoke;
    border-top-style: hidden;
    border-right-style: hidden;
    border-bottom-style:solid;
    border-left-style: hidden;
    outline: none;
}

#create-author
{
    display:flex;
    text-align: center;
    justify-content: center;
    margin: 2px auto;
    min-width: 100%;
    background-color: transparent;
    font-size: 1.5rem;
    font-weight: 500;
    color: whitesmoke;
    border-width: 1px;
    border-color: whitesmoke;
    border-top-style: hidden;
    border-right-style: hidden;
    border-bottom-style: solid;
    border-left-style: hidden;
    outline: none;
}

#create-text
{
    display:flex;
    text-align: center;
    flex: wrap;
    align-items: center;
    justify-content: center;
    margin: 2px auto;
    min-width: 100%;
    background-color: transparent;
    font-size: 1.5rem;
    font-weight: 500;
    color: whitesmoke;
    border-width: 1px;
    border-color: whitesmoke;
    border-top-style: hidden;
    border-right-style: hidden;
    border-bottom-style: solid;
    border-left-style: solid;
    outline: none;
}

#create-lyrics
{
    display:flex;
    flex: wrap;
    text-align: center;
    justify-content: center;
    margin: 2px auto;
    min-width: 100%;
    background-color: transparent;
    font-size: 1.5rem;
    font-weight: 500;
    color: whitesmoke;
    border-width: 1px;
    border-color: whitesmoke;
    border-top-style: hidden;
    border-right-style: hidden;
    border-bottom-style: solid;
    border-left-style: solid;
    outline: none;
}
.column {

  display: flex;
  flex: wrap;
  flex-direction: column;

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
*/
.card {
  
  display: flex;
  flex: wrap;
  flex-direction: column;
  text-align: center;
 
  width: 500px;
  padding: 5%;
  margin: 5% auto;
  background-color: rgb(140, 158, 158);
  color: black;
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


.card-text {
    
  
  font-size: 1.5rem;
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
   margin: 10%;
}

.card-body a {
  
  width: 50%;
  text-align: center;
  font-size: 1.5rem;
color: rgb(146, 202, 62);
  padding: 7px 0px 7px 0px;
  text-decoration: none;
  border-style:dashed;
  border-color: white;
  border-width: 0.1rem;
  border-right-style: hidden;
  border-left-style: hidden;
  cursor: pointer;
 
}

.card-body a#effacer {
  
  width: 50%;
  text-align: center;
  font-size: 1.5rem;
  color:rgb(28, 218, 218);
  padding: 7px 0px 7px 0px;
  text-decoration: none;
  border-style:dashed;
  border-color: white;
  border-width: 0.1rem;
  border-right-style: hidden;
  border-left-style: hidden;
  cursor: pointer;
 
}

.card-body a#effacer:hover {
  
  width: 50%;
  text-align: center;
  font-size: 1.5rem;
  color:whitesmoke;
  padding: 7px 0px 7px 0px;
  text-decoration: none;
  border-style:dashed;
  border-color: rgb(205, 97, 85);
  border-width: 0.12rem;
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
  border-color: green;
  border-width: 0.12rem;
  border-right-style: hidden;
  border-left-style: hidden;
  cursor: pointer;
 
}
</style>