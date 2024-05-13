import LogoutDropdown from "./Dropdown";
import Navigate from "./Navigate";

interface NavBarProps {
  isAuthenticated?: boolean;
  currentPage?: string;
}

export default function NavBar({ isAuthenticated, currentPage }: NavBarProps) {
  const handleLoginClick = Navigate({ url: "/login" });
  const handleSingUpClick = Navigate({ url: "/signup" });
  const handleMyAlbumsClick = Navigate({ url: "/myAlbums" });
  const handleCarteiraClick = Navigate({ url: "/signup" });
  const handleHomeClick = Navigate({ url: "/home" });

  return (
    <nav className=" bg-white bg-opacity-30 top-0 left-0 backdrop-blur h-14 w-full flex items-center">
      <div className="max-w-7xl max-auto px-10">
        <img className="cursor-pointer" src="/src/assets/Logo.png" alt="logo" onClick={handleHomeClick} />
      </div>
      {isAuthenticated ? (
        <div className="flex justify-content items-center space-x-6 mr-10 ml-auto">
          <a
            className={`text-white rounded-full cursor-pointer ${
              currentPage === "MyAlbums" ? "font-bold" : ""
            }`}
            onClick={handleMyAlbumsClick}
          >
            Meus Discos
          </a>
          <a
            className="text-white rounded-full cursor-pointer"
            onClick={handleCarteiraClick}
          >
            Carteira
          </a>
          <LogoutDropdown />
        </div>
      ) : (
        <div className="flex items-center space-x-6 mr-10 ml-auto">
          <button
            style={{ backgroundColor: "#010B0F" }}
            className=" text-white w-40 font-bold h-12  rounded-full hover:bg-blue-600 "
            onClick={handleLoginClick}
          >
            Entrar
          </button>
          <button
            style={{ backgroundColor: "#9EE2FF" }}
            className=" text-black w-40 font-bold h-12  rounded-full hover:bg-blue-600"
            onClick={handleSingUpClick}
          >
            Inscreva-se
          </button>
        </div>
      )}
    </nav>
  );
}
