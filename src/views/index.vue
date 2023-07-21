<template>

    <div class="log-page">
        <Form :form-inputs="formInputs" />

    </div>



</template>
<script setup lang="ts">
import Form from "../components/form.vue"



const formInputs = [

    {   
        name: 'email',
        placeholder: 'Email',
        type : 'text'
    
    },
    {
        name: 'password',
        placeholder: 'Mot de passe',
        type : 'password'
    }



]

</script>

<style scope lang="scss">


.log-page {

    display: flex;
    align-items: center;
    justify-content: center;
    border: green 4px solid;
}

</style>