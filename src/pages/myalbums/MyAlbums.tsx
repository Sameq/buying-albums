import { useEffect, useState } from "react";

import { useAuth } from "../../hooks/UseAuth";
import { getMyAlbums } from "../../api/getAlbums";

import CardList from "../../components/CardList";
import MiniCard from "../../components/MiniCard";
import NavBar from "../../components/NavBar";
import { Album } from "../../types";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface PropsCard {
  title: string;
  image: string;
  value: number;
}

export default function MyAlbums() {
  const [albums, setAlbums] = useState<Album[]>([]);
  const { token } = useAuth();

  const cards: PropsCard[] = [
    {
      title: "Total de Albums",
      image: "/src/assets/albumIcon.png",
      value: 0,
    },
    {
      title: "Valor investido",
      image: "/src/assets/valueIcon.png",
      value: 0,
    },
  ];

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const albumsData = await getMyAlbums(token);
        setAlbums(albumsData);
        cards[1]["value"] = countAlbumsValue();
      } catch (error) {
        console.error("Erro ao carregar os álbuns:", error);
      }
    };

    fetchAlbums();
  }, [token]);

  function countAlbumsValue() {
    return albums.reduce(
      (accumulator, currentAlbum) => accumulator + currentAlbum.value,
      0
    );
  }

  return (
    <div style={{ backgroundColor: "#19181F", minHeight: "100vh" }}>
      <ToastContainer />
      <NavBar isAuthenticated={true} currentPage="MyAlbums" />
      <div className="p-10">
        <h1 className="text-5xl font-bold text-white  mb-5">Meus Discos</h1>
        <div className="flex gap-4">
          {cards.map((card, index) => (
            <MiniCard
              key={index}
              title={card.title}
              image={card.image}
              value={index === 0 ? albums.length : `R$ ${countAlbumsValue()}`}
            />
          ))}
        </div>
        <CardList cards={albums} />
      </div>
    </div>
  );
}
