import api from './api';

export const searchArtists = async (query) => {
  const response = await api.get('', {
    params: {
      method: 'artist.search',
      artist: query,
    },
  });
  return response.data.results.artistmatches.artist;
};

export const getTopTracks = async (artist) => {
  const response = await api.get('', {
    params: {
      method: 'artist.gettoptracks',
      artist: artist,
    },
  });
  return response.data.toptracks.track;
};

export const getArtistInfo = async (artist) => {
  const response = await api.get('', {
    params: {
      method: 'artist.getinfo',
      artist: artist,
    },
  });
  return response.data.artist;
};

export const getRecommendations = async (artist) => {
  const response = await api.get('', {
    params: {
      method: 'artist.getsimilar',
      artist: artist,
    },
  });
  return response.data.similarartists.artist;
};