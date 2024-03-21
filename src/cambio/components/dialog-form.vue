<template>
  <v-container>
    <v-row justify="center" class="fill-height py-15 my-15" align="center">
      <v-col cols="12" sm="7" md="6" lg="7">
        <div justify="center" align="center" class="mb-10 text-h3">
          Cotações de Moeda
        </div>
        <v-form @submit.prevent="controller.mostraValor()">
          <v-row class="d-flex justify-center">
            <v-col cols="4">
              <v-text-field
                label="Valor"
                placeholder="Digite o valor desejado"
                clearable
                v-model="controller.valor.value"
              >
              </v-text-field>
            </v-col>
          </v-row>
          <v-row class="d-flex justify-center mb-2">
            <v-col cols="5">
              <v-select
                v-model="controller.textoCambio1.value"
                label="Converter de"
                color="warning"
                :items="controller.comboCambio.value"
                item-title="t"
                item-value="v"
                variant="outlined"
              ></v-select>
            </v-col>
            <v-col cols="5">
              <v-select
                v-model="controller.textoCambio2.value"
                label="Para"
                color="warning"
                :items="controller.comboCambio.value"
                item-title="t"
                item-value="v"
                variant="outlined"
              ></v-select>
            </v-col>
          </v-row>
          <div class="d-flex justify-center">
            <v-btn
              @click="controller.mostraValor()"
              size="large"
              :loading="controller.loading.value"
              text="Buscar"
              color="warning"
            >
            </v-btn>
          </div>
        </v-form>
        <v-row class="d-flex justify-center mt-8">
            <v-text-title> Última Cotação: {{ controller.valor1.value}} - - {{ controller.valor2.value }}</v-text-title>
        </v-row>
      </v-col>
      <v-row>
        <v-col cols="12">
          <mostra-valores :controller="controller" />
        </v-col>
      </v-row>
    </v-row>
  </v-container>
</template>

<script setup>

import MostraValores from "./mostraValores.vue";

const { controller } = defineProps({
  controller: {
    type: Object,
    required: true,
  },
});
</script>

<style></style>
