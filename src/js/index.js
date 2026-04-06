import { fetchUserProfile } from './api.js';
import { showLoading, showUserProfile, showInputError } from './ui.js';

const btnSearch = document.getElementById('btn-search');
const inputSearch = document.getElementById('input-search');

btnSearch.addEventListener('click', async () => {
    const userName = inputSearch.value;

    if (userName) {
        showLoading();

        try {
            const response = await fetchUserProfile(userName);

            if (!response.ok) {
                alert('Usuário não encontrado!');
                return;
            }
            const userData = await response.json();

            showUserProfile(userData);
            console.log(userData);
        } catch (error) {
            console.error('Erro ao buscar perfil do usuário:', error);
            alert('Ocorreu um erro ao buscar o perfil do usuário. Por favor, tente novamente mais tarde.');
        }
    } else {
        showInputError();
    }
});