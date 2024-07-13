const USER_PREFERENCES_KEY = 'userPreferences';

export const saveUserPreferences = (preferences) => {
  localStorage.setItem(USER_PREFERENCES_KEY, JSON.stringify(preferences));
};

export const getUserPreferences = () => {
  const preferences = localStorage.getItem(USER_PREFERENCES_KEY);
  return preferences ? JSON.parse(preferences) : {
    favoriteGenres: [],
    likedArtists: [],
    dislikedArtists: []
  };
};

export const addLikedArtist = (artistName) => {
  const preferences = getUserPreferences();
  if (!preferences.likedArtists.includes(artistName)) {
    preferences.likedArtists.push(artistName);
    saveUserPreferences(preferences);
  }
};

export const addDislikedArtist = (artistName) => {
  const preferences = getUserPreferences();
  if (!preferences.dislikedArtists.includes(artistName)) {
    preferences.dislikedArtists.push(artistName);
    saveUserPreferences(preferences);
  }
};

export const addFavoriteGenre = (genre) => {
  const preferences = getUserPreferences();
  if (!preferences.favoriteGenres.includes(genre)) {
    preferences.favoriteGenres.push(genre);
    saveUserPreferences(preferences);
  }
};

export const removeLikedArtist = (artistName) => {
  const preferences = getUserPreferences();
  preferences.likedArtists = preferences.likedArtists.filter(artist => artist !== artistName);
  saveUserPreferences(preferences);
};

export const removeDislikedArtist = (artistName) => {
  const preferences = getUserPreferences();
  preferences.dislikedArtists = preferences.dislikedArtists.filter(artist => artist !== artistName);
  saveUserPreferences(preferences);
};

export const removeFavoriteGenre = (genre) => {
  const preferences = getUserPreferences();
  preferences.favoriteGenres = preferences.favoriteGenres.filter(g => g !== genre);
  saveUserPreferences(preferences);
};