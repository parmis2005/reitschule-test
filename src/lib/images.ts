// Zentrale Bildquellen der Website.
// Aktuell befüllt mit sorgfältig ausgewählten, lizenzfreien Unsplash-Editorial-Fotos
// (verifiziert, freie CDN-Links) im warmen, modernen Stil der Seite.
// Für den Live-Betrieb durch eigene Fotos/Videos des Betriebs ersetzen
// (gleiche Schlüssel beibehalten, ähnliche Bildmaße empfohlen).

function unsplash(id: string, params = "q=80&w=1600&auto=format&fit=crop") {
  return `https://images.unsplash.com/${id}?${params}`;
}

const heroField = unsplash("photo-1759534115555-d51133b41478"); // Reiterin im Sonnenlicht, weites Feld
const horseFace = unsplash("photo-1598974357801-cbca100e65d3"); // Pferdeporträt im warmen Licht, freundlich
const showJump = unsplash("photo-1574695272842-52dfdb7989d0"); // Springreiten Action
const dressage = unsplash("photo-1748054934544-678d2cb1b039"); // Dressur in der Reithalle
const mistyPaddock = unsplash("photo-1760484701083-40c61c716b11"); // Pferd auf nebliger Weide
const trainerPortrait = unsplash("photo-1753706104366-a05b18ceedd7"); // Reitlehrerin mit Pferd, editorial

export const heroVideos = ["/videos/hero-sunset.mp4", "/videos/hero-aerial.mp4"];

const galleryTrainingHall = unsplash("photo-1779549095373-6d9ac0d781bf"); // Reiterin trainiert in sonniger Halle
const galleryGroundwork = unsplash("photo-1618241686959-04d5c365a0ad"); // Bodenarbeit/Longieren mit Pferd
const galleryRidingTrail = unsplash("photo-1758380424915-2363fd5046d8"); // Ausritt auf Waldweg
const galleryGrooming = unsplash("photo-1595353798712-3c05a2ec64fc"); // Pferdepflege, Hand am Pferdekopf
const galleryJumpingArena = unsplash("photo-1580579944142-2d7913587151"); // Springtraining in Arena
const galleryPonies = unsplash("photo-1773394542553-9915df58fbc9"); // Pony auf der Weide

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
