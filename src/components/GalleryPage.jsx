import react from "react";
import "./GalleryPage.css";
import ImageGallery from "react-image-gallery";

const images = [
  {
    original: "/paintings/001.jpg",
    thumbnail: "/paintings/001.jpg",
  },
  {
    original: "/paintings/002.jpg",
    thumbnail: "/paintings/002.jpg",
  },
  {
    original: "/paintings/003.jpg",
    thumbnail: "/paintings/003.jpg",
  },
  {
    original: "/paintings/004.jpg",
    thumbnail: "/paintings/004.jpg",
  },
  {
    original: "/paintings/005.jpg",
    thumbnail: "/paintings/005.jpg",
  },
];

export default function (props) {
  return (
    <div>
      <ImageGallery items={images} />
    </div>
  );
}
