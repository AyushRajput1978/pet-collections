import { Intro } from "./PageIntro.styles";

type PageIntroProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function PageIntro({ eyebrow, title, description }: PageIntroProps) {
  return (
    <Intro>
      <span>{eyebrow}</span>
      <h1>{title}</h1>
      {description ? <p>{description}</p> : null}
    </Intro>
  );
}
