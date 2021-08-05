import {
  GoogleMap,
  LoadScript,
  DistanceMatrixService,
} from "@react-google-maps/api";
import axios from "axios";
// import connectToDatabase from "../lib/mongodb";

export default function Home() {
  const containerStyle = {
    width: "400px",
    height: "400px",
  };

  const center = {
    lat: -3.745,
    lng: -38.523,
  };

  const fetchUser = () => {
    axios
      .get("http://localhost:3000/api/movies")
      .then((res) => console.log(`res`, res.data))
      .catch((err) => console.log(`err`, err));
  };

  return (
    <div className="container">
      <h1>website is now connected with mongodb</h1>
      <button onClick={fetchUser}>Click</button>
      <LoadScript googleMapsApiKey="AIzaSyDhPVzx-ncXv85KKaGMCGPDOk4RvO63FzU">
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
          <></>
          {/* <DistanceMatrixService
            options={{
              destinations: [{ lat: 1.296788, lng: 103.778961 }],
              origins: [{ lng: 72.89216, lat: 19.12092 }],
              travelMode: "DRIVING",
            }}
            callback={(res) => {
              console.log("RESPONSE", res);
            }}
          /> */}
        </GoogleMap>
      </LoadScript>
    </div>
  );
}

// export async function getServerSideProps(context) {
//   await connectToDatabase();

//   // const isConnected = await client.isConnected();

//   return {
//     props: {},
//   };
// }
