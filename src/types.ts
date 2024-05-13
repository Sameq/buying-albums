export interface Album {
  artistName: string
  imageUrl: string
  value: number
  idSpotify: string
  id?: string
  type: string
  name: string
  releaseDate: string
  images: { url: string }[]
  artists: { name: string }[]
}

export interface CardProps {
  imageUrl: string,
  artistName: string,
  value: number
}

export interface ItemForm {
  name: string;
  type: string;
  set: React.Dispatch<React.SetStateAction<string>>;
}
