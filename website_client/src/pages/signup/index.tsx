import * as React from 'react';

import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { Link } from 'react-router-dom';
import User from '../../context/model/user';
import { FormControl, FormControlLabel, FormLabel, InputLabel, MenuItem, Radio, RadioGroup, Select } from '@mui/material';
import func from '../../helper/func';
import { ApiHelper } from '../../helper/api/apiHelper';
import { errInfo } from '../../context/objectOT';
const defaultTheme = createTheme();

export default function SignUp() {
     const [user] = React.useState(new User.User())
     // const getLogin = (callback: (r: az))
     const [errorDipaly] = React.useState(new errInfo)
     const [formstatus, setFormStatus] = React.useState<number>(0)
     const ageList = () => {
          const option = []
          for (var i = 18; i <= 100; i++) {
               option.push(<MenuItem value={i}>{i}</MenuItem>)
          }
          return option
     }

     const handleCreate = () => {
          let error: Boolean = false
          try {


               errorDipaly.email = func.FuncsHelper.validateInputError(user.email)
               errorDipaly.pwd = func.FuncsHelper.validateInputError(user.password)
               errorDipaly.age = func.FuncsHelper.validateInputError(user.age.toString())
               errorDipaly.name = func.FuncsHelper.validateInputError(user.username)

               setFormStatus(new Date().getTime())
               errorDipaly.email || errorDipaly.pwd || errorDipaly.age || errorDipaly.name || errorDipaly.gender ? error = true : error = false

               if (!error) {
                    ApiHelper.AsyncCreateUser(user).then((res) => {
                         if (res.error) {
                              alert(res.message)
                         } else {
                              alert(res.message)
                         }
                    })
               }
          } catch (error) {
               console.log(error)
          }

     }
     return (
          <>
               <ThemeProvider theme={defaultTheme}>
                    <Grid container component="main" sx={{ height: '100vh' }}>
                         <CssBaseline />
                         <Grid
                              item
                              xs={false}
                              sm={4}
                              md={7}
                              sx={{
                                   backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
                                   backgroundRepeat: 'no-repeat',
                                   backgroundColor: (t) =>
                                        t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                                   backgroundSize: 'cover',
                                   backgroundPosition: 'center',
                              }}
                         />
                         <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                              <Box
                                   sx={{
                                        my: 8,
                                        mx: 4,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',

                                   }}
                              >
                                   <Box sx={{
                                        height: '30vh',
                                        width: '40vh',
                                        m: 1,
                                        alignItems: 'center',
                                        backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
                                        backgroundRepeat: 'no-repeat',
                                        backgroundColor: (t) =>
                                             t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                   }}>

                                   </Box>

                                   <Typography component="h1" variant="h5">
                                        Sign in
                                   </Typography>
                                   <Box component="form" noValidate sx={{ mt: 1, justifyItems: 'center' }}>
                                        <TextField
                                             margin="normal"
                                             required
                                             fullWidth
                                             id="email"
                                             label="Email Address"
                                             name="email"
                                             autoComplete="email"
                                             error={errorDipaly.email}
                                             onChange={(e) => { user.email = e.target.value }}
                                        />
                                        <TextField
                                             margin="normal"
                                             required
                                             fullWidth
                                             id="name"
                                             label="Name"
                                             name="name"
                                             autoComplete="name"
                                             error={errorDipaly.name}

                                             onChange={(e) => { user.username = e.target.value }}
                                        />
                                        <TextField
                                             margin="normal"
                                             required
                                             fullWidth
                                             name="password"
                                             label="Password"
                                             type="password"
                                             id="password"
                                             error={errorDipaly.pwd}
                                             autoComplete="current-password"
                                             onChange={(e) => { user.password = e.target.value }}
                                        />

                                        <FormControl fullWidth error={errorDipaly.age} >
                                             <InputLabel id="demo-simple-select-label">Age</InputLabel>
                                             <Select
                                                  labelId="demo-simple-select-label"
                                                  id="demo-simple-select"
                                                  label="Age"
                                                  onChange={(e) => { user.age = Number(e.target.value) }}
                                             >
                                                  {ageList()}
                                             </Select>
                                        </FormControl>

                                        <Button
                                             onClick={handleCreate}
                                             fullWidth
                                             variant="contained"
                                             sx={{ mt: 3, mb: 2, }}
                                        >
                                             Sign In
                                        </Button>
                                        <Grid container>
                                             <Grid item xs>

                                             </Grid>
                                             <Grid item >
                                                  <Link to="/signin">
                                                       Sign In
                                                  </Link>
                                             </Grid>
                                        </Grid>

                                   </Box>
                              </Box>
                         </Grid>
                    </Grid>
               </ThemeProvider>
          </>
     )
}