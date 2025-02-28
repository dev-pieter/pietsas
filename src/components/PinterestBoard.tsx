import { useEffect, useRef } from "react";
import { Skeleton } from "./ui/skeleton";

interface PinterestBoardProps {
  url: string;
  height?: number;
  width?: number;
}

const PinterestBoard = ({
  url,
  height = 800,
  width = 800,
}: PinterestBoardProps) => {
  const initialized = useRef(false);

  useEffect(() => {
    // Only initialize if not already done and Pinterest utils are available
    const t = setTimeout(() => {
      if (!initialized.current && window.PinUtils) {
        window.PinUtils.build();
        initialized.current = true;
      }
    }, 500);

    // Cleanup function to reset initialization flag when component unmounts
    return () => {
      initialized.current = false;
      clearTimeout(t);
    };
  }, []);

  return (
    <div className="pinterest-board-container relative min-h-[400px]">
      <a
        data-pin-do="embedBoard"
        data-pin-board-width={width}
        data-pin-scale-height={height}
        data-pin-scale-width="115"
        href={url}
        className="block w-full"
      >
        <div className="space-y-4 border border-gray-200 rounded-2xl p-4">
          <div className="flex items-center space-x-4">
            <Skeleton className="h-8 w-8 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-2 w-[200px]" />
              <Skeleton className="h-2 w-[150px]" />
            </div>
          </div>
          <Skeleton className="h-[550px] max-w-3xl rounded-xl" />
        </div>
      </a>
    </div>
  );
};

export default PinterestBoard;
