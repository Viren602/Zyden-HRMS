import React, { useState } from "react";
import TextInput from "../../components/common/TextInput";
import { useNavigate } from "react-router-dom";

const ForgotPassword = ({ value, onChange, placeholder }) => {
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

  const navigate = useNavigate()

  const backPage = () =>{
    navigate('/login')
  }

  return (
    <div className="Forgot-password-page">
      <div
        className="p-[15px] h-screen max-lg:flex justify-center items-center"
        style={{
          backgroundImage: "url('login-bg.jpg')",
          backgroundColor: "rgba(0,0,0,0.3)",
          backgroundBlendMode: "darken",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-col lg:flex-row justify-between items-end gap-[0px] max-w-[1400px] mx-auto">
          <div className="lg:block hidden text-white flex flex-col justify-end gap-[10px] w-full px-[20px] lg:px-[40px] text-center lg:text-left pb-[40px]">
            <h1 className="text-[32px] lg:text-[37px] font-[500] text-gray-200 leading-tight w-full">
              Edit Smarter. Export Faster. Create Anywhere.
            </h1>
            <p className="text-[15px] lg:text-[16px] text-gray-300">
              From quick social media clips to full-length videos, our powerful
              editor lets you work seamlessly across devices.
            </p>
          </div>

          <div className="w-full flex justify-center lg:justify-end">
            <div className="bg-white flex flex-col justify-center md:h-[550px] h-[500px] rounded-[12px] w-full max-w-[520px] md:px-[50px] px-[30px] md:py-[50px] py-[45px]">
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
                  <div className="flex flex-col gap-[5px]">
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
                    <div className="flex justify-between items-center text-[14px] text-gray-500 whitespace-nowrap">
                      <button 
                      onClick={() => backPage()}
                      className="text-gray-400 cursor-pointer">Back to login</button>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="text-white w-full rounded-full bg-brown py-[10px] hover:bg-brown/90 transition bg-black cursor-pointer"
                  >
                    Send otp
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
