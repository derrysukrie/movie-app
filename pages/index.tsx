import Homepage from 'container';

// export async function getServerSideProps() {
//   // Call an external API endpoint to get posts.
//   // You can use any data fetching library
//   const res = await fetch('https://jsonplaceholder.typicode.com/todos/')
//   const lists = await res.json()

//   if (!lists) {
//     return {
//       notFound: true,
//     }
//   }

//   // By returning { props: posts }, the Blog component
//   // will receive `posts` as a prop at build time
//   return {
//     props: {
//       lists,
//     },
//   }
// }

// interface Prop {
//   lists: Array<[]>;
//   data: string
// }

export default function Home() {
  return (
    <Homepage />
  );
}
