import { computed, ref } from 'vue'
import { useStore } from 'vuex'

const useTodo = () => {

  const store = useStore()

  const currentTab = ref('all')

  const isOpen = ref( false )

  return {
    currentTab,
    isOpen,

    //Methos
    openModal: () => isOpen.value = true,
    closeModal: () => isOpen.value = false,

    // Access to state
    all: computed( () => store.getters[ 'allTodo' ] ),
    pending: computed( () => store.getters[ 'pendTodo' ] ),
    done: computed( () => store.getters[ 'doneTodo' ] ),
    currentTodos: computed( () => store.getters['currentStatus'](currentTab.value) ),
    toggleTodo: ( id ) => store.commit( 'toggleTodo', id ),
    createTodo: ( text ) => store.commit( 'createTodo', text ),
  }
}

export default useTodo