import { useNavigate } from "react-router-dom";
import Input from "./Input";
import { ItemForm } from "../types";

interface FormProps {
  items: ItemForm[];
  title?: string;
  action?: string;
  footer: string;
  footerAction: string;
  handleSubmit: React.FormEventHandler<HTMLFormElement>;
  url: string;
}

export default function Form({
  items,
  title,
  action,
  footer,
  footerAction,
  handleSubmit,
  url,
}: FormProps) {
  const navigate = useNavigate();
  const handleFooterActionClick = () => {
    navigate(url);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="absolute inset-0 flex justify-center items-center"
    >
      <div className="bg-white bg-opacity-100 mt-20 rounded-xl p-14 w-1/3">
        <div className="flex flex-col h-20 items-center -mt-4 mb-6">
          <img className="" src="/src/assets/Logo Login.png" alt="logo" />
          <h2 className="text-3xl font-semibold">{title}</h2>
        </div>
        {items.map((item: ItemForm, index) => (
          <div className="mb-6" key={index}>
            <Input
              type={item.type}
              onChange={(event) => item.set(event.target.value)}
            >
              {item.name}
            </Input>
          </div>
        ))}
        <button
          style={{ backgroundColor: "#010B0F" }}
          type="submit"
          className="text-xl bg-blue-500 w-full h-14 text-white rounded-full hover:bg-blue-600 transition duration-300 mb-4"
        >
          {action}
        </button>
        <div className="flex items-center justify-center">
          <p className="text-gray-400 mr-1">{footer}</p>
          <a
            href="#"
            className="text-black-300 underline font-semibold"
            onClick={handleFooterActionClick}
          >
            {footerAction}
          </a>
        </div>
      </div>
    </form>
  );
}
