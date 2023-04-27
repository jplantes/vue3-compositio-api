import axios from 'axios'
import { ref } from 'vue'

const usePokemon = ( pokemonid = 1 ) => {

  const pokemon = ref()
  const isLoading = ref( false )
  const errorMsg = ref()

  const searchPokemon = async ( id ) => {

    if( !id ) return

    isLoading.value = true
    pokemon.value = null

    try {
      const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${ id }`)
      pokemon.value = data

      errorMsg.value = null

    } catch (error) {
      console.log( 'No se pudo obtener el pokemon', error )
    }

    isLoading.value = false
  }


  searchPokemon( pokemonid )

  return{
    pokemon,
    isLoading,
    errorMsg,

    searchPokemon,
  }
}

export default usePokemon