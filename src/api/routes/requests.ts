import { api } from '../apiConfig'

export const fetchConfiguracao = async () => {
    try {
        const response = await api.get('/config');
        return response.data;
    }
    catch (e){
        console.log("Falha em fazer a requisição", e.message)
    }
}