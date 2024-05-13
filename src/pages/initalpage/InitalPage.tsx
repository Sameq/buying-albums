import NavBar from "../../components/NavBar";
import Navigate from "../../components/Navigate";

export default function InitalPage() {
  const handleSingUpClick = Navigate({ url: "/signup" });

  return (
    <>
      <div className="relative w-screen h-screen overflow-hidden  bg-cover bg-[url('/src/assets/inicial.jpeg')]">
        <NavBar isAuthenticated={false} />
        <div className="absolute left-9 top-1/2 transform -translate-y-1/2 text-white">
          <h1 className="text-7xl	 font-bold">
            A história da música <br />
            não pode ser <br />
            esquecida!
          </h1>
          <h2 className="text-2xl mt-8">
            Crie já sua conta e curta os sucessos que <br />
            marcaram os tempos no Vinil.
          </h2>
          <button
            style={{ backgroundColor: "#9EE2FF" }}
            className=" text-black w-48 font-bold h-12 rounded-full hover:bg-blue-600 mt-9"
            onClick={handleSingUpClick}
          >
            Inscreva-se
          </button>
        </div>
      </div>
    </>
  );
}
