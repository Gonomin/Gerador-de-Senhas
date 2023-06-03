import GenPassword from './modules/genPassword';
import './assets/css/style.css';


document.querySelector('#genPassword').addEventListener('click', () => {
    const lengthPass = document.getElementById('lengthPass').value;
    const addNumbers = document.getElementById('addNumbers').checked;
    const addUpperCaseLetters = document.getElementById('addUpperCaseLetters').checked;
    const addLowerCaseLetters = document.getElementById('addLowerCaseLetters').checked;
    const addSymbols = document.getElementById('addSymbols').checked;
    const showPassword = document.getElementById('showPassword');

    const gp1 = new GenPassword(
        lengthPass,
        addNumbers,
        addUpperCaseLetters,
        addLowerCaseLetters,
        addSymbols
    );

    if (lengthPass === '' || lengthPass < 0 || lengthPass > 30) return alert('[ERRO] Insira um valor maior que 0 e menor que 30 caracteres [ERRO]');

    if (!addNumbers && !addUpperCaseLetters && !addLowerCaseLetters && !addSymbols)
        return alert('[ERRO] É necessário adicionar pelo menos alguma das opções abaixo para gerar a senha [ERRO]');

    return showPassword.innerText = gp1.generatePassword();
});