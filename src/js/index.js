import { fetchGithubUser, fetchGithubUserRepos } from './api.js';      
import { renderProfile } from './ui.js';

const inputSearch = document.getElementById('input-search');
const btnSearch = document.getElementById('btn-search');
const profileresults = document.querySelector('.profile-results');

btnSearch.addEventListener('click', async () => {
    const userName = inputSearch.value;
    if (!userName) {
        alert('Por favor, insira um nome de usuário do GitHub.');
        return;
    }

    profileresults.innerHTML = '<p>Carregando...</p>';

    try {
        const userData = await fetchGithubUser(userName);
        const userRepos = await fetchGithubUserRepos(userName);
        renderProfile(userData, userRepos, profileresults);
    } catch (error) {
        console.error('Erro ao buscar perfil do usuário:', error);
        alert('Usuário não encontrado. Por favor, verifique o nome de usuário e tente novamente.');
        profileresults.innerHTML = '';
    }
});