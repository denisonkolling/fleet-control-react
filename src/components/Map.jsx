import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const Map = ({ positions, center }) => {
  return (
    <MapContainer style={{ height: "55vh" }} center={center} zoom={3}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a
                        href="https://www.openstreetmap.org/copyright">&nbsp;OpenStreetMap&nbsp;</a> contributors'
      />

      {positions.map((vehicle, index) => {
        return (
          <Marker position={[vehicle.latitude, vehicle.longitude]} key={index}>
            <Popup>
              <p>
                <strong>Date</strong> {vehicle.datetime}
                <br />
                <strong>Plate</strong> {vehicle.license_plate}
                <br />
                <strong>Ignition {vehicle.ignition ? "On" : "Off"}</strong>
                <br />
                <strong>Speed</strong> {vehicle.speed}
              </p>
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
};
export default Map;
