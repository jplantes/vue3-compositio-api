import { ref } from 'vue'

const useCounter = ( initValue ) => {
  
  const counter = ref( initValue )

  const incrementar = () => {
    counter.value++
  }

  const decrementar = () => {
    counter.value--
  }


  return {
    counter,
    incrementar,
    decrementar
  }
}

export default useCounter