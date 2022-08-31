<template>
 <div id="app">
    
  </div>
   <!-- <NoteCardView :title='title' :author='author' :text='text'>
     <template v-slot:link>
  
          <router-link :to="{ name: 'NoteCardDetail' }">Découvrir</router-link>
              
      </template>
     </NoteCardView>

      
   <div class=action>
     <a href="#">Ajouter un post-it</a>
     </div> -->
     <router-view/>
</template>

<script>
//import NoteCardView from './views/NoteCardView.vue'
//import NoteCardDetail from './views/NoteCardDetail.vue'

export default {
  name: 'App',
  components: {
    
  //NoteCardView,
  //NoteCardDetail
    
    },
 

}
</script>

<style>
/*body {

 
 background-image: url('./assets/bois.jpg');
 background-repeat: repeat-y;
 background-size: 50%;

}*/
</style>
