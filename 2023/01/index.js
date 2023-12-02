function findFirstRepeated(gifts) {
  const NO_REPEATED = -1;
  const repeatedGifts = gifts.filter((gift, i) => gifts.indexOf(gift) !== i);
  return repeatedGifts[0] ?? NO_REPEATED;
}
