import Image from "next/image";
import { useState } from "react";
import { MdArrowBack } from "react-icons/md";
import ImageViewer from "react-simple-image-viewer";

export default function ImageZoom({ image }) {
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  return (
    <div className="max-w-[10rem] border-4 rounded-md border-black my-4 mx-auto">
      <Image
        className="aspect-square object-cover border-4 rounded-md border-white"
        alt={image.alt}
        src={image.url}
        onClick={() => setIsViewerOpen(true)}
        height={image.height}
        width={image.width}
      />
      <div className="isolate relative z-20">
        {isViewerOpen && (
          <ImageViewer
            src={[image.url]}
            currentIndex={0}
            disableScroll={false}
            closeOnClickOutside={true}
            onClose={() => setIsViewerOpen(false)}
            closeComponent={
              <div
                className="inline-block my-9"
                href="/"
              >
                <MdArrowBack className="text-4xl text-white" />
              </div>
            }
          />
        )}
      </div>
    </div>
  );
}
