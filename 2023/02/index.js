function manufacture(gifts, materials) {
  const materialsChars = materials.split("");
  const materialsSet = new Set(materialsChars);
  return gifts.filter((gift) => {
    const giftChars = gift.split("");
    const giftAndMaterialsSet = new Set([...giftChars, ...materialsChars]);
    return giftAndMaterialsSet.size === materialsSet.size;
  });
}
