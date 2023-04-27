import { createStore } from 'vuex'

import { v4 as uuidv4 } from 'uuid'

export default createStore({
  state:{
    todo: [
      {id: '1', text: 'Recolectar las piedras del infinito', completed: false},
      {id: '2', text: 'Priedra del alma', completed: true},
      {id: '3', text: 'Piedra del poder', completed: true},
      {id: '4', text: 'Piedra de la realidad', completed: false},
      {id: '5', text: 'Conseguir secuases competentes', completed: false},
    ]
  },
  mutations:{
    toggleTodo( state, id ){
      const idx = state.todo.findIndex( todo => todo.id === id )

      state.todo[idx].completed = !state.todo[idx].completed
    },
    createTodo( state, text = '' ){
      if( text.length <= 1 ) return

      state.todo.push({
        id: uuidv4,
        completed: false,
        text
      })
    }
  },
  actions:{

  },
  modules:{

  },

  getters: {
    doneTodo: ( state ) => {
      return state.todo.filter( todo => todo.completed )
    },

    pendTodo: ( state ) => {
      return state.todo.filter( todo => !todo.completed )
    },

    allTodo: ( state ) => {
      return state.todo
    },

    currentStatus: ( _, getters ) => ( tab ) => {

      switch ( tab ) {
        case 'all': return getters.allTodo
        case 'pending': return getters.pendTodo
        case 'done': return getters.doneTodo
      }

    }



  }
})