<template>
  <v-container>
    <v-row class="d-flex justify-center mt-4" cols="6" sm="7" md="6" lg="3">
      <v-col>
        <v-col>
          <v-title class="d-flex justify-center mb-3 text-h6"
            >Data/Horário da requisição</v-title
          >
          <v-text-field
            v-model="controller.modelCambio.value.create_date"
            hide-details
            readonly
          >
            <template v-slot:append>
              <v-tooltip text="buon giorno" location="bottom">
                <template v-slot:activator="{ props }">
                  <v-icon v-bind="props"> mdi-information </v-icon>
                </template>
                <span>Data e Horário da requisição.</span>
              </v-tooltip>
            </template>
          </v-text-field>
        </v-col>
        <v-col>
          <v-title class="d-flex justify-center mb-3 text-h6"
            >Maior oferta de compra (BID)</v-title
          >
          <v-text-field
            v-model="controller.modelCambio.value.bid"
            hide-details
            readonly
          >
            <template v-slot:append>
              <v-tooltip text="buon giorno" location="bottom">
                <template v-slot:activator="{ props }">
                  <v-icon v-bind="props"> mdi-information </v-icon>
                </template>
                <span>Preço mais alto que um comprador está disposto a pagar.</span>
              </v-tooltip>
            </template>
          </v-text-field>
        </v-col>
        <v-col>
          <v-title class="d-flex justify-center mb-3 text-h6"
            >Preço mínimo oferta de venda (ASK)</v-title
          >
          <v-text-field
            v-model="controller.modelCambio.value.ask"
            hide-details
            readonly
          >
            <template v-slot:append>
              <v-tooltip text="buon giorno" location="bottom">
                <template v-slot:activator="{ props }">
                  <v-icon v-bind="props"> mdi-information </v-icon>
                </template>
                <span>O preço mínimo pelo qual um vendedor está disposto a vender. </span>
              </v-tooltip>
            </template>
          </v-text-field>
        </v-col>
        <v-row class="d-flex justify-center mt-15">
          <v-col>
            <v-text-title class="d-flex justify-center mb-2"
              >Conversão sobre BID
            </v-text-title>
            <v-text-field
              variant="outlined"
              disabled
              v-model="controller.valorBid.value"
            ></v-text-field>
          </v-col>
          <v-col>
            <v-text-title class="d-flex justify-center mb-2">
              Conversão sobre ASK
            </v-text-title>
            <v-text-field
              variant="outlined"
              disabled
              v-model="controller.valorAsk.value"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row class="d-flex justify-center">
          <v-col cols="6">
            <v-text-title class="d-flex justify-center mb-2">
              Preço médio
            </v-text-title>
            <v-text-field
              variant="outlined"
              disabled
              v-model="controller.valorMedio.value"
            ></v-text-field>
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
