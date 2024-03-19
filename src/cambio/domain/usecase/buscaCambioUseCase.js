const buscaCambioUseCase = (repository) => async (valor1,valor2) => {
    try {
      return await repository(valor1,valor2);
    } catch (error) {
      throw error;
    }
  };
  
  export default buscaCambioUseCase;
  