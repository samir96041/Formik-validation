
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {useFormik} from "formik"
import { FormControl } from '@mui/base/FormControl';
import * as Yup from 'yup';


const initialValues={
  firstName:"",
  lastName:"",
  email:"",
  password:"",
  confirmPassword:""
}

const Registration = () => {

  const loginFormSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, 'First name must be at least 2 characters')
      .max(25, 'First name must be at most 25 characters')
      .required('Please enter your first name'),
    lastName: Yup.string()
      .min(2, 'Last name must be at least 2 characters')
      .max(25, 'Last name must be at most 25 characters')
      .required('Please enter your last name'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Please enter your email'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Please enter your password'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Please confirm your password'),
  });
  

const {values, errors,handleBlur,handleChange,handleSubmit, touched} = useFormik({
  initialValues:initialValues,
  validationSchema: loginFormSchema,


   onSubmit:(values)=>{
console.log(values)
   }
  })

  console.log(errors)

    const defaultTheme = createTheme();
  return (

    
   
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <FormControl onSubmit={handleSubmit}>
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
      
          <Box component="form" noValidate  sx={{ mt: 3 }}>    
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  value={values.firstname}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
             { errors.firstName && touched.firstName ? (<p style={{color:"red"}} className='for-error'>{errors.firstName}</p>):null}
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  value={values.lastName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                 { errors.lastName && touched.lastName ? (<p style={{color:"red"}} className='for-error'>{errors.lastName}</p>):null}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                 { errors.email && touched.email ? (<p style={{color:"red"}} className='for-error'>{errors.email}</p>):null}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  
                />
                 { errors.password && touched.password ? (<p style={{color:"red"}} className='for-error'>{errors.password}</p>):null}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="confirmPassword"
                  label="Confirm Password"
                  type="password"
                  id="confirmPassword"
                  autoComplete="new-password"
                  value={values.confirmPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                 { errors.confirmPassword && touched.confirmPassword ? (<p style={{color:"red"}} className='for-error'>{errors.confirmPassword}</p>):null}
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I accept the the Terms of use and Privacy Policy"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        
        </Box>
        </FormControl>
      </Container>
    </ThemeProvider>
 
  );
  
}

export default Registration