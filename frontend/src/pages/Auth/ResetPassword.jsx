import React, { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import api from "../../api/axios";

const ResetPassword = () => {
  const [searchParams] = useSearchParams();
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const token = searchParams.get("token");

  const handleReset = async (e) => {
    e.preventDefault();
    try {
      // Отправляем только пароль в теле запроса
      await api.post(`/reset-password?token=${token}`, {
        password: password,
      });
      alert("Success! Password updated.");
      navigate("/authentication");
    } catch (err) {
      // Теперь мы увидим реальную причину в консоли
      const errorMsg = err.response?.data?.detail || "Something went wrong";
      alert(`Error: ${errorMsg}`);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fef7f2]">
      <form
        onSubmit={handleReset}
        className="bg-white p-10 rounded-[40px] shadow-xl"
      >
        <h2 className="text-2xl font-black mb-6 uppercase">New Password</h2>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter new password"
          className="w-full p-4 border rounded-2xl mb-4"
          required
        />
        <button className="w-full bg-[#2B1B12] text-white p-4 rounded-2xl font-black">
          UPDATE PASSWORD
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;
