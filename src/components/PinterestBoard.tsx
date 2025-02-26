import { useEffect } from "react";

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
  useEffect(() => {
    // Reinitialize Pinterest widgets after component mounts
    if (window.PinUtils) {
      window.PinUtils.build();
    }
  }, [url]);

  return (
    <div className="pinterest-board-container">
      <a
        data-pin-do="embedBoard"
        data-pin-board-width={width}
        data-pin-scale-height={height}
        data-pin-scale-width="115"
        href={url}
      ></a>
    </div>
  );
};

export default PinterestBoard;
