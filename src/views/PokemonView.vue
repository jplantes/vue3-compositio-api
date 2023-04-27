<template>
  <h2 v-if="!pokemon && !errorMsg">Buscando ...</h2>
  <h2 v-else-if="errorMsg">{{ errorMsg }}</h2>

  <div v-else class="centrado">
    <h3>{{ pokemon.name }}</h3>
    <img :src="pokemon.sprites.front_default" alt="">
    <br>
    <router-link
      :to="{ name: 'pokemon-search'}"
    >
      Regresar
    </router-link>
  </div>


</template>

<script>
import { watch } from 'vue'
import { useRoute, onBeforeRouteLeave } from 'vue-router'
import usePokemon from '@/composable/usePokemon'

export default {
  setup () {
    const route = useRoute()

    const { pokemon, isLoading, errorMsg, searchPokemon  } = usePokemon( route.params.id )

    // Watch en conposition API
    watch(
      // Primer call-back indica cual propiedad reactiva queremos observar
      () => route.params.id,
      // Segundo call-back que queremos ejecutar
      () => {
        searchPokemon( route.params.id )
      }
    )

    onBeforeRouteLeave( () => {
      const salir = window.confirm('¿Esta seguro que quiere salir?')


      if( !salir ) return false
    })


    return {
      pokemon,
      isLoading,
      errorMsg
    }
  }
}
</script>

<style >
*{
  text-align: center;
}

</style>