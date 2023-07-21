<template>


    <div class="input-container">


        <input 
            v-if="inputInformation!.type !== 'textarea'"  
            v-bind:placeholder="inputInformation!.placeholder" 
            :type="inputInformation!.type"
            v-model="userInput"
       
        >

        <textarea 
            v-else
            v-bind:placeholder="inputInformation!.placeholder"
            v-model="userInput"
        >
        </textarea>



    </div>



</template>
<script lang="ts" setup>
import { ref, watch } from "vue"


const emit = defineEmits(['inputChange'])


const props = defineProps({

    inputInformation : {

        type: Object,
        required: false,
    }    

})

const userInput = ref("");


watch((userInput), (val) => {

    if(/^[a-z@\.]{10,20}$/g.test(val) && props.inputInformation!.type === 'text'){

        emit('inputChange', {name:props.inputInformation!.name,  val: val})
    }
   
    if(/^[a-z0-9\._!?éèùï]{8,20}$/i.test(val) && props.inputInformation!.name === 'password'){

        emit('inputChange', {name:props.inputInformation!.name,  val: val})
    }

})

</script>

<style lang="scss" scoped>


.input-container {

    width: 100%;
    margin: 10px 0;

    input {

        width: 100%;
        border: none;
        outline: none;
        padding: 10px 0;
        text-indent: 10px;

    }
}

</style>