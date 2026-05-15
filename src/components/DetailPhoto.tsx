import { PhotoPanel } from "./DetailPhoto.styles";

type DetailPhotoProps = {
  alt: string;
  src: string;
};

export function DetailPhoto({ alt, src }: DetailPhotoProps) {
  return (
    <PhotoPanel>
      <img src={src} alt="" aria-hidden="true" />
      <img src={src} alt={alt} />
    </PhotoPanel>
  );
}
