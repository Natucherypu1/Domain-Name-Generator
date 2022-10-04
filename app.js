const pronounce = ["The", "Our", "We", "His", "Hers", "Their"];
const adj = ["great", "big", "beautiful", "hideous", "cringe", "hot"];
const noun = ["possum", "rooster", "gigalo", "friend", "mama", "pink toe"];

for (let pronoun of pronounce) {
  for (let adjct of adj) {
    for (let nounn of noun) {
      console.log(`${pronoun}${adjct}${nounn}.com`);
    }
  }
}
