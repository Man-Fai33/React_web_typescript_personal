const ApiHelper = {
     validateEmail(email: string) {
          const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          return emailPattern.test(email);
     }
     ,

}


export default { ApiHelper }