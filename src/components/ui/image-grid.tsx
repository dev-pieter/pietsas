import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";

// Dynamically import all images from the guest-looks directory
const imageModules = import.meta.glob(
  "/public/images/guest-looks/*.{jpg,jpeg,png,webp}",
  {
    eager: true,
    query: "?url",
    import: "default",
  }
);

const INITIAL_DISPLAY_COUNT = 6;

export default function ImageGrid() {
  const [displayCount, setDisplayCount] = useState(INITIAL_DISPLAY_COUNT);
  const [selectedImageSrc, setSelectedImageSrc] = useState<string | null>(null);

  // Memoize the image array so heights don't change on re-render
  const allImages = Object.keys(imageModules).map((path, index) => {
      const filename = path.split("/").pop() || "";
      return {
        id: index + 1,
        src: `/images/guest-looks/${filename}`,
        alt: `Guest look inspiration ${index + 1}`,
        height: 300 + Math.floor(Math.random() * 100), // Random height between 300-400 for variety
      };
    });

  const visibleImages = allImages.slice(0, displayCount);
  const hasMore = displayCount < allImages.length;

  const handleLoadMore = () => {
    setDisplayCount(allImages.length);
  };

  const handleImageClick = (src: string) => {
    setSelectedImageSrc(src);
  };

  const handleCloseDialog = () => {
    setSelectedImageSrc(null);
  };

  return (
    <>
      <div className="w-full">
        {/* Pinterest Masonry Grid */}
        <div className="columns-2 sm:columns-3 lg:columns-3 gap-4 space-y-4 mb-8">
          {visibleImages.map((image) => (
            <div
              key={image.id}
              className="break-inside-avoid overflow-hidden rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 group cursor-pointer"
              onClick={() => handleImageClick(image.src)}
            >
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  width={400}
                  height={image.height}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {hasMore && (
          <div className="flex justify-center">
            <Button
              variant="secondary"
              size="sm"
              onClick={handleLoadMore}
              className="uppercase tracking-[0.2em] rounded-sm"
            >
              Load More
            </Button>
          </div>
        )}
      </div>

      {/* Image Dialog */}
      <Dialog open={selectedImageSrc !== null} onOpenChange={handleCloseDialog}>
        <DialogContent
          showCloseButton={false}
          className="max-w-[90vw] max-h-[90vh] p-4 flex items-center justify-center bg-white"
        >
          {selectedImageSrc && (
            <img
              src={selectedImageSrc}
              alt="Guest look inspiration"
              className="max-w-full max-h-[85vh] w-auto h-auto object-contain"
            />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
