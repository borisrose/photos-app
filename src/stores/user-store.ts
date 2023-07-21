import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('userStore', () => {
  const user = ref({
      email:"",
      password:"",

  })

  function loginUser(obj:any) {
    user.value = {
      ...obj,
    }
  }

  function logoutUser(){
    user.value = {
        email: "",
        password: "",
    }
  }

  return { user, loginUser , logoutUser }
})
