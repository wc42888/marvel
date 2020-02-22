import findRelationShip from './findRelationShip';

const includeInComic = () => Math.random() >= 0.5;

const heroNames = ['me', 'foo', 'bar', 'baz'];

const findNumber = (relationships, name) => {
  const search = relationships.find(relationship => relationship.name === name);
  if (search) return search.number;
  return 0;
};

// [{ characters: []}]

it('should compute correct relationship array', () => {
  const comics = [];
  const expectedNumbers = {};

  for (let comicsNumber = 0; comicsNumber < 10; ++comicsNumber) {
    const characters = {items: []};
    for (const hero of heroNames) {
      if (includeInComic()) {
        characters.items.push({name: hero});
        expectedNumbers[hero] = (expectedNumbers[hero] || 0) + 1;
      }
    }
    comics.push({characters});
  }

  const relationships = findRelationShip(comics, {name: 'me'});

  const fooNumber = findNumber(relationships, 'foo');

  const barNumber = findNumber(relationships, 'bar');

  const bazNumber = findNumber(relationships, 'baz');

  const meNumber = findNumber(relationships, 'me');

  expect(fooNumber).toBe(expectedNumbers['foo']);

  expect(barNumber).toBe(expectedNumbers['bar']);

  expect(bazNumber).toBe(expectedNumbers['baz']);

  expect(meNumber).toBe(0);
});
