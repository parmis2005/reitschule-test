// Zentrale Bildquellen der Website.
// Aktuell befüllt mit sorgfältig ausgewählten, lizenzfreien Unsplash-Editorial-Fotos
// (verifiziert, freie CDN-Links) im warmen, modernen Stil der Seite.
// Für den Live-Betrieb durch eigene Fotos/Videos des Betriebs ersetzen
// (gleiche Schlüssel beibehalten, ähnliche Bildmaße empfohlen).

function unsplash(id: string, params = "q=80&w=1600&auto=format&fit=crop") {
  return `https://images.unsplash.com/${id}?${params}`;
}

const heroField = unsplash("photo-1759534115555-d51133b41478"); // Reiterin im Sonnenlicht, weites Feld
const horseFace = unsplash("photo-1727037347248-0faea46c9bd2"); // Pferdegesicht Nahaufnahme, warm
const showJump = unsplash("photo-1574695272842-52dfdb7989d0"); // Springreiten Action
const dressage = unsplash("photo-1748054934544-678d2cb1b039"); // Dressur in der Reithalle
const mistyPaddock = unsplash("photo-1760484701083-40c61c716b11"); // Pferd auf nebliger Weide
const saddleTack = unsplash("photo-1600081523138-0bae23488dea"); // Sattel Detail
const trainerPortrait = unsplash("photo-1746540368676-3ea770f8b9e3"); // Reiterin mit Schimmel, editorial

export const heroVideos = ["/videos/hero-sunset.mp4", "/videos/hero-aerial.mp4"];

const galleryTrainingHall = unsplash("photo-1553284965-83fd3e82fa5a"); // Reiterin trainiert in Halle
const galleryGroundwork = unsplash("photo-1607622814075-e51df1bdc82f"); // Bodenarbeit mit Pferd
const galleryRidingTrail = unsplash("photo-1730888286699-6a4325ba8f2d"); // Ausritt auf Waldweg
const galleryGrooming = unsplash("photo-1553284965-83fd3e82fa5a"); // Pferdepflege/Fellpflege
const galleryJumpingArena = unsplash("photo-1611003228941-98852ba62227"); // Springtraining in Arena
const galleryPonies = unsplash("photo-1549144994-61f2d7b8a35b"); // Ponys auf Weide

export const images = {
  heroSlides: [heroField, dressage, mistyPaddock],
  about: horseFace,
  trainer: trainerPortrait,
  servicesBg: showJump,
  testimonialsBg: unsplash(
    "photo-1759534115555-d51133b41478",
    "q=80&w=1800&auto=format&fit=crop"
  ),
  gallery: [
    galleryTrainingHall,
    galleryGroundwork,
    galleryRidingTrail,
    galleryGrooming,
    galleryJumpingArena,
    galleryPonies,
  ],
  ctaBg: mistyPaddock,
};
