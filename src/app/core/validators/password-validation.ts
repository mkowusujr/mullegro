import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export class PasswordValidation {

    static passwordStrength(): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            const value = control.value;
            if(!value) return null;
    
            const hasUpperCase = /[A-Z]+/.test(value);
            const hasLowerCase = /[a-z]+/.test(value);
            const hasNumber = /[0-9]+/.test(value);
            const hasSymbol = /[!@#$%^&*()_+?-]+/.test(value);
            const isPasswordValid = hasUpperCase && hasLowerCase && hasNumber && hasSymbol;
    
            const passwordStrength = {
                hasUpperCase: hasUpperCase,
                hasLowerCase: hasLowerCase,
                hasNumber: hasNumber,
                hasSymbol: hasSymbol
            }
            
            return isPasswordValid ? null : passwordStrength;
        }
    }

    static newPasswordMatches(): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            const password = control.parent?.value.password;
            const retypedPassword = control.value;
            const doPasswordsMatch = password !== "" && password === retypedPassword;
    
            return doPasswordsMatch? null: {doPasswordsMatch:doPasswordsMatch};
        }
    }
}