import { AxiosError } from "axios";

export const errorInterceptor = (error: AxiosError) => {
    if (error.message === 'Network Error') {
        return Promise.reject(new Error('Erro de conexão. Verifique sua conexão com a internet.'));
    }
    
    if (error.response?.status === 401) {
        localStorage.removeItem('token');
        window.location.href = '/login';
        return Promise.reject(new Error('Usuário não autenticado.'));
    }

    return Promise.reject(error);
};