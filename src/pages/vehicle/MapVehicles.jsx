import Map from "../../components/Map";
import MainCard from "../../components/MainCard";
import VehiclesPositionTable from "../../components/VehiclesPositionTable";
import { positionsMap } from "../../data/db";
import { useState } from "react";

function MapVehicles() {
  const [positions, setPositions] = useState(positionsMap);
  return (
    <>
      <MainCard title="Vehicles Locations">
        <Map
          positions={positions}
          center={
            positions[0]
              ? [positions[0].latitude, positions[0].longitude]
              : [-27.5961, -48.5651]
          }
        />
      </MainCard>
      <MainCard sx={{ mt: 2 }} content={false}>
        <VehiclesPositionTable />
      </MainCard>
    </>
  );
}

export default MapVehicles;
