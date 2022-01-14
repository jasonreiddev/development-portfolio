import Link from 'next/link';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

import { PaginationStyles } from './Pagination.styles';

interface PaginationProps {
  pageSize: number;
  totalCount: number;
  currentPage: number;
  showAll?: boolean;
  base?: string;
}

export const Pagination = ({
  pageSize,
  totalCount,
  currentPage,
  base,
  showAll,
}: PaginationProps): JSX.Element => {
  const totalPages = Math.ceil(totalCount / pageSize);
  const prevPage = currentPage - 1;
  const nextPage = currentPage + 1;
  const hasNextPage = nextPage <= totalPages;
  const hasPrevPage = prevPage >= 1;
  return (
    <>
      {totalPages > 1 && !showAll && (
        <PaginationStyles>
          <Link href={`${!hasPrevPage && `base/}${prevPage}`}`} passHref>
            <AiOutlineLeft />
            <span className="word">Prev</span>
          </Link>
          {Array.from({ length: totalPages }).map((_, i) => (
            <Link
              //className={[currentPage === 1 && i === 0 ? 'current' : '', ' hide-small-mobile']}
              href={`${base}/${i + 1}`}
              key={`page${i}`}
            >
              {i + 1}
            </Link>
          ))}
          <Link href={`${!hasNextPage && `${base}/${nextPage}`}`} passHref>
            <span className="word">Next</span>
            <AiOutlineRight />
          </Link>
          <Link href={`${base}`}>All</Link>
        </PaginationStyles>
      )}
    </>
  );
};
