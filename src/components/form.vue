<template>

    <form class="form-container" @submit.prevent="submitHandler">

        <section class="inputs-container">

            <FormInput  :input-information="formInputs![0]!" @input-change="getInputChange"/>

            <FormInput :input-information="formInputs![1]!"  @input-change="getInputChange"/>

        </section>

        <section class="buttons-container">
            <CustomButton type="submit">
                Valider
            </CustomButton>
            <CustomButton type="reset">
                Reset
            </CustomButton>

        </section>

    </form>

</template>
<script setup lang="ts">
import { onMounted, ref, reactive, watch, computed} from "vue";
import FormInput from "../components/form-input.vue"
import CustomButton from "../components/custom-button.vue"
import { useUserStore} from "../stores/user-store"



const userStore = useUserStore();

const user = computed(() => userStore.user)

const formFields = reactive<any>({

    email:"",
    password:"",
})


const props = defineProps({

    formInputs: Array

})




const getInputChange = (obj:any) => {


    console.log('obj', obj)
    formFields[obj.name] = obj.val
    

}


watch((formFields), (val) => {


    console.log('formFields is changing', val)

})
 

const submitHandler = () => {


    userStore.loginUser(formFields)

}




</script>

<style scoped lang="scss">


.form-container {


    border: white 3px solid;
    display: flex;
    flex-direction: column;

    height: 400px;
    width: 400px;
    background-color: beige;


    .inputs-container  {


        display: flex;
        flex-direction: column;

    }
}





</style>