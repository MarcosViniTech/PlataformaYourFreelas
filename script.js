const formulario = document.querySelector('form');

if (formulario) {
    formulario.addEventListener('submit', (event) => {
        event.preventDefault();

        const emailInput = formulario.querySelector('input[type="email"]');
        const senhaInput = formulario.querySelector('input[type="password"]');

        const email = emailInput ? emailInput.value.trim() : '';
        const senha = senhaInput ? senhaInput.value.trim() : '';

        if (email === '' || senha === '') {
            alert('Por favor, preencha o e-mail e a senha!');
            return;
        }

        // 1. Mostra a mensagem
        alert(`Login capturado com sucesso!\nSeja bem-vindo, ${email}`);

        // 2. Redireciona logo em seguida para a inicial.html
        window.location.href = 'inicial.html';
    });
}