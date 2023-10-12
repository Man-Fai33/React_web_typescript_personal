interface User {
     _id: string
     username: string
     email: string
     password: string
     gender: string
     age: number
}

class User {
     _id: string = "";
     username: string = ""
     email: string = ""
     password: string = ""
     gender: string = ""
     age: number = 0
}

export default { User }     