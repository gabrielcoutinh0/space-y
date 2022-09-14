import { DivCard, ImageCard, TextCard } from './styles';

export interface CardProps{
  src?: string;
  alt?: string;
  text?: string;
  small?: boolean;
}

function Card({ text, src, alt, small }: CardProps){
  return (
    <DivCard small={small}>
      <ImageCard src={src} alt={alt} />
      <TextCard>{text}</TextCard>
    </DivCard>
  );
}

export default Card;