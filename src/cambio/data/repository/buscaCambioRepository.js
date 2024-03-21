import Cambio from "../../domain/model/cambio";

const buscaCambioRepository = (axios) => async (valor1,valor2) => {
    try {
        const response = await axios.get(`/json/daily/${valor1}-${valor2}`, {});
        return new Cambio(response?.data?.[0] ?? {});
    } catch (error) {
        throw error;
    }
}

export default buscaCambioRepository;