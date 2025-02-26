import { useRef } from "react";

function Map({
  address,
  zoom = 12,
  className,
}: {
  address: string;
  zoom?: number;
  className?: string;
}) {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const formattedAddress = address.split(" ").join("+");

  return (
    <div className={className}>
      <iframe
        src={`https://www.google.com/maps/embed/v1/place?q=${formattedAddress}&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&zoom=${zoom}`}
        ref={iframeRef}
        width="100%"
        height="100%"
        style={{ border: 0 }}
      />
    </div>
  );
}
export default Map;
