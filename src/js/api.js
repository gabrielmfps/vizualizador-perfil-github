const BASE_URL = 'https://api.github.com';

export async function fetchUserProfile(userName) {
    return await fetch(`${BASE_URL}/users/${userName}`);
}