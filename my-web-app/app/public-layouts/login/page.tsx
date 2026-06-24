"use client";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Eye, EyeOff, Mail, Lock, Loader2 } from "lucide-react";
import ROUTES from "@/app/routes";

const Login = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (values: any, { setSubmitting }: any) => {
    setIsLoading(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    let storedValue = JSON.parse(localStorage.getItem("user") || "{}");

    if (
      values.email === storedValue.email &&
      values.password === storedValue.password
    ) {
      // Store session
      localStorage.setItem("isAuthenticated", "true");
      alert("Login successful!");
      router.push(ROUTES.DASHBOARD);
    } else {
      alert("Invalid credentials");
    }

    setIsLoading(false);
    setSubmitting(false);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-[#0A0A0F] px-4 sm:px-6 lg:px-8">
      {/* Background Effects - Enhanced for larger card */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Primary gradient orb */}
        <div
          className="absolute -top-40 -right-40 w-[800px] h-[800px] rounded-full opacity-30 blur-[150px]"
          style={{
            background: "radial-gradient(circle at 30% 50%, #5C75FF, #3E5CFB 40%, transparent 70%)"
          }}
        />

        {/* Secondary gradient orb */}
        <div
          className="absolute -bottom-40 -left-40 w-[700px] h-[700px] rounded-full opacity-20 blur-[150px]"
          style={{
            background: "radial-gradient(circle at 70% 50%, #7C3AED, #5C75FF 40%, transparent 70%)"
          }}
        />

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Main Container - Increased Width */}
      <div className="relative w-full max-w-[560px]">
        {/* Logo/Brand Section - Increased spacing */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-[#3E5CFB] to-[#5C75FF] shadow-lg shadow-blue-500/20 mb-5">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h1 className="text-4xl font-bold text-white tracking-tight">
            Welcome back
          </h1>
          <p className="mt-3 text-[#94A3B8] text-base">
            Sign in to your account to continue
          </p>
        </div>

        {/* Login Card - Increased Width & Height with more padding */}
        <div className="bg-[#14141F]/80 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl p-10">
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={Yup.object({
              email: Yup.string()
                .email("Please enter a valid email address")
                .required("Email is required"),
              password: Yup.string()
                .min(6, "Password must be at least 6 characters")
                .required("Password is required"),
            })}
            onSubmit={handleLogin}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-6">
                {/* Email Field - Increased spacing */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#E2E8F0] mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-[#64748B]" />
                    </div>
                    <Field
                      id="email"
                      name="email"
                      type="email"
                      placeholder="name@company.com"
                      className="w-full pl-12 pr-4 py-3.5 bg-[#1E1E2E] text-white placeholder-[#64748B] border border-[#2A2A3E] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3E5CFB] focus:border-transparent transition-all duration-200 text-base"
                    />
                  </div>
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="mt-2 text-red-400 text-sm flex items-center gap-1"
                  />
                </div>

                {/* Password Field - Increased spacing */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label htmlFor="password" className="block text-sm font-medium text-[#E2E8F0]">
                      Password
                    </label>
                    <Link
                      href="/forgot-password"
                      className="text-sm font-medium text-[#3E5CFB] hover:text-[#5C75FF] transition-colors"
                    >
                      Forgot password?
                    </Link>
                  </div>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-[#64748B]" />
                    </div>
                    <Field
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      className="w-full pl-12 pr-14 py-3.5 bg-[#1E1E2E] text-white placeholder-[#64748B] border border-[#2A2A3E] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3E5CFB] focus:border-transparent transition-all duration-200 text-base"
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 pr-4 flex items-center"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5 text-[#64748B] hover:text-[#94A3B8] transition-colors" />
                      ) : (
                        <Eye className="h-5 w-5 text-[#64748B] hover:text-[#94A3B8] transition-colors" />
                      )}
                    </button>
                  </div>
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="mt-2 text-red-400 text-sm flex items-center gap-1"
                  />
                </div>

                {/* Submit Button - Increased size */}
                <button
                  type="submit"
                  disabled={isSubmitting || isLoading}
                  className="w-full py-4 px-4 bg-gradient-to-r from-[#3E5CFB] to-[#5C75FF] text-white font-semibold rounded-xl hover:from-[#2E4CFB] hover:to-[#4C65FF] focus:outline-none focus:ring-2 focus:ring-[#3E5CFB] focus:ring-offset-2 focus:ring-offset-[#14141F] transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed text-base relative overflow-hidden mt-2"
                >
                  {isSubmitting || isLoading ? (
                    <div className="flex items-center justify-center gap-3">
                      <Loader2 className="h-6 w-6 animate-spin" />
                      <span>Signing in...</span>
                    </div>
                  ) : (
                    "Sign In"
                  )}
                </button>

                {/* Sign Up Link - Increased spacing */}
                <div className="pt-2">
                  <p className="text-center text-base text-[#94A3B8]">
                    Don't have an account?{" "}
                    <Link
                      href="/public-layouts/sign-up"
                      className="font-semibold text-[#3E5CFB] hover:text-[#5C75FF] transition-colors"
                    >
                      Create one
                    </Link>
                  </p>
                </div>
              </Form>
            )}
          </Formik>
        </div>

        {/* Footer - Increased spacing */}
        <p className="mt-8 text-center text-sm text-[#64748B]">
          By signing in, you agree to our{" "}
          <Link href="/terms" className="text-[#94A3B8] hover:text-[#E2E8F0] transition-colors">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link href="/privacy" className="text-[#94A3B8] hover:text-[#E2E8F0] transition-colors">
            Privacy Policy
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;