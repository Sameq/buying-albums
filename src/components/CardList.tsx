import { useState } from "react";

import Card from "./Card";
import MyModal from "./Modal";
import { Album } from "../types";

export default function CardList({ cards }: { cards: Album[] }) {
  const [openModal, setOpenModal] = useState(false);
  const [currentAlbum, setCurrentAlbum] = useState<Album>({} as Album);

  function handleClickCard(album: Album) {
    setOpenModal(true);
    setCurrentAlbum(album);
  }
  return (
    <>
      {openModal && (
        <MyModal
          shouldOpen={openModal}
          modalAlbum={{
            ...currentAlbum, 
            imageUrl: currentAlbum.images[0].url,
            artistName: currentAlbum.artists[0].name,
            value: currentAlbum.value
          }}
          setCurrentAlbum={setCurrentAlbum}
          setOpenModal={setOpenModal}
        />
      )}
      <div className="flex gap-4 flex-wrap mt-5 justify-center">
        {cards.map((card: Album, index) => {
          return (
            <div key={index} onClick={() => handleClickCard(card)}>
              <Card
                imageUrl={card.imageUrl ?? card.images[0].url}
                artistName={card.artistName ?? card.artists[0].name}
                value={card.value}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
