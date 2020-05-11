import Vue from 'vue'
import Vuex from 'vuex'

import meetups from './modules/meetups'
import threads from './modules/threads'
import categories from './modules/categories'
import auth from './modules/auth'
Vue.use(Vuex)

export default new Vuex.Store({
  //define our modules here
  modules:{
   meetups,
   categories,
   threads,
   auth
  },
  //in state we are keeping our data and we are sharing with our components

  //getters are like computed properties.simple function to get our state

  //action are like methods in vue components. they should not mutate the state
  //very good spot to fetch a data.action call usualy shouls resolve into data
  //simple function to mutate state
  mutations:{
    setItems (state,{resource, items}){
     state[resource].items = items
    },
    setItem (state,{resource, item}){
     state[resource].item = item
    }

  }
})
