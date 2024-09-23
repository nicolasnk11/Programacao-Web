// Verifique se o Firebase já está inicializado no seu projeto.
import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

// Inicialize a autenticação do Firebase
const auth = getAuth();

// Função para realizar o logout
document.getElementById('logout-btn').addEventListener('click', function() {
  signOut(auth).then(() => {
    // Redireciona para a página de login após o logout
    window.location.href = 'index.html'; // Certifique-se que 'index.html' é a sua página de login
  }).catch((error) => {
    // Trate os erros aqui
    console.error('Erro ao fazer logout:', error);
  });
});
