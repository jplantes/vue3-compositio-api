<template>
  <h3>Lista de tareas de Tanos</h3>
  <!-- Acceso directo al Store -->
  <h4>Tareas: {{ $store.state.todo.length }}</h4>
  <!-- acceso al store mediante el CompositionAPI -->
  <h4>Tareas: {{ all.length }}</h4>

  <hr>

  <button 
    :class="{ 'active' : currentTab === 'all' }"
    @click="currentTab = 'all'"
  >
    Todas
  </button>

  <button 
    :class="{ 'active' : currentTab === 'pending' }"
    @click="currentTab = 'pending'"
  >
    Pendientes
  </button>

  <button 
    :class="{ 'active' : currentTab === 'done' }"
    @click="currentTab = 'done'"
  >
    Finalizadas
  </button>


  <ul>
    <li 
      v-for="todo in currentTodos"
      :key="todo.id"
      @dblclick="toggleTodo( todo.id )"
      :class="{ 'done' : todo.completed }"
    >
      {{ todo.text }}
    </li>
  </ul>

  <button
    @click="openModal"
  >
    Nueva entrada
  </button>

  <modal
    v-if="isOpen"
    @on:close="closeModal"
  >

  
    <template v-slot:header>
      <h3>Agregar una nueva tarea</h3>
    </template>
  
    <template v-slot:body>
      <form @submit.prevent="createTodo( newText ); isOpen=false">
        <input type="text" v-model="newText">
        
        <br>
        <br>

        <button type="submit" >
          Agregar
        </button>
      </form>
    </template>  

  </modal>

</template>

<script>

import { ref } from 'vue'
import Modal from '../components/Modal.vue'
import useTodo from '../composable/useTodo'

export default {
  components: {
    Modal
  },

  setup () {


    const newText = ref()
    
    const {
      currentTab,
      isOpen,
      openModal,
      closeModal,
      all,
      currentTodos,
      toggleTodo,
      createTodo 
    } = useTodo()

    return {
      all,
      isOpen,
      openModal,
      closeModal,
      currentTab,
      currentTodos,
      toggleTodo,
      createTodo,
      newText
    }
  }
}
</script>

<style scoped>

h4{
  margin-bottom: 10px;
  margin-top: 5px;
}

li{
  cursor: pointer;
}

.active{
  background-color: rgb(54, 187, 114) !important;
  border-radius: 3px;
}

.done{
  text-decoration: line-through;
}
</style>