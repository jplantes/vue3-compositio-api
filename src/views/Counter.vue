<template>
  <h1>Counter view</h1>

  <h3>{{ counter }}</h3>

  <button @click="incrementar">+1</button>
  <button @click="decrementar">-1</button>
</template>

<script>
import useCounter from '@/composable/useCounter'

export default {
  // Cosas que quedan fuera del setup
  name: 'Counter',
  props: {},
  emits: {},

  setup () {
    
    const { counter, incrementar, decrementar } = useCounter( 10 )


    return {
      counter,
      incrementar,
      decrementar
    }
  }
}
</script>

<style lang="scss" scoped>

</style>