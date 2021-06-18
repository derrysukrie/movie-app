// export async function getServerSideProps() {
//   // Call an external API endpoint to get posts.
//   // You can use any data fetching library
//   const res = await fetch('https://jsonplaceholder.typicode.com/todos/')
//   const lists = await res.json()

import {
  Block,
  Heading,
  ImageLoader,
  Flex,
  Text,
  Button,
} from 'components';

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
    <Block p="32px 24px">
      <Block pb="2rem">
        <Flex justify="space-between">
          <Button background="transparent" border="none">
            <ImageLoader
              src="/icon/icon-menu.png"
              width="20px"
              height="20px"
              placeholder="blur"
              alt="search icon"
            />
          </Button>
          <Button background="transparent" border="none">
            <ImageLoader
              src="/icon/icon-search.png"
              width="20px"
              height="20px"
              placeholder="blur"
              alt="search icon"
            />
          </Button>
        </Flex>
      </Block>
      <Block pb="2rem">
        <Heading customColor="#1c1c1d" size={28} weight="700">
          Search My
          <br />
          Favorite Movie&apos;s
        </Heading>
      </Block>
      <Block>
        <Flex justify="space-between" align="center">
          <Heading customColor="#1c1c1d" size={18} weight="700">Popular Movies</Heading>
          <Text size={14} weight="700" customColor="#3A57AE" link>See All</Text>
        </Flex>
      </Block>
    </Block>
  );
}
