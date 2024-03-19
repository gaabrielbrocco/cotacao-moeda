<template>
  <v-container>
    <v-row class="d-flex justify-center mt-4" cols="6" sm="7" md="6" lg="3">
      <v-col>
        <v-col>
          <v-title class="d-flex justify-center mb-3 text-h6"
            >Data/Horário da requisição</v-title
          >
          <v-text-field
            append-icon="mdi-information"
            v-model="controller.modelCambio.value.create_date"
            hide-details
            disabled
          >
          </v-text-field>
        </v-col>
        <v-col>
          <v-title class="d-flex justify-center mb-3 text-h6"
            >Maior oferta de compra (BID)</v-title
          >
          <v-text-field
            append-icon="mdi-information"
            v-model="controller.modelCambio.value.high"
            hide-details
            disabled
          >
          </v-text-field>
        </v-col>
        <v-col>
          <v-title class="d-flex justify-center mb-3 text-h6"
            >Preço mínimo oferta de venda (ASK)</v-title
          >
          <v-text-field
            append-icon="mdi-information"
            v-model="controller.modelCambio.value.low"
            hide-details
            disabled
          ></v-text-field>
        </v-col>
        <v-row class="d-flex justify-center mt-15">
          <v-col>
            <v-text-title class="d-flex justify-center mb-2"
              >Conversão sobre BID
            </v-text-title>
            <v-text-field variant="outlined" disabled></v-text-field>
          </v-col>
          <v-col>
            <v-text-title class="d-flex justify-center mb-2">
              Conversão sobre ASK
            </v-text-title>
            <v-text-field variant="outlined" disabled></v-text-field>
          </v-col>
        </v-row>
        <v-row class="d-flex justify-center">
          <v-col cols="6">
            <v-text-title class="d-flex justify-center mb-2">
              Preço médio
            </v-text-title>
            <v-text-field variant="outlined" disabled></v-text-field>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const { controller } = defineProps({
  controller: {
    type: Object,
    required: true,
  },
});
</script>

<style></style>
