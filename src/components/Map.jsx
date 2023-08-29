import { useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";
function Map() {
  const [searchParams, setSearchParams] = useSearchParams();

  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  console.log(searchParams);
  return (
    <div className={styles.mapContainer}>
      <h1>Map</h1>
      <h2>
        Position: {lat}, {lng}
      </h2>
      <button onClick={() => setSearchParams({ lat: 23, lng: 50 })}>
        change position
      </button>
    </div>
  );
}

export default Map;
