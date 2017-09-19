const albums = [
  { name: 'Middle Cyclone', artist: 'Neko Case', genre: 'indie' },
  { name: 'Highly Refined Pirates', artist: 'Minus The Bear', genre: 'rock' },
  { name: 'Rabbit Fur Coat', artist: 'Jenny Lewis', genre: 'indie' },
  { name: 'Black on Both Sides', artist: 'Mos Def', genre: 'hip-hop' },
];

// -----------------------------------------------------------------------------
// Don’t edit above this line.
// -----------------------------------------------------------------------------

const byArtistAsc = (album1, album2) => {
  if (album1.artist === album2.artist) {
    return 0;
  }

  return album1.artist > album2.artist ? 1 : -1;
};

const filterByGenre = (genre, album) => album.genre === genre;

// Create filtering functions by partially applying the genre argument.
const onlyIndie = filterByGenre.bind(null, 'indie');
const onlyHipHop = filterByGenre.bind(null, 'hip-hop');
const onlyRock = filterByGenre.bind(null, 'rock');

const results = {
  indie: albums.filter(onlyIndie).sort(byArtistAsc),
  'hip-hop': albums.filter(onlyHipHop).sort(byArtistAsc),
  rock: albums.filter(onlyRock).sort(byArtistAsc),
};

// -----------------------------------------------------------------------------
// Don’t edit below this line.
// -----------------------------------------------------------------------------

const expected = {
  indie: [
    { name: 'Rabbit Fur Coat', artist: 'Jenny Lewis', genre: 'indie' },
    { name: 'Middle Cyclone', artist: 'Neko Case', genre: 'indie' },
  ],
  'hip-hop': [
    { name: 'Black on Both Sides', artist: 'Mos Def', genre: 'hip-hop' },
  ],
  rock: [
    { name: 'Highly Refined Pirates', artist: 'Minus The Bear', genre: 'rock' },
  ],
};

window.FPWorkshop.check(results, expected);
