const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');

searchButton.addEventListener('click', async (e) => {
    e.preventDefault();
    const searchValue = searchInput.value.trim();

    if (searchValue === '') {
        alert('Por favor, insira um termo de pesquisa.');
        return;
    }

    const defaultUrl = 'https://github.com/elidianaandrade/dio-lab-open-source/tree/main/community';
    const profileUrl = `${defaultUrl}/${encodeURIComponent(searchValue)}.md`;

    try {
        const response = await fetch(profileUrl, { method: 'HEAD' });

        if (response.ok) {
            window.open(profileUrl, '_blank');
        } else if (response.status === 404) {
            alert(`O perfil para "${searchValue}" não foi encontrado. Redirecionando para a pasta da comunidade.`);
            window.open(defaultUrl, '_blank');
        } else {
            alert('Ocorreu um erro ao verificar o perfil. Tentando abrir o link direto.');
            window.open(profileUrl, '_blank');
        }
    } catch (error) {
        console.error('Erro de rede ou ao verificar o perfil:', error);
        alert('Problema de conexão ou erro ao verificar o perfil. Tentando abrir o link direto.');
        window.open(profileUrl, '_blank');
    }
});