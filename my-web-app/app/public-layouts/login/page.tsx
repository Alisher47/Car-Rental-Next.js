"use client";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import ROUTES from "@/app/routes";

const Login = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (values: any) => {
    let storedValue = JSON.parse(localStorage.getItem("user") || "{}");

    if (
      values.email === storedValue.email &&
      values.password === storedValue.password
    ) {
      alert("Login successful!");
      router.push(ROUTES.DASHBOARD);
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#3563E9] via-[#5A7CF3] to-[#1E3A8A] px-4">
      <div className="w-full max-w-md bg-white/20 backdrop-blur-xl border border-white/30 shadow-2xl rounded-3xl p-8">
        
        <h2 className="text-3xl font-bold text-white text-center mb-6">
          Welcome Back 👋
        </h2>

        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={Yup.object({
            email: Yup.string().email("Invalid email").required("Required"),
            password: Yup.string().required("Required"),
          })}
          onSubmit={handleLogin}
        >
          <Form className="space-y-5">
            
            {/* Email */}
            <div className="relative">
              <Mail className="absolute left-3 top-3.5 text-white/70" size={18} />
              <Field
                name="email"
                type="email"
                placeholder="Enter your email"
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/30 text-white placeholder-white/70 border border-white/40 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-200 text-sm mt-1"
              />
            </div>

            {/* Password */}
            <div className="relative">
              <Lock className="absolute left-3 top-3.5 text-white/70" size={18} />
              <Field
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="w-full pl-10 pr-10 py-3 rounded-xl bg-white/30 text-white placeholder-white/70 border border-white/40 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <div
                className="absolute right-3 top-3.5 cursor-pointer text-white/70"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </div>

              <ErrorMessage
                name="password"
                component="div"
                className="text-red-200 text-sm mt-1"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-white text-[#3563E9] font-semibold hover:bg-gray-100 transition duration-300 shadow-lg"
            >
              Login
            </button>

            <p className="text-center text-white text-sm">
              Don’t have an account?{" "}
              <Link href="/public-layouts/sign-up" className="underline font-medium">
                Sign Up
              </Link>
            </p>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Login;