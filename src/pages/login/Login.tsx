import { FormEvent, useState } from "react";
import Form from "../../components/Form";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/UseAuth";
import { ItemForm } from "../../types";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isAuthenticated } = useAuth();
  const _navigate = useNavigate();

  async function handleLogin(event: FormEvent) {
    event.preventDefault();

    login(email, password).then((resp) => {
      console.log(resp);
    });

    setTimeout(() => {
      _navigate("/home");
    }, 2000);
  }

  const items: ItemForm[] = [
    {
      name: "Email",
      type: "email",
      set: setEmail,
    },
    {
      name: "Password",
      type: "password",
      set: setPassword,
    },
  ];

  return (
    <>
      {isAuthenticated && <Navigate to="/home" />}
      <div className="relative w-screen h-screen overflow-hidden">
        <img
          className="w-full h-full object-cover brightness-75 absolute inset-0 blur scale-110"
          src="/src/assets/inicial.jpeg"
          alt="foto"
        />
        <Form
          items={items}
          title="Acesse sua conta"
          footer="Não passui conta?"
          footerAction="Inscrever-se"
          action="Entrar"
          url="/Signup"
          handleSubmit={handleLogin}
        />
      </div>
    </>
  );
}
