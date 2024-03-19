<template>
  <dialog-form :controller="controller"/>
</template>

<script setup>
import { cambioControllerImpl } from "../di/di";
import DialogForm from "../components/dialog-form.vue";

const controller = cambioControllerImpl();
</script>

<style>

</style>