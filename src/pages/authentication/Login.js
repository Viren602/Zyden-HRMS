import React, { useState } from "react";
import TextInput from "../../components/common/TextInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Login({ value, onChange, placeholder }) {
  const [forgotPassword, setForgotPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const backPage = () => {
    navigate("/forgot");
  };

  return (
    // <div className="Login-page">
    //   <div
    //     className="p-[15px] py-[60px] h-full"
    //     style={{
    //       backgroundImage: "url('login-bg.jpg')",
    //       backgroundColor: "rgba(0, 0, 0, 0.3)", // 50% black
    //       backgroundBlendMode: "darken",
    //       backgroundSize: "cover",
    //       backgroundPosition: "center",
    //     }}
    //   >
    //     <div className="flex justify-between gap-[40px]">
    //       <div className="text-white flex flex-col justify-end gap-[10px] mx-auto w-full px-[40px]">
    //         <h1 className="text-[37px] font-[500] text-gray-200 leading-tight">Edit Smarter. Export Faster. Create Anywhere.</h1>
    //         <p className="text-[16px] text-gray-400">
    //           From quick social media clips to full-length videos, our powerful
    //           editor lets tou work seamlessly across devices.
    //         </p>
    //       </div>
    //       <div className="w-full bg-white rounded-[12px] flex justify-center max-w-[550px] mx-auto w-full">
    //         <div className="py-[55px] flex flex-col gap-[25px]">
    //           <div className="flex flex-col gap-[3px]">
    //             <h1 className="text-[32px] font-[600] text-gray-900">Welcome Back!</h1>
    //             <p className="text-[16px] text-gray-600 font-[450]">
    //               Log in to start creating stunning videos with ease.
    //             </p>
    //           </div>
    //           <form>
    //             <div className="flex flex-col gap-[15px]">
    //               <div className="flex flex-col">
    //                 <label className="text-[16px] !font-[500] text-gray-700">
    //                   Email
    //                 </label>
    //                 <TextInput
    //                   type="email"
    //                   name="email"
    //                   id="email"
    //                   placeholder="Input your email"
    //                   className="border border border-gray-200 !placeholder-gray-400 py-[10px] rounded-[5px] px-[10px] w-[460px]"
    //                 />
    //               </div>
    //               <div className="flex flex-col">
    //                 <label className="text-[16px] !font-[500] text-gray-700">
    //                   Paswword
    //                 </label>
    //                 <TextInput
    //                   type="password"
    //                   name="password"
    //                   id="password"
    //                   placeholder="Input your password"
    //                   className="border border border-gray-200 !placeholder-gray-400 py-[10px] rounded-[5px] px-[10px]"
    //                 />
    //               </div>
    //               <div className="flex flex-col gap-[28px]">
    //                 <div className="flex justify-between items-center gap-2">
    //                   <div className="flex items-center gap-[5px]">
    //                     <input
    //                       type="checkbox"
    //                       id="remember"
    //                       className="h-4 w-4 accent-brown cursor-pointer"
    //                     />
    //                     <label
    //                       htmlFor="remember"
    //                       className="text-[14px] text-gray-400 cursor-pointer"
    //                     >
    //                       Remember Me
    //                     </label>
    //                   </div>
    //                   <div className="text-gray-400 text-[14px]">
    //                     <a href="/">Forgot Password?</a>
    //                   </div>
    //                 </div>
    //                 <div className="bg-black py-[10px] rounded-full flex justify-center cursor-pointer">
    //                   <button className="text-white">Login</button>
    //                 </div>
    //               </div>
    //             </div>
    //           </form>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="Login-page">
      <div
        className="p-[15px] h-full max-lg:flex items-center justify-center"
        style={{
          backgroundImage: "url('login-bg.jpg')",
          backgroundColor: "rgba(0,0,0,0.3)",
          backgroundBlendMode: "darken",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-col lg:flex-row min-h-screen justify-between items-end gap-[0px] max-w-[1400px] mx-auto">
          <div className="lg:block hidden text-white flex flex-col justify-end gap-[10px] w-full px-[20px] lg:px-[40px] text-center lg:text-left pb-[40px]">
            <h1 className="text-[32px] lg:text-[37px] font-[500] text-gray-200 leading-tight w-full">
              Edit Smarter. Export Faster. Create Anywhere.
            </h1>
            <p className="text-[15px] lg:text-[16px] text-gray-300">
              From quick social media clips to full-length videos, our powerful
              editor lets you work seamlessly across devices.
            </p>
          </div>

          <div className="w-full flex justify-center lg:justify-end items-center ">
            <div
              className="
                bg-white flex flex-col justify-center
                min-h-screen        
                rounded-[12px] w-full max-w-[520px]
                md:px-[50px] px-[30px]
                md:py-[50px] py-[45px]
              "
            >
              <div className="flex flex-col gap-[15px]">
                <div>
                  <img src="Zyden-logo.png" className="w-[120px] h-auto" />
                </div>
                <div className="flex flex-col gap-[5px] mb-[25px]">
                  <h1 className="text-[28px] lg:text-[32px] font-[600] text-gray-900 whitespace-nowrap">
                    Welcome Back!
                  </h1>
                  <p className="text-[15px] lg:text-[16px] text-gray-600 font-[450] break-keep">
                    Log in to start creating stunning videos with ease.
                  </p>
                </div>
              </div>

              <form>
                <div className="flex flex-col gap-[18px]">
                  <div className="flex flex-col">
                    <label className="text-[15px] font-[500] text-gray-700 mb-[3px]">
                      Email
                    </label>
                    <TextInput
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Input your email"
                      className="border !border-gray-200 !placeholder-gray-400 focus:outline-none py-[10px] rounded-[6px] px-[12px] w-full"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className="text-[15px] font-[500] text-gray-700 mb-[3px]">
                      Password
                    </label>
                    <div className="relative w-full">
                      <input
                        type={showPassword ? "text" : "password"}
                        value={value}
                        onChange={onChange}
                        placeholder={placeholder}
                        className="border border-gray-300 placeholder-gray-400 py-2 px-3 rounded-[6px] w-full focus:outline-none"
                      />
                      <span
                        className="absolute right-[15px] top-[35px] transform -translate-y-1/2 cursor-pointer text-gray-500"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <i className="fi fi-rr-eye-crossed"></i>
                        ) : (
                          <i className="fi fi-rr-eye"></i>
                        )}
                      </span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center text-[14px] text-gray-500 whitespace-nowrap">
                    <label className="flex items-center gap-[6px] cursor-pointer">
                      <input
                        type="checkbox"
                        id="remember"
                        value={formData.password}
                        onChange={handleChange}
                        F
                        className="h-4 w-4 accent-brown"
                      />
                      Remember Me
                    </label>
                    <button
                      onClick={() => backPage()}
                      className="text-gray-400 cursor-pointer"
                    >
                      Forgot Paswword?
                    </button>
                  </div>

                  <button
                    type="submit"
                    className="text-white w-full rounded-full bg-brown py-[10px] hover:bg-brown/90 transition bg-black cursor-pointer"
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
