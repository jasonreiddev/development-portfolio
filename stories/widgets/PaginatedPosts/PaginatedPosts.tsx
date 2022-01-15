import { ContainerStyles } from './PaginatedPosts.styles';
import { Pagination } from '../../components/Pagination/Pagination';
import { Posts, Post } from '../../components/Posts/Posts';

interface PaginatedPostsProps {
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
    <ContainerStyles>
      {posts && <Posts posts={posts} />}
      <Pagination
        pageSize={pageSize}
        totalCount={posts ? posts.length : 0}
        currentPage={currentPage}
        base={base}
      />
    </ContainerStyles>
  );
};
