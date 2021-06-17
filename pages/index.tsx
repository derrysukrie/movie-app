// export async function getServerSideProps() {
//   // Call an external API endpoint to get posts.
//   // You can use any data fetching library
//   const res = await fetch('https://jsonplaceholder.typicode.com/todos/')
//   const lists = await res.json()

import Image from 'next/image';
import Block from 'components/block';
import Heading from '../src/components/typhography/heading';

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
    <Block p="16px">
      <Block pb="2rem">
        <Image
          src="/icon/icon-search.png"
          placeholder="blur"
          width="20px"
          height="20px"
        />
      </Block>
      <Block pb="2rem">
        <Heading customColor="#1C1C1D" size={28} weight="700">
          Search My
          <br />
          Favorite Movie's
        </Heading>
      </Block>
    </Block>
  );
}
