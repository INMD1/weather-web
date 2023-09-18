import vuex from 'vuex'
import Vue from 'vue'

Vue.use(vuex);

export default new vuex.Store({
  state :{
    search_check: 0,
    bg_id: 0,
    select_location: {
      value: '',
      text: ''
    },
    location_weather_data: ""
  },
  mutations: {
    search : function (state, value) {
      state.search_check = value
    },
    bg_id: function (state, value) {
      state.bg_id = value
    },
    select_location : function  (state, value){
      state.select_location = value 
    },
    location_weather_data: function  (state, value){
      state.location_weather_data = value
    },
  },
})
