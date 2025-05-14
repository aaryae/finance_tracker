import video from "@assets/file.mp4";
import { Formtype } from "@type/form.type";
import axios, { AxiosError } from "axios";
import { Eye, EyeClosed } from "lucide-react"; // 👁️ icons
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";

// Yup schema
const registerSchema = yup.object({
  firstname: yup.string().required("First name is required"),
  lastname: yup.string().required("Last name is required"),
  email: yup.string().required("Email is required").email("Invalid email format"),
  password: yup.string().required("Password is required").min(6, "Must be at least 6 characters"),
});

const Register = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false); // 👁️ toggle

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<Formtype>();

  const onSubmit: SubmitHandler<Formtype> = async (data) => {
    try {
      await registerSchema.validate(data, { abortEarly: false });
      await axios.post("http://localhost:9090/api/user/auth/sign-up", data);
      alert("Registration successful! Please check your Gmail and verify your account before logging in.");
      reset();
      navigate("/login");
    } catch (err) {
      if (err instanceof yup.ValidationError) {
        err.inner.forEach((validationError) => {
          if (validationError.path) {
            setError(validationError.path as keyof Formtype, {
              type: "manual",
              message: validationError.message,
            });
          }
        });
        return;
      }

      const axiosError = err as AxiosError<{ message: string }>;
      alert(axiosError.response?.data?.message || "Registration failed. Please try again.");
    }
  };

  return (
    <div className="relative w-full h-fit ">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-[50%] left-[50%] w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 z-[-1] opacity-60"
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <h1 className="uppercase text-6xl text-white py-10 text-center">
        <span className="text-5xl">Create your</span> <br /> Finance tracker,
      </h1>

      <div className="relative z-10 flex flex-col items-center mt-12">
        <div className="w-full max-w-md mx-4">
          <h2 className="uppercase text-4xl font-semibold text-white mb-6 text-center">
            Register
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-6">
            {/* First Name */}
            <div className="flex flex-col space-y-2">
              <label htmlFor="firstname" className="text-white text-sm font-medium">
                First Name <span className="text-red-600">*</span>
              </label>
              <input
                {...register("firstname")}
                type="text"
                id="firstname"
                className="px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white/80"
              />
              {errors.firstname && (
                <p className="text-red-400 text-xs">{errors.firstname.message}</p>
              )}
            </div>

            {/* Last Name */}
            <div className="flex flex-col space-y-2">
              <label htmlFor="lastname" className="text-white text-sm font-medium">
                Last Name <span className="text-red-600">*</span>
              </label>
              <input
                {...register("lastname")}
                type="text"
                id="lastname"
                className="px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white/80"
              />
              {errors.lastname && (
                <p className="text-red-400 text-xs">{errors.lastname.message}</p>
              )}
            </div>

            {/* Email */}
            <div className="flex flex-col space-y-2">
              <label htmlFor="email" className="text-white text-sm font-medium">
                Email <span className="text-red-600">*</span>
              </label>
              <input
                {...register("email")}
                type="email"
                id="email"
                className="px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white/80"
              />
              {errors.email && (
                <p className="text-red-400 text-xs">{errors.email.message}</p>
              )}
            </div>

            {/* Password with toggle */}
            <div className="flex flex-col space-y-2">
              <label htmlFor="password" className="text-white text-sm font-medium">
                Password <span className="text-red-600">*</span>
              </label>
              <div className="relative">
                <input
                  {...register("password")}
                  type={showPassword ? "text" : "password"}
                  id="password"
                  className="px-4 py-2 pr-10 w-full rounded-lg bg-white/20 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white/80"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white"
                >
                  {showPassword ? <EyeClosed /> : <Eye />}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-400 text-xs">{errors.password.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="bg-white text-black font-semibold py-2 rounded-lg hover:bg-gray-200 transition-all duration-300"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Signing Up..." : "Sign Up"}
            </button>
          </form>

          <p className="text-sm text-white mt-4 text-center">
            Already have an account?{" "}
            <Link to="/login" className="underline cursor-pointer">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
