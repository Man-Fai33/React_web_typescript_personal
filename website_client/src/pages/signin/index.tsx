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
import { LoginData, errInfo } from '../../context/objectOT'
import func from '../../helper/func'
import { Link } from 'react-router-dom';
import { ApiHelper } from '../../helper/api/apiHelper';

const defaultTheme = createTheme();

export default function SignIn() {

     const [login] = React.useState(new LoginData())
     const [pageStatus, setPageStatus] = React.useState(Number)
     const [errdisplay] = React.useState(new errInfo())
     // React.useEffect(() => {
     //      let active = true


     //      if (active) {
     //           return
     //      }
     // }, [])
     const handleSubmit = async () => {
          // errdisplay.email = func.FuncsHelper.validateEmail(login.email) ? false : true
          errdisplay.pwd = func.FuncsHelper.validatePwd(login.pwd) ? false : true

          try {
               await ApiHelper.AsyncValidateUser(login.email, login.pwd).then((e) => {
                    alert(e.message)
               }
               )

          } catch (error) {

          }
          setPageStatus(new Date().getTime())

     };
     return (
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
                                        autoFocus
                                        error={errdisplay.email}
                                        onChange={(e) => { login.email = e.target.value }}
                                   />
                                   <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        name="password"
                                        label="Password"
                                        type="password"
                                        id="password"
                                        autoComplete="current-password"
                                        onChange={(e) => { login.pwd = e.target.value }}
                                        error={errdisplay.pwd}
                                   />

                                   <Button
                                        onClick={handleSubmit}
                                        fullWidth
                                        variant="contained"
                                        sx={{ mt: 3, mb: 2, }}
                                   >
                                        Sign In
                                   </Button>
                                   <Grid container>
                                        <Grid item xs>

                                        </Grid>
                                        <Grid item>
                                             <Link to="/signup" >
                                                  Sign Up
                                             </Link>
                                        </Grid>
                                   </Grid>

                              </Box>
                         </Box>
                    </Grid>
               </Grid>
          </ThemeProvider>
     )
}