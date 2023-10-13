import React, { useState } from 'react'
import Sortable from '../component/list/sortable'
import ContextProvide from '../context/provider/user'



export default function TestPage(_props: any) {
     console.log(_props.user)
     return <Sortable></Sortable>
}
