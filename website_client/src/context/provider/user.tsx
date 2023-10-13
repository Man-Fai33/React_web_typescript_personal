import { User } from "../model/user";
import React from "react";
export const _data = {
     user: User,
     system_date: new Date(),
     system_info: []
}

export default interface ContextProvide {
     user: User
     system_date: Date
     system_info: string[]
}

export const Context = React.createContext(_data)