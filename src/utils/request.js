import Vue from 'vue'
import axios from 'axios'
import {VueAxios} from './axios'
import {ACCESS_TOKEN} from './type'

const service = axios.create({
  // base_url
  timeout: 6000
})

const err = (error) => {
  if (error.response) {
    const data = error.response.data
    const token = Vue.ls.get(ACCESS_TOKEN)
    if (error.response.status === 403) {

    }
  }
}
