<template>
  <h1>Aprendiendo Slots</h1>

  <button
    @click="openModal"
  >
    Abrir modal
  </button>

  <modal
    v-if="isModalOpen"
    @on:close="closeModal"
  >
    <!-- Slot comun-->
    <!--
      <h2>Titulo del modal</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam fuga quidem inventore deleniti earum</p>
      <button>Salir</button>
    -->

    <!-- Slot name -->
    <template v-slot:footer>
      <button @click="closeModal">Salir</button>
    </template>
    
    <template v-slot:body>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam fuga quidem inventore deleniti earum</p>
    </template>
    
    <template v-slot:header>
      <h2>Titulo del modal</h2>      
    </template>

  </modal>

</template>

<script>
import { ref } from 'vue';
import Modal from '../components/Modal.vue';



export default {
  components:{
    Modal
  },
  setup () {

    const isModalOpen = ref(false)
    

    return {
      isModalOpen,

      openModal: () => isModalOpen.value = true,
      closeModal: () => isModalOpen.value = false,
    }
  }
}
</script>

<style  scoped>

</style>