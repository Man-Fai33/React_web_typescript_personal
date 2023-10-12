import { Url } from "./apiurl"
import {User} from '../../context/model/user';
import func from "../func";
const Users = new  User()
const methods = {
     post: ('POST'),
     get: ('GET'),
     put: ('PUT'),
     patch: ('PATCH'),
     delete: ('DELETE'),
}
const header = {
     json: ({ Accept: 'application/json', 'Content-Type': 'application/json', })
}
const ApiHelper = {
     AsyncCreateUser: async (user: typeof Users) => {
          let response = await fetch(Url.user, {
               headers: header.json,
               method: methods.post,
               body: JSON.stringify(user)
          })
          let responseJson = await response.json();
          return responseJson;
     },
     AsyncAllUser: async () => {
          let response = await fetch(Url.user, {
               headers: header.json,
               method: methods.get,
          })
          let responseJson = await response.json()
          return responseJson;
     },
     AsyncValidateUser: async (inputuni: string, pwd: string) => {
          let response = await fetch(Url.user, {
               headers: header.json,
               method: methods.post,
               body: JSON.stringify({
                    type: "signin",
                    vainput: inputuni,
                    password: pwd
               })
          })
          let responseJson = await response.json();
          return responseJson;
     },
}

export { ApiHelper }