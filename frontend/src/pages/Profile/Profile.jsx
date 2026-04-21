import React, { useState, useEffect } from "react";
import api from "../../api/axios";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      setErrorMessage("Токен не найден в localStorage");
      setTimeout(() => navigate("/authentication"), 2000);
      return;
    }

    api
      .get("/users/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setUserData(res.data);
      })
      .catch((err) => {
        console.error("Full Error:", err);
        const msg = err.response?.data?.detail || err.message;
        setErrorMessage(`Ошибка сервера: ${msg}`);
      });
  }, [navigate]);

  if (errorMessage) {
    return (
      <div className="pt-32 p-10 text-center">
        <div className="bg-red-50 text-red-500 p-6 rounded-2xl inline-block font-bold">
          {errorMessage}
        </div>
      </div>
    );
  }

  if (!userData) {
    return (
      <div className="pt-32 p-10 text-center text-[#2B1B12] font-black animate-pulse">
        LOADING PREMIUM PROFILE...
      </div>
    );
  }

  return (
    <div className="pt-32 p-10 bg-[#fef7f2] min-h-screen">
      <div className="bg-white p-10 rounded-[40px] shadow-2xl max-w-2xl mx-auto">
        <h1 className="text-3xl font-black text-[#2B1B12] mb-6 uppercase tracking-tighter">
          Welcome, {userData.username}
        </h1>
        <div className="space-y-4 border-t pt-6">
          <p className="text-lg font-medium text-[#2B1B12]/60">
            Email:{" "}
            <span className="text-[#2B1B12] font-bold">{userData.email}</span>
          </p>
          <p className="text-lg font-medium text-[#2B1B12]/60">
            Status:{" "}
            <span className="text-[#ddc7bb] font-bold">Premium Resident</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
