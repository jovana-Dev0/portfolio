document.addEventListener("DOMContentLoaded", function () {
    carregarProjetosGitHub();
});

// Função para carregar os projetos do GitHub
function carregarProjetosGitHub() {
    const username = "jovana-Dev0";
    const reposContainer = document.getElementById("repositorios");

    fetch(`https://api.github.com/users/${username}/repos`)
        .then(response => response.json())
        .then(data => {
            data.forEach(repo => {
                let repoElement = document.createElement("div");
                repoElement.classList.add("repo-item");

                repoElement.innerHTML = `
                    <h3>${repo.name}</h3>
                    <p>${repo.description || "Sem descrição disponível"}</p>
                    <a href="${repo.html_url}" target="_blank">🔗 Acessar Repositório</a>
                `;

                reposContainer.appendChild(repoElement);
            });
        })
        .catch(error => console.error("Erro ao carregar repositórios:", error));
}
