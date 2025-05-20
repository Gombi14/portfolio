import React, { useState } from "react";

const Login = () => {
  const [form, setForm] = useState({ user: "", password: "" });
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Credenciales inválidas");
        return;
      }

      localStorage.setItem("token", data.token);
      window.location.href = "/dashboard";
    } catch (err) {
      console.error(err);
      setError("Error de conexión");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-950 text-white">
      <form onSubmit={handleSubmit} className="bg-blue-800 p-8 rounded-lg w-full max-w-md shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Iniciar Sesión</h2>

        {error && <p className="text-red-400 text-sm mb-4 text-center">{error}</p>}

        <input
          type="text"
          placeholder="Usuario"
          value={form.user}
          onChange={(e) => setForm({ ...form, user: e.target.value })}
          className="w-full mb-4 p-2 rounded bg-blue-900 text-white border border-blue-700 focus:outline-none"
        />

        <input
          type="password"
          placeholder="Contraseña"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          className="w-full mb-6 p-2 rounded bg-blue-900 text-white border border-blue-700 focus:outline-none"
        />

        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded"
        >
          Ingresar
        </button>
      </form>
    </div>
  );
};

export default Login;
