<template>
  <h2 v-if="isLoading">Espere por favor...</h2>
  <h2 v-else>Usuarios</h2>

  <h5 v-if="errorMessage">{{ errorMessage }}</h5>

  <div v-if="users.length > 0">
    <user-list 
      :users="users"
      v-slot="{ user }"
    >

      <h3>{{ user.first_name }} {{ user.last_name }}</h3>
      <span>{{ user.email }}</span>
    
    </user-list>
  </div>

  <div>
    <button @click="prevPage">Atras</button>
    <button @click="nextPage">Siguiente</button>
  
    <span>Pagin {{ currentPage }}</span>
  </div>
</template>

<script>

import useUser from '@/composable/useUsers'
import UserList from '../components/UserList.vue'

export default {
  components: {
    UserList
  },


  setup () {
    
    const {
      users,
      isLoading,
      currentPage,
      errorMessage,
      nextPage,
      prevPage,
    } = useUser()

    return {
      users,
      isLoading,
      currentPage,
      errorMessage,
      nextPage,
      prevPage,
    }
  }
}
</script>

<style scoped>

h2{
  text-align: center;
  width: 100%;
}

h5{
  text-align: center;
  width: 100%;
}

div{
  display: flex;
  justify-content: center;
  text-align: center;
  margin-top: 30px;
}

ul{
  width: 250px;
}

</style>