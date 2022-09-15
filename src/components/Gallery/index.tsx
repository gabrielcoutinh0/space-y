import { ContentGallery, Arrow, SlideTrack, Slide } from './styles';

const images = [
  {
    id: 1,
    src: '/images/gallery-1.jpg',
    name: 'Imagem 1',
  },
  {
    id: 2,
    src: '/images/gallery-2.jpg',
    name: 'Imagem 2',
  },
  {
    id: 3,
    src: '/images/gallery-3.jpg',
    name: 'Imagem 3',
  },
  {
    id: 4,
    src: '/images/gallery-1.jpg',
    name: 'Imagem 1',
  },
  {
    id: 5,
    src: '/images/gallery-2.jpg',
    name: 'Imagem 2',
  },
  {
    id: 6,
    src: '/images/gallery-3.jpg',
    name: 'Imagem 3',
  },
]

function Gallery(){
  return (
    <>
      <Arrow onClick={() => {}} />
      <ContentGallery>
        <SlideTrack>
          <Slide>
            {images.map(image => (<img key={image.id} src={image.src} alt={image.name} />))}
          </Slide>
        </SlideTrack>
      </ContentGallery>
    </>
  );
}

export default Gallery;