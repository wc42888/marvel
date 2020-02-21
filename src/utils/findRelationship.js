const findRelationShip = (comics, hero) => {
  let relationShip = {};

  comics.forEach(comic => {
    comic.characters.items.forEach(character => {
      const name = character.name;
      if (hero.name === name) return;
      relationShip[name] = (relationShip[name] || 0) + 1;
    });
  });

  const relationShipArr = Object.keys(relationShip).map(name => {
    return {
      name,
      number: relationShip[name],
    };
  });

  return relationShipArr;
};

export default findRelationShip;
