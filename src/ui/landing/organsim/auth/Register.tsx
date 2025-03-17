import { motion } from "framer-motion";

const Register = () => {
  return (
    <div className="flex items-center justify-center h-screen ">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-white/10 backdrop-blur-md p-8 max-w-lg w-full "
      >
        <h2 className="text-6xl font-semibold text-center mb-12">
          Create Account
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <label className="block text-sm mb-2">Username</label>
          <input type="text" className="w-full px-4 py-2 border-0 border-b-1 outline-none" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-4"
        >
          <label className="block text-sm mb-2">Email</label>
          <input
            type="email"
            className="w-full px-4 py-2 border-0 border-b-1 outline-none"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-4"
        >
          <label className="block text-sm mb-2">Password</label>
          <input
            type="password"
            className="w-full px-4 py-2 border-0 border-b-1 outline-none"
          />
        </motion.div>

        <motion.button
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full mt-6 py-2 bg-black text-white  rounded-md shadow-md hover:shadow-lg transition"
        >
          Sign Up
        </motion.button>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="mt-4 text-center text-sm"
        >
          Already have an account?{" "}
          <a href="/login" className="text-red-600 0 underline">
            Sign in
          </a>
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Register;
