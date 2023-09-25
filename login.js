// Função para criar e adicionar os elementos HTML dinamicamente
function setupLoginForm() {
    // Crie os elementos HTML necessários
    const passwordInput = document.createElement('input');
    const passwordIcon = document.createElement('i');
    const togglePasswordButton = document.createElement('button');

    // Configurar os atributos e classes dos elementos
    passwordInput.setAttribute('type', 'password');
    passwordInput.setAttribute('placeholder', 'Senha');
    passwordIcon.className = 'fa fa-eye';
    togglePasswordButton.textContent = 'Mostrar Senha';

    // Adicione os elementos ao DOM
    const form = document.querySelector('form');
    form.appendChild(passwordInput);
    form.appendChild(togglePasswordButton);
    passwordInput.insertAdjacentElement('afterend', passwordIcon);

    // Adicionar evento para alternar a visibilidade da senha
    togglePasswordButton.addEventListener('click', () => {
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            passwordIcon.className = 'fa fa-eye-slash';
            togglePasswordButton.textContent = 'Ocultar Senha';
        } else {
            passwordInput.type = 'password';
            passwordIcon.className = 'fa fa-eye';
            togglePasswordButton.textContent = 'Mostrar Senha';
        }
    });

    // Adicionar evento de validação do formulário
    form.addEventListener('submit', (event) => {
        const emailInput = document.querySelector('input[type="email"]');
        const passwordInput = document.querySelector('input[type="password"]');

        if (emailInput.value === '' || passwordInput.value === '') {
            alert('Por favor, preencha todos os campos.');
            event.preventDefault(); // Impede o envio do formulário se a validação falhar
        }
    });
}

// Chame a função para configurar o formulário
setupLoginForm();
