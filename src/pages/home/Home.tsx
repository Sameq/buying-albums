import { useEffect, useState } from "react";

import { useAuth } from "../../hooks/UseAuth";
import { getAlbums } from "../../api/getAlbums";

import Carousel from "../../components/Carousel";
import NavBar from "../../components/NavBar";
import CardList from "../../components/CardList";
import { Album } from "../../types";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  const [search, setSearch] = useState("");
  const [albums, setAlbums] = useState<Album[]>([]);
  const { token, isAuthenticated } = useAuth();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };
  
  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const albumsData: Album[] = await getAlbums(search, token);
        console.log("ALBUMS: ", albumsData);
        setAlbums(albumsData);
      } catch (error) {
        console.error("Erro ao carregar os álbuns:", error);
      }
    };

    fetchAlbums();
  }, [search, token]);

  return (
    <div style={{ backgroundColor: "#19181F" }}>
      <ToastContainer />
      <div
        className="bg-cover bg-bottom relative overflow-hidden bg-[url('/src/assets/background-home.png')]"
        style={{ height: "50vh", backgroundColor: "#19181F" }}
      >
        <NavBar isAuthenticated />
        <div className="text-white mt-32 ml-4">
          <h1 className="text-4xl font-bold">
            A história da música <br /> não pode ser esquecida!
          </h1>
          <p className="text-xl mt-2"> Sucessos que marcaram o tempo!!!</p>
        </div>
      </div>
      <div
        className="bg-black"
        style={{ minHeight: "50vh", backgroundColor: "#19181F" }}
      >
        <div className="m-auto flex justify-content items-center border h-10 w-1/4 rounded-xl p-2">
          <input
            onChange={handleInputChange}
            value={search}
            className="focus:outline-none text-white font-bold bg-transparent w-11/12"
            type="text"
          />
          <img src="/src/assets/search.png" alt="search" className="w-6 h-6" />
        </div>
        <div className="m-auto w-11/12">
          {search ? (
            <CardList cards={albums} />
          ) : (
            <>
              <h1 className="text-5xl font-bold text-white mb-5">Trends</h1>
              <Carousel albums={albums} />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
