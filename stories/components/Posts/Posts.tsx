import Link from 'next/link';

import { PostStyles as s } from './Posts.styles';

export interface Post {
  id?: number;
  title: string;
  h2InsteadOfh3: boolean;
  linkUrl: string;
  meta: string;
  excerpt: string;
}

interface PostsProps {
  posts: Post[];
}

export const Posts = ({ posts }: PostsProps): JSX.Element => {
  return (
    <s.Wrapper>
      {posts &&
        posts.map(
          (post: {
            id?: number;
            title: string;
            h2InsteadOfh3: boolean;
            linkUrl: string;
            meta: string;
            excerpt: string;
          }) => {
            return (
              <li className="post" key={post.id}>
                {post.h2InsteadOfh3 && (
                  <h2>
                    <Link href={post.linkUrl}>{post.title}</Link>
                  </h2>
                )}
                {!post.h2InsteadOfh3 && (
                  <h3>
                    <Link href={post.linkUrl}>{post.title}</Link>
                  </h3>
                )}
                <p className="meta">{post.meta}</p>
                <p>
                  <Link href={post.linkUrl} passHref>
                    <span className="excerpt">{post.excerpt}</span>
                  </Link>
                </p>
              </li>
            );
          },
        )}
    </s.Wrapper>
  );
};
