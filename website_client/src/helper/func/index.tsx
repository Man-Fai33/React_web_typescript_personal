const FuncsHelper = {
     validateEmail(email: string) {
          const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          return emailPattern.test(email);
     },
     validatePwd(pwd: string) {
          return pwd === "" ? false : true
     }


}


export default { FuncsHelper }