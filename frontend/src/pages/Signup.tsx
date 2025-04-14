import React from "react";
import { Container, TextField, Button, Typography, Box, Paper, InputAdornment, MenuItem } from "@mui/material";
import { Email, Lock, Person } from "@mui/icons-material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
// import { setCredentials, setLoading } from "../redux/slices/authSlice"; 
// import { register } from "../services/auth/api";
// import Navbar from "../components/Navbar";

const SignUp: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Validation Schema
  const validationSchema = Yup.object({
    username: Yup.string().min(3, "Username must be at least 3 characters").required("Username is required"),
    email: Yup.string().email("Invalid email format").required("Email is required"),
    password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
    role: Yup.string().oneOf(["student", "instructor"], "Invalid role").required("Role is required"),
  });

  // Formik Hook
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      role: "student",
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        // const response = await register(values);
        // if (response.status === 201) {
        //   //dispatch(setCredentials(response.data));
        //   toast.success("Registration successful!");
        //   navigate("/login");
        // } else {
        //   toast.error("Error in user registration");
        // }
      } catch (error) {
        console.error("Registration failed", error);
      } finally {
       // dispatch(setLoading(false));
      }
    },
  });

  return (
    <>
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: 'linear-gradient(135deg, #1f1c2c, #928DAB)',
          color: "#fff",
          textAlign: "center",
          padding: "5rem 2rem",
        }}
      >
        {/* Hero Section */}
        <motion.div initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <Typography variant="h3" fontWeight="bold" gutterBottom sx={{ color: "#FFD700" }}>
            Join NeoLearn 🚀
          </Typography>
          <Typography variant="h6" sx={{ mb: 3 }}>
            Learn, Explore, and Grow with the Best Instructors & Courses!
          </Typography>
        </motion.div>

        {/* Registration Form Container */}
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}>
          <Paper
            elevation={10}
            sx={{
              p: 5,
              borderRadius: 5,
              backdropFilter: "blur(10px)",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              color: "#fff",
              width: "400px",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              boxShadow: "0px 8px 20px rgba(0,0,0,0.3)",
            }}
          >
            <Typography variant="h4" fontWeight="bold" gutterBottom sx={{ color: "#FFD700" }}>
              Sign Up
            </Typography>

            <Box component="form" onSubmit={formik.handleSubmit} noValidate>
              {/* Username Field */}
              <TextField
                label="Username"
                fullWidth
                margin="normal"
                {...formik.getFieldProps("username")}
                error={formik.touched.username && Boolean(formik.errors.username)}
                helperText={formik.touched.username && formik.errors.username}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Person sx={{ color: "#FFD700" }} />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  input: { color: "#fff" },
                  label: { color: "#ddd", "&.Mui-focused": { color: "#FFD700" } },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: "rgba(255, 255, 255, 0.5)" },
                    "&:hover fieldset": { borderColor: "#FFD700" },
                    "&.Mui-focused fieldset": { borderColor: "#FFD700" },
                  },
                }}
              />

              {/* Email Field */}
              <TextField
                label="Email"
                fullWidth
                margin="normal"
                {...formik.getFieldProps("email")}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Email sx={{ color: "#FFD700" }} />
                    </InputAdornment>
                  ),
                }}
                sx={{ ...commonTextFieldStyles }}
              />

              {/* Password Field */}
              <TextField
                label="Password"
                type="password"
                fullWidth
                margin="normal"
                {...formik.getFieldProps("password")}
                error={formik.touched.password && Boolean(formik.errors.password)}
                helperText={formik.touched.password && formik.errors.password}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Lock sx={{ color: "#FFD700" }} />
                    </InputAdornment>
                  ),
                }}
                sx={{ ...commonTextFieldStyles }}
              />

              {/* Role Selection */}
              <TextField
                select
                label="Role"
                fullWidth
                margin="normal"
                {...formik.getFieldProps("role")}
                error={formik.touched.role && Boolean(formik.errors.role)}
                helperText={formik.touched.role && formik.errors.role}
                sx={{ ...commonTextFieldStyles }}
              >
                <MenuItem value="student">👨🏻‍🎓 Student</MenuItem>
                <MenuItem value="instructor">🧑🏻‍🏫 Instructor</MenuItem>
              </TextField>

              {/* Register Button */}
              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{
                  mt: 3,
                  background: "linear-gradient(45deg, #ff9a9e, #ff6b6b)",
                  color: "#fff",
                  fontWeight: "bold",
                  fontSize: "1.1rem",
                  boxShadow: "0px 4px 15px rgba(255, 255, 255, 0.3)",
                  "&:hover": {
                    background: "linear-gradient(45deg, #ff6b6b, #ff9a9e)",
                    boxShadow: "0px 5px 20px rgba(255, 255, 255, 0.5)",
                  },
                }}
              >
                Register 🚀
              </Button>
            </Box>
          </Paper>
        </motion.div>
      </Box>
    </>
  );
};

// Common TextField Styles
const commonTextFieldStyles = {
  input: { color: "#fff" },
  label: { color: "#ddd", "&.Mui-focused": { color: "#FFD700" } },
  "& .MuiOutlinedInput-root": {
    "& fieldset": { borderColor: "rgba(255, 255, 255, 0.5)" },
    "&:hover fieldset": { borderColor: "#FFD700" },
    "&.Mui-focused fieldset": { borderColor: "#FFD700" },
  },
};

export default SignUp;