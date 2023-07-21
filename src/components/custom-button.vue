<template>
    <button :type="type">
        <slot></slot>
    </button>
</template>
<script setup lang="ts">

interface CustomButtonsProps{

    type: any;

}

const message = "CustomButtons";

defineProps<CustomButtonsProps>()

</script>