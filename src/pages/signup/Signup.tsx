import { FormEvent, useState } from "react";

import Form from "../../components/Form";
import { ItemForm } from "../../types";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "../../hooks/UseAuth";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup } = useAuth();

  async function handleSignup(event: FormEvent) {
    event.preventDefault();

    signup(name, email, password)
      .then((resp) => {
        toast.success("Usuário cadastrado com sucesso.");
      })
      .catch((error) => {
        console.error("Erro ao cadastrar usuário", error);
        toast.error("Erro ao cadastrar usuário.");
      });
  }
  const items: ItemForm[] = [
    {
      name: "Nome Completo",
      type: "text",
      set: setName,
    },
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
    <div className="relative w-screen h-screen overflow-hidden">
      <ToastContainer />
      <img
        className="w-full h-full object-cover brightness-75 absolute inset-0 blur scale-110"
        src="/src/assets/inicial.jpeg"
        alt="foto"
      />
      <Form
        items={items}
        title="Criar conta"
        footerAction="Entrar"
        footer="Já possui uma conta?"
        action="Criar conta"
        url="/Login"
        handleSubmit={handleSignup}
      />
    </div>
  );
}
