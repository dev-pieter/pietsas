interface MapProps {
  address: string;
  height?: string;
}

const Map = ({ address, height = "400px" }: MapProps) => {
  const encodedAddress = encodeURIComponent(address);

  return (
    <div className="w-full rounded-xl overflow-hidden" style={{ height }}>
      <iframe
        width="100%"
        height="100%"
        frameBorder="0"
        style={{ border: 0 }}
        src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&q=${encodedAddress}`}
        allowFullScreen
      />
    </div>
  );
};

export default Map;
