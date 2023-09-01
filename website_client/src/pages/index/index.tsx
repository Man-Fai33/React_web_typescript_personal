import { Box } from '@mui/material'
import React from 'react'

import Button from '../../component/button/button'
import { useNavigate } from 'react-router-dom'
export default function Index() {
     const navigator = useNavigate()
     return (<>
          <Box className='  w-full	flex min-h-full ' sx={{
               height: '100vh',
               backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
               backgroundRepeat: 'no-repeat',
               backgroundColor: (t) =>
                    t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
               backgroundSize: 'cover',
               backgroundPosition: 'center',
          }}>
               <Box className="w-full h-full opacity-50 " sx={{ backgroundColor: 'white' }}>
                    <Box className="flex absolute top-0 right-0">
                         <Button onClick={(e) => { navigator('/signin') }}>login</Button>
                         <Button onClick={(e) => { navigator('/signup') }}>signup</Button>
                    </Box>
                    <Box></Box>
               </Box>
          </Box>
     </>)
}