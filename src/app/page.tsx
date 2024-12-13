'use client';
import React from "react"; 
import { useFormik } from "formik";
import { signUpSchema } from "./schema";
import { useRouter } from "next/navigation";

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const initialValues: FormValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export default function Signup() {
  const router = useRouter();

  const {values,errors,touched,handleChange,handleSubmit,} = useFormik<FormValues>({
    initialValues,
    validationSchema: signUpSchema,
    onSubmit: (values) => {
      console.log(values);
      alert("Signup successful");
      router.push("pages/profile");
    },
  });
 
  
  return (
<>
    
    <div className="bg-primBg min-h-screen flex justify-center items-center p-6 dark:bg-slate-950 ">
     
      <div className="bg-formBg w-full max-w-lg p-8 rounded-3xl shadow-2xl dark:bg-dark-formBg ">
        
        <h2 className="text-lg text-center font-semibold text-primary mb-1  ">Create New Account</h2>
        <h1 className="text-center text-gray-500 text-sm mt-0 pt-0 mb-8">Get your free BAV-IT account now </h1>
        <form onSubmit={handleSubmit}>
          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            {/* first name */}
            <div className="relative">
            <input
                id="firstName"
                type="name"
                name="firstName"
                placeholder="First Name"
                value={values.firstName}
                onChange={handleChange}
                className={`peer w-full p-3 
                  ${
                    errors.firstName ? "border-red-500 " : "border-gray-200"
                  } rounded-sm border
                 focus:outline-none focus:ring-1 focus:ring-primary focus:border-none placeholder-transparent
                bg-transparent dark:text-white`}
                
              />
              <label 
                 htmlFor="firstName" 
                 className={`absolute -top-2.5 px-1
                  ${errors.firstName?
                    "text-red-500":"text-gray-500"

                  }
                  left-2 text-sm bg-formBg dark:bg-dark-formBg transition-all duration-200 text-gray-500 peer-focus:text-primary  peer-placeholder-shown:bg-transparent
                 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-lg peer-placeholder-shown:top-2.5
                 peer-focus:-top-2.5
                 peer-focus:text-sm
                 transition-all duration-200
                 peer-focus:bg-formBg dark:peer-focus:bg-dark-formBg
                 `}
              >
                First Name
              </label>
               {errors.firstName && touched.firstName? <div className="text-xs text-red-500"><p className=" ">{errors.firstName}</p></div>:null}
             
              
            </div>
            
           
           { /*last name*/}
            <div className="relative">
              <input
                id="lastName"
                type="name"
                name="lastName"
                value={values.lastName}
                onChange={handleChange}
                className={`peer w-full p-3 ${
                  errors.lastName ? "border-red-500 " : "border-gray-200"
                } rounded-sm border  focus:outline-none focus:ring-1 focus:ring-primary focus:border-none placeholder-transparent
                bg-transparent dark:text-white`}
                placeholder="Last name"
              />
              <label 
                 htmlFor="lastName" 
                 className={`absolute ${errors.lastName?
                  "text-red-500":"text-gray-500"

                }  -top-2.5 bg-formBg dark:bg-dark-formBg px-1 left-2 text-sm transition-all duration-200 text-gray-500 peer-focus:text-primary  peer-placeholder-shown:bg-transparent
                 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-lg peer-placeholder-shown:top-2.5
                 peer-focus:-top-2.5
                 peer-focus:text-sm
                 transition-all duration-200
                 peer-focus:bg-formBg dark:peer-focus:bg-dark-formBg
                 `}
              >
                Last Name
              </label>
              {errors.lastName && touched.lastName? <div className="text-xs text-red-500"><p>{errors.lastName}</p></div>:null}
            </div>
          </div>
{/* email */}
          <div className=" relative mb-4">
            <input
                id="email"
                type="text"
                name="email"
                value={values.email}
                onChange={handleChange}
                className={`peer ${
                  errors.email ? "border-red-500 " : "border-gray-200"
                } w-full  p-3 rounded-sm border  focus:outline-none focus:ring-1 focus:ring-primary focus:border-none placeholder-transparent
                bg-transparent dark:text-white`}
                placeholder="Email Address"
              />
              <label 
                 htmlFor="email" 
                 className={`absolute ${errors.email?
                  "text-red-500":"text-gray-500"
                } -top-2.5 bg-formBg dark:bg-dark-formBg px-1 left-2 text-sm transition-all duration-200 text-gray-500 peer-focus:text-primary  peer-placeholder-shown:bg-transparent
                 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-lg peer-placeholder-shown:top-2.5
                 peer-focus:-top-2.5
                 peer-focus:text-sm
                 transition-all duration-200
                 peer-focus:bg-formBg dark:peer-focus:bg-dark-formBg
                 `}
              >
                Email Address
              </label>
              {errors.email && touched.email? <div className="text-xs text-red-500"><p>{errors.email}</p></div>:null}
          </div>
          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            {/* Password */}
            <div className="relative"> 
            <input
                id="password"
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
                className={`peer ${
                  errors.password ? "border-red-500 " : "border-gray-200"
                } w-full p-3 rounded-sm border  focus:outline-none focus:ring-1 focus:ring-primary  focus:border-none placeholder-transparent
                bg-transparent dark:text-white`}
                placeholder="Password"
              />
              <label 
                 htmlFor="password" 
                 className={`absolute ${errors.password?
                  "text-red-500":"text-gray-500"
                } -top-2.5 bg-formBg dark:bg-dark-formBg px-1 left-2 text-sm transition-all duration-200 text-gray-500 peer-focus:text-primary   peer-placeholder-shown:bg-transparent
                 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-lg peer-placeholder-shown:top-2.5
                 peer-focus:-top-2.5
                 peer-focus:text-sm
                 transition-all duration-200
                 peer-focus:bg-formBg dark:peer-focus:bg-dark-formBg
                 `}
              >
                Password
              </label>
              {errors.password && touched.password? <div className="text-xs text-red-500"><p>{errors.password}</p></div>:null}
            </div>
            {/* confirmPassword */}
            <div className="relative">
            <input
                id="confirmPassword"
                type="password"
                name="confirmPassword"
                value={values.confirmPassword}
                onChange={handleChange}
                className={`peer ${
                  errors.confirmPassword ? "border-red-500 " : "border-gray-200"
                } w-full p-3 rounded-sm border  focus:outline-none focus:ring-1 focus:ring-primary  focus:border-none placeholder-transparent bg-transparent dark:text-white`}
                placeholder=".."
              />
              <label 
                 htmlFor="confirmPassword" 
                 className={`absolute ${errors.confirmPassword?
                  "text-red-500":"text-gray-500"
                } -top-2.5 bg-formBg dark:bg-dark-formBg px-1 left-2 text-sm transition-all duration-200 text-gray-500 peer-focus:text-primary   peer-placeholder-shown:bg-transparent
                 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-lg peer-placeholder-shown:top-2.5
                 peer-focus:-top-2.5
                 peer-focus:text-sm
                 transition-all duration-200
                 peer-focus:bg-formBg dark:peer-focus:bg-dark-formBg
                 `}
              >
                Confirm Password
              </label>
              {errors.confirmPassword && touched.confirmPassword? <div className="text-xs text-red-500"><p>{errors.confirmPassword}</p></div>:null}
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-btnbg text-white font-bold p-3 rounded-lg hover:bg-teal-800 focus:outline-none focus:ring-4 focus:ring-rose-400 transition duration-300"
          >
            Sign Up
          </button>
        </form>
      </div>
      
    </div>
    </>
  );
};
