import axiosInstance from "./axios";

import buscaCambioRepository from "../data/repository/buscaCambioRepository";
import buscaCambioUseCase from "../domain/usecase/buscaCambioUseCase";
import cambioController from "../controller/cambioController";

const instance = axiosInstance;

const buscaCambioRepositoryImpl = buscaCambioRepository(instance);
const buscaCambioUseCaseImpl = buscaCambioUseCase(buscaCambioRepositoryImpl);

const cambioControllerImpl = cambioController(buscaCambioUseCaseImpl);

export { cambioControllerImpl };