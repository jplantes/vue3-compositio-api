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

  

</template>

<script>

import { computed, ref } from 'vue'
import { useStore } from 'vuex'

export default {
  setup () {
    
    const store = useStore()

    const currentTab = ref('all')

    // const toggleTodo = ( id ) => {
    //   store.commit( 'toggleTodo', id )
    // }

    return {
      currentTab,

      all: computed( () => store.getters[ 'allTodo' ] ),
      pending: computed( () => store.getters[ 'pendTodo' ] ),
      done: computed( () => store.getters[ 'doneTodo' ] ),
      currentTodos: computed( () => store.getters['currentStatus'](currentTab.value) ),

      toggleTodo: ( id ) => store.commit( 'toggleTodo', id )
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