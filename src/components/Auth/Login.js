import React from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import {
  useAuthState,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import Loading from "../Shared/Loading";
import toast from "react-hot-toast";
const Login = () => {
  //REGEX pattern
  const EMAIL_PATTERN = /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-z]+)$/;

  const navigate = useNavigate();
  const location = useLocation();
  const [user] = useAuthState(auth);

  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);

  const [signInWithEmailAndPassword, emailUser, emailLoading, emailError] =
    useSignInWithEmailAndPassword(auth);

  googleError && console.log("error", googleError.code);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = ({ email, password }) => {
    signInWithEmailAndPassword(email, password);
  };
  emailError && console.log("Email error", emailError.customData.email);
  let from = location.state?.from?.pathname || "/";
  if (googleUser || emailUser || user) {
    navigate(from, { replace: true });
    toast.success("Login Successfully");
  }
  return (
    <div className="bg-[url('/src/asset/AuthImg/loginImg1.jpg')] bg-cover bg-no-repeat bg-center">
      <div className="flex justify-end h-screen ">
        <div className="flex flex-col w-full">
          <div className="flex flex-col justify-center px-8 pt-8 my-auto md:justify-start md:pt-0 md:px-24 lg:px-32">
            <div className="flex flex-col w-full max-w-md px-4 py-8 bg-white rounded-lg shadow-xl sm:px-6 md:px-8 lg:px-10">
              <p className="text-3xl text-center mb-2">Welcome.</p>
              <div className="self-center mb-8 text-xl font-light text-gray-600 sm:text-2xl ">
                Login To Your Account
              </div>
              <div className="flex gap-4 item-center">
                {/* Google button */}
                <button
                  onClick={() => signInWithGoogle()}
                  type="button"
                  className="py-2 px-4 flex justify-center items-center  bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                >
                  {googleLoading ? (
                    <Loading size={22} className={"mr-2"} />
                  ) : (
                    <svg
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="mr-2"
                      viewBox="0 0 1792 1792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M896 786h725q12 67 12 128 0 217-91 387.5t-259.5 266.5-386.5 96q-157 0-299-60.5t-245-163.5-163.5-245-60.5-299 60.5-299 163.5-245 245-163.5 299-60.5q300 0 515 201l-209 201q-123-119-306-119-129 0-238.5 65t-173.5 176.5-64 243.5 64 243.5 173.5 176.5 238.5 65q87 0 160-24t120-60 82-82 51.5-87 22.5-78h-436v-264z"></path>
                    </svg>
                  )}
                  Google
                </button>
              </div>
              {googleError && (
                <span className="text-sm text-red-500 ml-10 mt-2">
                  {googleError.code}
                </span>
              )}
              <div className="flex mt-7 items-center text-center">
                <hr className="border-gray-300 border-1 w-full rounded-md" />
                <label className="block font-medium text-sm text-gray-600 w-full">
                  or
                </label>
                <hr className="border-gray-300 border-1 w-full rounded-md" />
              </div>
              {/* Form to login with email and password */}
              <div className="mt-8">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="flex flex-col mb-2">
                    <div className="flex relative">
                      <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                        <svg
                          width="15"
                          height="15"
                          fill="currentColor"
                          viewBox="0 0 1792 1792"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z"></path>
                        </svg>
                      </span>

                      <input
                        type="text"
                        id="email"
                        {...register("email", {
                          required: {
                            value: true,
                            message: "Email is Required",
                          },
                          pattern: {
                            value: EMAIL_PATTERN,
                            message: "Provide a valid Email",
                          },
                        })}
                        className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                        placeholder="Your email"
                        // required
                      />
                    </div>
                    {errors.email && (
                      <span className="text-sm text-red-500 ml-10 mt-2">
                        {errors.email.message}
                      </span>
                    )}
                  </div>
                  {/* Password */}
                  <div className="flex flex-col mb-6">
                    <div className="flex relative ">
                      <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                        <svg
                          width="15"
                          height="15"
                          fill="currentColor"
                          viewBox="0 0 1792 1792"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M1376 768q40 0 68 28t28 68v576q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-576q0-40 28-68t68-28h32v-320q0-185 131.5-316.5t316.5-131.5 316.5 131.5 131.5 316.5q0 26-19 45t-45 19h-64q-26 0-45-19t-19-45q0-106-75-181t-181-75-181 75-75 181v320h736z"></path>
                        </svg>
                      </span>
                      <input
                        type="password"
                        id="pass"
                        {...register("password", {
                          required: {
                            value: true,
                            message: "Password is Required",
                          },
                        })}
                        className="rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                        placeholder="Your password"
                        // required
                      />
                    </div>
                    {errors.password && (
                      <span className="text-sm text-red-500 pl-10 pt-2 ">
                        {errors.password.message}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center mb-6 -mt-4">
                    <div className="flex ml-auto">
                      <Link
                        to="/reset-pass"
                        className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                      >
                        Forgot Password?
                      </Link>
                    </div>
                  </div>

                  <div className="flex w-full">
                    <button
                      type="submit"
                      className=" flex justify-center py-2 mt-4 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                    >
                      {emailLoading && <Loading size={22} className="pr-2" />}
                      Log in
                    </button>
                  </div>
                  {emailError && (
                    <span className="text-sm text-red-500 ml-10 mt-2">
                      {emailError.code}
                    </span>
                  )}
                </form>
              </div>
              <div className="flex items-center justify-center mt-6">
                <div className="pt-2 sm:pb-3 md:pb-12 text-center">
                  <Link
                    className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                    to="/signup"
                  >
                    <p>Don&#x27;t have an account? Sign up here.</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
