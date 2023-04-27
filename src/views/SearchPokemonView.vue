<template>
  <h3>Buscar Pokemon</h3>

  <form @submit.prevent="onSubmit">
    <input
      type="number"
      placeholder="Número de poquemon"
      v-model="pokemonId"
      ref="txtSearchId"
    >
  </form>

  <br>

  <span>Presione Enter para buscar</span>
</template>

<script>

import { onActivated, ref } from 'vue'
import { useRouter } from 'vue-router'

export default {
  setup () {
    const router = useRouter()

    const pokemonId = ref(1)

    // Este propiedad es para mantener la referencia
    const txtSearchId = ref()

    // Colocar el en el componete que deseamos - Esto lo podemos hacer luego de que el componente se active
    onActivated( () => {
      // txtSearchId.value.focus()
      txtSearchId.value.select()
    })

    const onSubmit = () => {
      console.log( 'pokemon a buscar: ', pokemonId.value )
      router.push({ name: 'pokemon-id', params: { id: pokemonId.value } })
    }




    return {
      pokemonId,
      txtSearchId,

      onSubmit
    }
  }
}
</script>

<style scoped>
*{
  display: flex;
  justify-content: center;
}
</style>