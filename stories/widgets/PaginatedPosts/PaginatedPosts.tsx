import { ContainerStyles } from './PaginatedPosts.styles';
import { Pagination } from '../../components/Pagination/Pagination';
import { Posts, Post } from '../../components/Posts/Posts';

interface PaginatedPostsProps {
  posts: Post[];
  pageSize: number;
  totalCount: number;
  currentPage: number;
  base?: string;
}

export const PaginatedPosts = ({
  posts,
  pageSize,
  totalCount,
  currentPage,
  base,
}: PaginatedPostsProps): JSX.Element => {
  return (
    <ContainerStyles>
      <Posts posts={posts} />
      <Pagination
        pageSize={pageSize}
        totalCount={totalCount}
        currentPage={currentPage}
        base={base}
      />
    </ContainerStyles>
  );
};
