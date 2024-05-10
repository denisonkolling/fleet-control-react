import Map from "../../components/Map";
import { Card, Typography } from "@mui/material";
import MainCard from "../../components/MainCard";
import VehiclesPositionTable from "../../components/VehiclesPositionTable";

function MapVehicles() {
  const positions = [
    {
      id: 1,
      datetime: "2024-02-07T08:00:00",
      license_plate: "XYZ9876",
      latitude: -26.3188,
      longitude: -48.8355,
      ignition: true,
      speed: 60,
    },
    {
      id: 2,
      datetime: "2024-02-07T08:05:00",
      license_plate: "XYZ9876",
      latitude: -26.4094,
      longitude: -48.8359,
      ignition: true,
      speed: 65,
    },
    {
      id: 3,
      datetime: "2024-02-07T08:10:00",
      license_plate: "XYZ9876",
      latitude: -26.6145,
      longitude: -48.72092,
      ignition: true,
      speed: 70,
    },
    {
      id: 4,
      datetime: "2024-02-07T08:15:00",
      license_plate: "XYZ9876",
      latitude: -26.7199,
      longitude: -48.70334,
      ignition: true,
      speed: 75,
    },
    {
      id: 5,
      datetime: "2024-02-07T08:20:00",
      license_plate: "XYZ9876",
      latitude: -26.8265,
      longitude: -48.69719,
      ignition: true,
      speed: 80,
    },
    {
      id: 6,
      datetime: "2024-02-07T08:25:00",
      license_plate: "XYZ9876",
      latitude: -26.9336,
      longitude: -48.71389,
      ignition: true,
      speed: 85,
    },
    {
      id: 7,
      datetime: "2024-02-07T08:30:00",
      license_plate: "XYZ9876",
      latitude: -27.0413,
      longitude: -48.5998,
      ignition: true,
      speed: 90,
    },
    {
      id: 8,
      datetime: "2024-02-07T08:35:00",
      license_plate: "XYZ9876",
      latitude: -27.14982,
      longitude: -48.61069,
      ignition: true,
      speed: 95,
    },
    {
      id: 9,
      datetime: "2024-02-07T08:40:00",
      license_plate: "XYZ9876",
      longitude: -48.554,
      latitude: -27.603,
      ignition: true,
      speed: 100,
    },
    {
      id: 10,
      datetime: "2024-02-07T08:45:00",
      license_plate: "XYZ9876",
      longitude: -48.555,
      latitude: -27.604,
      ignition: true,
      speed: 105,
    },
    {
      id: 11,
      datetime: "2024-02-07T08:00:00",
      license_plate: "XYZ9876",
      longitude: -48.546,
      latitude: -27.5954,
      ignition: true,
      speed: 60,
    },
    {
      id: 12,
      datetime: "2024-02-07T08:10:00",
      license_plate: "ABC1234",
      longitude: -48.546,
      latitude: -27.5954,
      ignition: true,
      speed: 62,
    },
    {
      id: 13,
      datetime: "2024-02-07T08:20:00",
      license_plate: "DEF5678",
      longitude: -48.546,
      latitude: -27.5954,
      ignition: true,
      speed: 65,
    },
    {
      id: 14,
      datetime: "2024-02-07T08:30:00",
      license_plate: "GHI91011",
      longitude: -48.546,
      latitude: -27.5954,
      ignition: true,
      speed: 63,
    },
    {
      id: 15,
      datetime: "2024-02-07T08:40:00",
      license_plate: "JKL1213",
      longitude: -48.546,
      latitude: -27.5954,
      ignition: true,
      speed: 67,
    },
  ];
  return (
    <>
      <MainCard title="Vehicles Positions">
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
