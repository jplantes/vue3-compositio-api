<template>
  <h3>{{ title }}</h3>
  <button @click="changTitle">Cambiar titulo</button>
</template>

<script>
import {
  onMounted,
  onUpdated,
  onUnmounted,
  onBeforeMount,
  onBeforeUpdate,
  onBeforeUnmount,
  onErrorCaptured,
  onRenderTracked,
  onRenderTriggered,
  onActivated,
  onDeactivated,
  onServerPrefetch,
  ref
} from 'vue'

export default {
  setup () {

    const title = ref('About')
    
    // created
    console.log('Setup se llamo')

    onMounted(() => {
      console.log( 'onMounted' )
    })
    onUpdated(() => {
      console.log( 'onUpdated' )
    })
    onUnmounted(() => {
      console.log( 'onUnmounted' )
    })
    onBeforeMount(() => {
      console.log( 'onBeforeMount' )
    })
    onBeforeUpdate(() => {
      console.log( 'onBeforeUpdate' )
    })
    onBeforeUnmount(() => {
      console.log( 'onBeforeUnmount' )
    })
    onErrorCaptured(() => {
      console.log( 'onErrorCaptured' )
    })
    onRenderTracked(() => {
      console.log( 'onRenderTracked' )
    })
    onRenderTriggered(() => {
      console.log( 'onRenderTriggered' )
    })
    onActivated(() => {
      console.log( 'onActivated' )
    })
    onDeactivated(() => {
      console.log( 'onDeactivated' )
    })
    onServerPrefetch(() => {
      console.log( 'onServerPrefetch' )
    })

    return {
      title,

      changTitle: () => title.value = 'About Page'
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
