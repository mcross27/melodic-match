import { searchArtists, getArtistInfo, getRecommendations } from './musicService';

export const getPersonalizedRecommendations = async (userPreferences) => {
  // This is a very basic recommendation system
  // In a real app, this would be much more sophisticated
  const recommendations = [];

  for (const genre of userPreferences.favoriteGenres) {
    const artists = await searchArtists(genre);
    const filteredArtists = artists.filter(artist => !userPreferences.likedArtists.includes(artist.name));
    recommendations.push(...filteredArtists.slice(0, 2));
  }

  // Get more info for each recommended artist
  const detailedRecommendations = await Promise.all(
    recommendations.map(async (artist) => {
      const details = await getArtistInfo(artist.name);
      return { ...artist, details };
    })
  );

  return detailedRecommendations;
};

export const getArtistBasedRecommendations = async (artistName) => {
  const similarArtists = await getRecommendations(artistName);
  return similarArtists.slice(0, 5);  // Return top 5 similar artists
};