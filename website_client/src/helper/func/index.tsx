import { unlink } from "fs";

const FuncsHelper = {
     validateEmail(email: string) {
          const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          return emailPattern.test(email);
     },
     validatePwd(pwd: string) {
          return pwd === "" ? false : true
     },
     validateInputError(input: string) {
          return !(input === '' || input === undefined || input === null || input === '0') ? false : true
     }
}


export default { FuncsHelper }