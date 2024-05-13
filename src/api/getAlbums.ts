import { api_album } from "../service/apiService";
import { Album } from "../types";

export function getMyAlbums(token: string): Promise<Album[]> {
  api_album.defaults.headers.common.Authorization = `Basic ${token}`

  return api_album.get('api/albums/my-collection')
    .then((resp) => {
      return resp.data as Album[]
    })
    .catch(error => {
      console.error('Erro ao obter os álbuns:', error);
      throw error;
    });
}

export function getAlbums(search: string, token: string): Promise<Album[]> {
  api_album.defaults.headers.common.Authorization = `Basic ${token}`

  return api_album.get(`api/albums/all/${search || 'Rock'}`)
    .then((resp) => {

      return resp.data as Album[]
    })
    .catch(error => {
      console.error('Erro ao obter os álbuns:', error);
      throw error;
    });
}

export function saleAlbum(album: Album,token: string) {
  api_album.defaults.headers.common.Authorization = `Basic ${token}`
  album["idSpotify"] = album.id || "";
  delete album.id;
  return api_album.post('api/albums/sale', album)
    .catch(erro => {
      console.error('Erro ao comprar Album', erro)
    });
}
