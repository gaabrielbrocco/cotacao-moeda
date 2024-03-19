import Cambio from "../domain/model/cambio";
import { ref } from "vue";

const cambioController = (buscaCambioUseCase) => () => {
    const loading = ref(false);
    const modelCambio = ref(new Cambio({}));
    const textoCambio1 = ref("");
    const textoCambio2 = ref("");

    const mostraValor = async () => {
        try {
            loading.value = true;
            modelCambio.value = await buscaCambioUseCase(textoCambio1.value, textoCambio2.value);
            textoCambio1.value = null
            textoCambio2.value = null
        } catch (error) {
            console.log(error);
        } finally {
            loading.value = false;
        }
    }

    return {
        loading,
        modelCambio,
        textoCambio1,
        textoCambio2,
        mostraValor,
    };
};

export default cambioController;