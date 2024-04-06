import { useEffect, useState } from "react";
import { Gallery } from "react-grid-gallery";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { ImageType, useImages } from "../lib/contentful";

export default function App() {
  const [index, setIndex] = useState(-1);
  const [images, setImages] = useState<ImageType[]>([]);
  const { fetchImages } = useImages();

  useEffect(() => {
    async function loadData() {
      const res = await fetchImages("D9x6aSG9cIUzAU8rzzOMG");
      setImages(res);
    }
    loadData();
  }, []);

  const handleClick = (index: number, item: ImageType) => setIndex(index);

  return (
    <div>
      <Gallery images={images} onClick={handleClick} enableImageSelection={false} />
      <Lightbox slides={images} open={index >= 0} index={index} close={() => setIndex(-1)} />
    </div>
  );
}
