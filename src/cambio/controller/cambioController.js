import { cbbCambio } from "../const/cbbCambio";
import Cambio from "../domain/model/cambio";
import { ref } from "vue";

const cambioController = (buscaCambioUseCase) => () => {
    const comboCambio = ref(cbbCambio)
    const loading = ref(false);
    const modelCambio = ref(new Cambio({}));
    const textoCambio1 = ref("");
    const textoCambio2 = ref("");
    const valor = ref("");
    const valorBid = ref(null)
    const valorAsk = ref(null)
    const valorMedio = ref(null)
    const valor1 = ref("")
    const valor2 = ref("")


    const mostraValor = async () => {
        try {
            loading.value = true;
            modelCambio.value = await buscaCambioUseCase(textoCambio1.value, textoCambio2.value);
            valor1.value = textoCambio1.value
            valor2.value = textoCambio2.value
            textoCambio1.value = null
            textoCambio2.value = null
            converteBid()
            converteAsk()
            precoMedio()
        } catch (error) {
            console.log(error);
        } finally {
            loading.value = false;
        }
    }

    const converteBid = () => {
        const valorNumerico = modelCambio.value.bid * valor.value;
        valorBid.value = new Intl.NumberFormat( {
            style: 'currency',
            currency: 'BRL'
        }).format(valorNumerico);
        return valorBid.value;
    }

    const converteAsk = () => {
        const valorNumerico = modelCambio.value.ask * valor.value;
        valorAsk.value = new Intl.NumberFormat({
            style: 'currency',
            currency: 'BRL'
        }).format(valorNumerico);
        return valorAsk.value;
    }

    const precoMedio = () => {
        const valorNumerico = (parseFloat(valorAsk.value.replace(',', '.')) + parseFloat(valorBid.value.replace(',', '.'))) / 2;
        const valorMedioFormatado = new Intl.NumberFormat({
            style: 'currency',
            currency: 'BRL'
        }).format(valorNumerico);
        const valorSemVirgula = valorMedioFormatado.replace(',', '.');
        valorMedio.value = valorSemVirgula;
        return valorMedio.value.toFixed(3);
    }

    return {
        loading,
        modelCambio,
        textoCambio1,
        textoCambio2,
        mostraValor,
        comboCambio,
        valor,
        converteBid,
        converteAsk,
        precoMedio,
        valorBid,
        valorAsk,     
        valorMedio,   
        valor1,
        valor2,
    };
};

export default cambioController;