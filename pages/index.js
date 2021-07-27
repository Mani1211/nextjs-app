import Head from "next/head";
// import connectToDatabase from "../lib/mongodb";

export default function Home() {
  return (
    <div className="container">
      <h1>website is now connected with mongodb</h1>
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
