import genLetters from "./genLetters";
import genNumbers from "./genNumbers";
import genSymbols from './genSymbols';

export default class GenPassword {
    constructor(lengthPassword, addNumbers, addUpperCaseLetters, addLowerCaseLetters, addSymbols) {
        this.lengthPassword = lengthPassword;
        this.addNumbers = addNumbers;
        this.addUpperCaseLetters = addUpperCaseLetters;
        this.addLowerCaseLetters = addLowerCaseLetters;
        this.addSymbols = addSymbols;
    }

    generatePassword() {
        let password = '';

        for (let i = password.length; i < this.lengthPassword;) {
            if (this.addNumbers && i < this.lengthPassword) {
                password += String(genNumbers());
                i++;
            };
            if (this.addUpperCaseLetters && i < this.lengthPassword) {
                password += String(genLetters().toUpperCase());
                i++;
            };
            if (this.addLowerCaseLetters && i < this.lengthPassword) {
                password += String(genLetters());
                i++;
            }
            if (this.addSymbols && i < this.lengthPassword) {
                password += String(genSymbols());
                i++;
            }
        }

        return password;
    }
}
