import { useState } from "react";
import Slider from "react-slick";

import Card from "./Card";
import MyModal from "./Modal";
import { Album } from "../types";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface CardProps {
  albums: Album[];
}

export default function Carousel({ albums }: CardProps) {
  const [openModal, setOpenModal] = useState(false);
  const [currentAlbum, setCurrentAlbum] = useState<Album>({} as Album);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };

  function handleClickCard(album: Album) {
    console.log("Artist: ", album.idSpotify)
    setOpenModal(true);
    setCurrentAlbum({
      ...currentAlbum,
      artistName: album.artists[0].name,
      value: album.value,
      name: album.name,
      releaseDate: album.releaseDate,
      id: album.id,
      imageUrl: album.images[0].url
    });
  }

  return (
    <>
      {openModal && (
        <MyModal
          shouldOpen={openModal}  
          setCurrentAlbum={setCurrentAlbum}
          setOpenModal={setOpenModal}
          modalAlbum={currentAlbum}
        />
      )}
      <Slider {...settings}>
        {albums.map((album: Album, index) => (
          <div key={index} onClick={() => handleClickCard(album)}>
            <Card
              imageUrl={album.images[0].url}
              artistName={album.artists[0].name}
              value={album.value}
            />
          </div>
        ))}
      </Slider>
    </>
  );
}
