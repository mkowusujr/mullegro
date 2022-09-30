import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";
import { Observable } from "rxjs";
import { AuthStateService } from "../auth/auth-state.service";
import { User } from "../interfaces/user";

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

    static currentPasswordMatches(currentUser: User | undefined): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            const currentPassword = currentUser?.password;
            const retypedPassword = control.value;
            const doPasswordsMatch = currentPassword !== "" && currentPassword === retypedPassword;
            console.log(currentPassword);
            console.log(retypedPassword);
            console.log(doPasswordsMatch);
    
            return doPasswordsMatch? null: {doPasswordsMatch:doPasswordsMatch};
        }
    }
}