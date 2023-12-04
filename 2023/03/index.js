function findNaughtyStep(original, modified) {
  const isStepAdded = original.length > modified.length;
  for (let modifiedCharIndex in modified) {
    const originalChar = original[modifiedCharIndex];
    const modifiedChar = modified[modifiedCharIndex];
    if (originalChar !== modifiedChar) {
      return isStepAdded ? originalChar : modifiedChar;
    }
  }
  return "";
}
