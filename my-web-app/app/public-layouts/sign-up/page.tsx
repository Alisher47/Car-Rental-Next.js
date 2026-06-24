"use client";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import { useState } from "react";
import { Eye, EyeOff, Mail, Lock, User } from "lucide-react";
import { useRouter } from "next/navigation";
import ROUTES from "@/app/routes";

const SignUp = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleSignUp = (values: any) => {
    localStorage.setItem("user", JSON.stringify(values));
    alert("User registered successfully");
    router.push(ROUTES.LOGIN);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#3563E9] via-[#5A7CF3] to-[#1E3A8A] px-4">
      <div className="w-full max-w-md bg-white/20 backdrop-blur-xl border border-white/30 shadow-2xl rounded-3xl p-8">
        
        <h2 className="text-3xl font-bold text-white text-center mb-6">
          Create Account 🚀
        </h2>

        <Formik
          initialValues={{ name: "", email: "", password: "", confirmPassword: "" }}
          validationSchema={Yup.object({
            name: Yup.string().required("Required"),
            email: Yup.string().email("Invalid email").required("Required"),
            password: Yup.string()
              .min(6, "Minimum 6 characters")
              .required("Required"),
            confirmPassword: Yup.string()
              .oneOf([Yup.ref("password")], "Passwords must match")
              .required("Required"),
          })}
          onSubmit={handleSignUp}
        >
          <Form className="space-y-5">
            
            {/* Name */}
            <div className="relative">
              <User className="absolute left-3 top-3.5 text-white/70" size={18} />
              <Field
                name="name"
                type="text"
                placeholder="Full Name"
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/30 text-white placeholder-white/70 border border-white/40 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <ErrorMessage name="name" component="div" className="text-red-200 text-sm mt-1" />
            </div>

            {/* Email */}
            <div className="relative">
              <Mail className="absolute left-3 top-3.5 text-white/70" size={18} />
              <Field
                name="email"
                type="email"
                placeholder="Email Address"
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/30 text-white placeholder-white/70 border border-white/40 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <ErrorMessage name="email" component="div" className="text-red-200 text-sm mt-1" />
            </div>

            {/* Password */}
            <div className="relative">
              <Lock className="absolute left-3 top-3.5 text-white/70" size={18} />
              <Field
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full pl-10 pr-10 py-3 rounded-xl bg-white/30 text-white placeholder-white/70 border border-white/40 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <div
                className="absolute right-3 top-3.5 cursor-pointer text-white/70"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </div>
              <ErrorMessage name="password" component="div" className="text-red-200 text-sm mt-1" />
            </div>

            {/* Confirm Password */}
            <div className="relative">
              <Lock className="absolute left-3 top-3.5 text-white/70" size={18} />
              <Field
                name="confirmPassword"
                type={showConfirm ? "text" : "password"}
                placeholder="Confirm Password"
                className="w-full pl-10 pr-10 py-3 rounded-xl bg-white/30 text-white placeholder-white/70 border border-white/40 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <div
                className="absolute right-3 top-3.5 cursor-pointer text-white/70"
                onClick={() => setShowConfirm(!showConfirm)}
              >
                {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
              </div>
              <ErrorMessage name="confirmPassword" component="div" className="text-red-200 text-sm mt-1" />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-white text-[#3563E9] font-semibold hover:bg-gray-100 transition duration-300 shadow-lg"
            >
              Sign Up
            </button>

            <p className="text-center text-white text-sm">
              Already have an account?{" "}
              <Link href="/public-layouts/login" className="underline font-medium">
                Login
              </Link>
            </p>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default SignUp;