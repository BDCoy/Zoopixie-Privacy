"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // Use useRouter from 'next/navigation' for Next.js 13
import { useSearchParams } from "next/navigation"; // To read query params from the URL
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify"; // For toast notifications
import { createClient } from "@/lib/supabase";
import Image from "next/image";

export default function UpdatePasswordPage() {
  const supabase = createClient();
  const [isTokenValid, setIsTokenValid] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [isClient, setIsClient] = useState(false); // Add state to check if it's client-side

  const router = useRouter();
  const searchParams = useSearchParams(); // This allows access to URL query params
  const access_token = searchParams.get("access_token"); // Get access token from query params
  const refresh_token = searchParams.get("refresh_token"); // Get refresh token from query params

  // Only run this effect on the client to avoid hydration issues
  useEffect(() => {
    setIsClient(true); // Set the client-side flag
    const setupSession = async () => {
      try {
        if (!access_token || !refresh_token) {
          throw new Error("Invalid or missing tokens");
        }

        const { data, error } = await supabase.auth.setSession({
          access_token,
          refresh_token,
        });

        if (error) throw error;
        if (!data.session) throw new Error("No session established");

        setIsTokenValid(true);
      } catch (error) {
        toast.error("Invalid or expired reset token");
      }
    };

    setupSession();
  }, [access_token, refresh_token, router, supabase.auth]);

  const validationSchema = Yup.object({
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
      .matches(/[a-z]/, "Password must contain at least one lowercase letter")
      .matches(/[0-9]/, "Password must contain at least one number")
      .matches(
        /[^A-Za-z0-9]/,
        "Password must contain at least one special character"
      )
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Please confirm your password"),
  });

  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validationSchema,
    onSubmit: async (values, { setSubmitting }) => {
      if (!isTokenValid) {
        toast.error("Invalid or expired reset token");
        router.push("/forgot-password");
        return;
      }

      try {
        const { error } = await supabase.auth.updateUser({
          password: values.password,
        });

        if (error) throw error;

        toast.success("Password updated successfully");
        setSubmitted(true);
        setTimeout(() => {
          router.push("/signin");
        }, 2000);
      } catch (error) {
        toast.error("Failed to reset password, please try again.");
      } finally {
        setSubmitting(false);
      }
    },
  });

  if (!isClient) {
    return null; // Render nothing until client-side
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#fff2dd] p-4">
      <div className="w-full max-w-lg bg-white rounded-[20px] p-6 shadow-lg">
        {/* Logo Section */}
        <div className="text-center mb-8">
          <Image
            src="/icon.png" // Replace with the correct path to your logo
            alt="Zoopixie Logo"
            width={128} // Adjust the size as necessary
            height={128}
            className="mx-auto mb-4"
          />
          <p className="text-4xl font-bold text-[#f8a96e]">
            <span className="text-[#F48D77]">U</span>
            <span className="text-[#F79B6C]">p</span>
            <span className="text-[#FAAA61]">d</span>
            <span className="text-[#FCBA55]">a</span>
            <span className="text-[#69C4E5]">t</span>
            <span className="text-[#F79B6C]">e </span>
            <span className="text-[#55F2A6]">P</span>
            <span className="text-[#F48D77]">a</span>
            <span className="text-[#F79B6C]">s</span>
            <span className="text-[#FAAA61]">s</span>
            <span className="text-[#FCBA55]">w</span>
            <span className="text-[#69C4E5]">o</span>
            <span className="text-[#55F2A6]">r</span>
            <span className="text-[#F48D77]">d</span>
          </p>
          <p className="text-lg mt-4 text-[#585858]">
            Enter your new password below
          </p>
        </div>

        {/* Password Input */}
        <div className="mb-6">
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              className={`w-full p-4 rounded-[50px] border text-sm text-[#585858] focus:outline-none ${
                formik.errors.password ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter your password..."
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <button
              type="button"
              className="absolute right-4 top-1/2 transform -translate-y-1/2"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          {formik.touched.password && formik.errors.password && (
            <p className="text-xs text-red-500 mt-4">
              {formik.errors.password}
            </p>
          )}
        </div>

        {/* Confirm Password Input */}
        <div className="mb-6">
          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              className={`w-full p-4 rounded-[50px] border text-sm text-[#585858] focus:outline-none ${
                formik.errors.confirmPassword
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
              placeholder="Confirm your password..."
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <button
              type="button"
              className="absolute right-4 top-1/2 transform -translate-y-1/2"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? "Hide" : "Show"}
            </button>
          </div>
          {formik.touched.confirmPassword && formik.errors.confirmPassword && (
            <p className="text-xs text-red-500 mt-4">
              {formik.errors.confirmPassword}
            </p>
          )}
        </div>

        {/* Password Guidelines */}
        <p className="text-xs text-left text-[#898888] mb-6">
          Password must be at least 8 characters long. <br />
          Password must contain at least one uppercase. <br />
          Password must contain at least one number or special character.
        </p>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            className="w-full px-10 py-2 rounded-[100px] bg-gradient-to-r from-[#55b7fa] to-[#55f2a6] text-white text-lg"
            onClick={() => formik.handleSubmit()}
            disabled={formik.isSubmitting || submitted}
          >
            <p className="pt-2"> Update Password</p>
          </button>
        </div>
      </div>
    </div>
  );
}
