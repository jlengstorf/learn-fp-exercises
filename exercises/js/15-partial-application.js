const albums = [
  { name: 'Middle Cyclone', artist: 'Neko Case', genre: 'indie' },
  { name: 'Highly Refined Pirates', artist: 'Minus The Bear', genre: 'rock' },
  { name: 'Rabbit Fur Coat', artist: 'Jenny Lewis', genre: 'indie' },
  { name: 'Black on Both Sides', artist: 'Mos Def', genre: 'hip-hop' },
];

// -----------------------------------------------------------------------------
// Don’t edit above this line.
// -----------------------------------------------------------------------------

function getOnlyIndie(albums) {
  let filtered = [];
  for (let album of albums) {
    if (album.genre === 'indie') {
      filtered.push(album);
    }
  }

  filtered.sort((album1, album2) => {
    if (album1.artist === album2.artist) {
      return 0;
    }

    return album1.artist > album2.artist ? 1 : -1;
  });

  return filtered;
}

function getOnlyHipHop(albums) {
  let filtered = [];
  for (let album of albums) {
    if (album.genre === 'hip-hop') {
      filtered.push(album);
    }
  }

  filtered.sort((album1, album2) => {
    if (album1.artist === album2.artist) {
      return 0;
    }

    return album1.artist > album2.artist ? 1 : -1;
  });

  return filtered;
}

function getOnlyRock(albums) {
  let filtered = [];
  for (let album of albums) {
    if (album.genre === 'rock') {
      filtered.push(album);
    }
  }

  filtered.sort((album1, album2) => {
    if (album1.artist === album2.artist) {
      return 0;
    }

    return album1.artist > album2.artist ? 1 : -1;
  });

  return filtered;
}

const results = {
  indie: getOnlyIndie(albums),
  'hip-hop': getOnlyHipHop(albums),
  rock: getOnlyRock(albums),
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
