import Head from 'next/head';
import styled from 'styled-components';
import { GlobalStyles } from '../styles/GlobalStyles';
// import Post, { IPost } from "../components/Post/Post";

const Container = styled.div`
  text-align: center;
`;
export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>SSR styled-components with Next.js Starter</title>
      </Head>
      {/* <Post
        key={0}
        deletePost={function (id: number) {}}
        post={{ id: 0, title: "Hey, I'm title", body: "Hello, I'm the body" }}
      /> */}
      <Container>
        <GlobalStyles />
        <h1>Hello, world!</h1>
      </Container>
    </>
  );
}
