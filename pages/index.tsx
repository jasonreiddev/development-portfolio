import Head from "next/head";
import styled, { createGlobalStyle } from "styled-components";
// import Post, { IPost } from "../components/Post/Post";
const GlobalStyle = createGlobalStyle`
 h1 {
   font-size: 4rem;
   color: rgba(250, 200, 150, 0.8);
 }
`;
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
        <GlobalStyle />
        <h1>Hello, world!</h1>
      </Container>
    </>
  );
}
