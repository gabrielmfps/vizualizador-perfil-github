const profileResults = document.querySelector('.profile-results');

export function showLoading() {
    profileResults.innerHTML = `<p class="loading">Carregando...</p>`;
}

export function showUserProfile(userData) {
    profileResults.innerHTML = `
        <div class="profile-card">
            <img src="${userData.avatar_url}" alt="Avatar de ${userData.name}" class="profile-avatar">
            <div class="profile-info">
                <h2>${userData.name}</h2>
                <p>${userData.bio || 'Nenhuma bio cadastrada 😔.'}</p>
            </div>
        </div>
        <div class="profile-counters">
            <div class="fallowers">
                <h4>👥 Seguidores</h4>
                <span>${userData.followers}</span>
            </div>
            <div class="fallowing">
                <h4>👥 Seguindo</h4>
                <span>${userData.following}</span>
            </div>
        </div>
    `;
}

export function showError(message) {
    alert(message);
}

export function showInputError() {
    alert('Por favor, insira um nome de usuário do GitHub.');
}