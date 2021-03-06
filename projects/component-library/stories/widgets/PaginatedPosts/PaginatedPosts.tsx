import { PaginatedPostsStyles as s } from './PaginatedPosts.styles';
import { Pagination } from '../../components/Pagination/Pagination';
import { Posts, Post } from '../../components/Posts/Posts';

export interface PaginatedPostsProps {
  posts?: Post[];
  pageSize?: number;
  currentPage?: number;
  base?: string;
}

export const PaginatedPosts = ({
  posts,
  pageSize = 5,
  currentPage = 1,
  base,
}: PaginatedPostsProps): JSX.Element => {
  return (
    <s.Wrapper>
      {posts && <Posts posts={posts} />}
      <Pagination
        pageSize={pageSize}
        totalCount={posts ? posts.length : 0}
        currentPage={currentPage}
        base={base}
      />
    </s.Wrapper>
  );
};
