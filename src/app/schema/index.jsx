import * as Yup from "yup"

export const signUpSchema=Yup.object({
    firstName:Yup
    .string()
    .trim()
    .matches(/^[A-Za-z\s]+$/, "First Name can only contain letters and spaces")
    .min(2, "First Name should contain atleast two characters")
    .max(50,"First Name cannot exceed 50 characters")
    .required("First Name is required"),
    
    lastName:Yup
    .string()
    .trim()
    .matches(/^[A-Za-z\s]+$/, "Last Name can only contain letters and spaces")
    .min(2, "Last Name should contain atleast two characters")
    .max(50,"Last Name cannot exceed 50 characters")
    .required("Last Name is required"),
    
    email:Yup
    .string()
    .trim()
    .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "Enter a valid email address"
      )
    .required("Email is requred")
    .max(50,"Email cannot exceed 50 characters"),

    password:Yup
    .string()
    .trim()
    .required("password is required")
    .min(8,"Minimum 8 characters required")
    .matches(
        /^(?=.*[0-9])(?=.*[!@#$%^&*])/,
        "Password must contain at least one number and one special character"
      ),
      
    confirmPassword:Yup
    .string()
    .trim()
    .required("password is required")
    .oneOf([Yup.ref("password"),null], "Passwords do no match")
})
