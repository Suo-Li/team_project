import { defineStore } from "pinia";

export default defineStore('location',{
    state(){
        return{
            location:1,
        }
    },
    getters:{
        pageLocation(){
            return
        }
    },
    actions:{
        setPages(param){
            this.location = param
        }
    }
})