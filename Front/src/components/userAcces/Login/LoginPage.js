import React ,{useEffect, useState} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import loginImage from '../../../Images And Logos/Mount10 Logo/FrontPage.jpg';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import {login as loginRdx} from '../../../features/userAccess'


const theme = createTheme();

export default function SignInSide() {
  const[user,setUser] = useState({
      username:'',
      password:''
  })
  const dispatch = useDispatch()
  const loginState = useSelector((state) => state.userAccess.value);
  const history = useHistory()

  useEffect(()=>{
    console.log(loginState);
  },[])

  const handleSubmit = (event) => {
    event.preventDefault()
  };

  const login = () =>{
    const userObj = user
   axios.post('http://localhost:8080/userAccess/login',userObj).then((resp)=>{
    console.log(resp.data);
    if(resp.data.status == 'ok'){
        return dispatch(loginRdx({
        username:userObj.username,
        key:resp.data.token
      }))
    }
    }).then(()=>{
      console.log(loginState);
    })
    
  }

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${loginImage})`,
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
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                label="username"
                onChange = {(e)=>{setUser({...user,username:e.target.value})}}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                label="Password"
                type="password"
                onChange = {(e)=>{setUser({...user,password:e.target.value})}}
              />
              
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={login}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                <Button color='inherit' variant="outlined"><Link style={{color:'black',textDecoration:'none'}} to='/register'>register</Link></Button>
                </Grid>
                <Grid item>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}