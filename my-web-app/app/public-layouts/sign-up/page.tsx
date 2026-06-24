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
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#020617] px-4">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-20 left-1/4 w-[600px] h-[600px] rounded-full opacity-20 blur-[120px]"
          style={{ background: "radial-gradient(circle, #5C75FF, transparent 70%)" }}
        />
        <div
          className="absolute bottom-20 right-1/4 w-[500px] h-[500px] rounded-full opacity-15 blur-[120px]"
          style={{ background: "radial-gradient(circle, #3E5CFB, transparent 70%)" }}
        />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-md p-8 rounded-3xl"
        style={{
          background: "rgba(15,23,42,0.6)",
          border: "1px solid rgba(255,255,255,0.08)",
          backdropFilter: "blur(12px)",
          boxShadow: "0 25px 50px rgba(0,0,0,0.3)"
        }}>

        <h2 className="text-3xl font-bold text-center mb-6" style={{ color: "#f1f5f9" }}>
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
              <User className="absolute left-3 top-3.5 text-[#94a3b8]" size={18} />
              <Field
                name="name"
                type="text"
                placeholder="Full Name"
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 text-[#f1f5f9] placeholder-[#475569] border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#3E5CFB] focus:border-transparent transition-all shadow-inner"
              />
              <ErrorMessage name="name" component="div" className="text-red-400 text-sm mt-1" />
            </div>

            {/* Email */}
            <div className="relative">
              <Mail className="absolute left-3 top-3.5 text-[#94a3b8]" size={18} />
              <Field
                name="email"
                type="email"
                placeholder="Email Address"
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 text-[#f1f5f9] placeholder-[#475569] border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#3E5CFB] focus:border-transparent transition-all shadow-inner"
              />
              <ErrorMessage name="email" component="div" className="text-red-400 text-sm mt-1" />
            </div>

            {/* Password */}
            <div className="relative">
              <Lock className="absolute left-3 top-3.5 text-[#94a3b8]" size={18} />
              <Field
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full pl-10 pr-10 py-3 rounded-xl bg-white/5 text-[#f1f5f9] placeholder-[#475569] border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#3E5CFB] focus:border-transparent transition-all shadow-inner"
              />
              <div
                className="absolute right-3 top-3.5 cursor-pointer text-[#94a3b8] hover:text-[#e2e8f0] transition-colors"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </div>
              <ErrorMessage name="password" component="div" className="text-red-400 text-sm mt-1" />
            </div>

            {/* Confirm Password */}
            <div className="relative">
              <Lock className="absolute left-3 top-3.5 text-[#94a3b8]" size={18} />
              <Field
                name="confirmPassword"
                type={showConfirm ? "text" : "password"}
                placeholder="Confirm Password"
                className="w-full pl-10 pr-10 py-3 rounded-xl bg-white/5 text-[#f1f5f9] placeholder-[#475569] border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#3E5CFB] focus:border-transparent transition-all shadow-inner"
              />
              <div
                className="absolute right-3 top-3.5 cursor-pointer text-[#94a3b8] hover:text-[#e2e8f0] transition-colors"
                onClick={() => setShowConfirm(!showConfirm)}
              >
                {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
              </div>
              <ErrorMessage name="confirmPassword" component="div" className="text-red-400 text-sm mt-1" />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl font-bold text-white transition-all transform hover:scale-[1.02] active:scale-[0.98]"
              style={{
                background: "linear-gradient(135deg, #5C75FF, #3E5CFB)",
                boxShadow: "0 0 20px rgba(62,92,251,0.3)",
              }}
            >
              Sign Up
            </button>

            <p className="text-center text-sm" style={{ color: "#94a3b8" }}>
              Already have an account?{" "}
              <Link href="/public-layouts/login" className="font-semibold transition-colors hover:text-[#5C75FF]" style={{ color: "#3E5CFB" }}>
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