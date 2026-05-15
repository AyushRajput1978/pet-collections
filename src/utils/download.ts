import type { Pet } from '../types';

function fileNameForPet(pet: Pet) {
  return `${pet.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}.jpg`;
}

function clickDownload(href: string, fileName: string) {
  const link = document.createElement('a');
  link.href = href;
  link.download = fileName;
  link.rel = 'noreferrer';
  document.body.append(link);
  link.click();
  link.remove();
}

export async function downloadPets(pets: Pet[]) {
  for (const [index, pet] of pets.entries()) {
    window.setTimeout(async () => {
      try {
        const response = await fetch(pet.imageUrl);
        if (!response.ok) throw new Error('Image request failed');

        const blob = await response.blob();
        const objectUrl = URL.createObjectURL(blob);
        clickDownload(objectUrl, fileNameForPet(pet));
        window.setTimeout(() => URL.revokeObjectURL(objectUrl), 1000);
      } catch {
        // Cross-origin image hosts may block blob downloads; direct navigation is
        // the safest fallback and still gives users the selected assets.
        clickDownload(pet.imageUrl, fileNameForPet(pet));
      }
    }, index * 150);
  }
}
