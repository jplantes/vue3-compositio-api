<template>
  <ul>
    <!--
      <li v-for="user in users" :key="user.id">
        <h3>Hola mundo</h3>
      </li>
    -->

    <slot 
      v-for="user in users" 
      :user="user"
      :key="user.id"
    >

    </slot>
  </ul>
</template>

<script>
export default {
  props: {
    users: {
      type: Array,
      required: true
    }
  },

  setup () {
    

    return {}
  }
}
</script>

<style scoped>

ul{
  list-style: none;
}
</style>