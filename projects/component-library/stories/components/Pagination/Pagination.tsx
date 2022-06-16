import Link from 'next/link';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

import { PaginationStyles as s } from './Pagination.styles';
import { ColorPair } from '../../../../helpers/media';

export interface PaginationProps {
  pageSize: number;
  totalCount: number;
  currentPage: number;
  showAll?: boolean;
  base?: string;
  colorPair?: ColorPair;
}

export const Pagination = ({
  pageSize,
  totalCount,
  currentPage,
  base,
  showAll,
  colorPair = ColorPair.Secondary,
}: PaginationProps): JSX.Element => {
  const totalPages = Math.ceil(totalCount / pageSize);
  const prevPage = currentPage - 1;
  const nextPage = currentPage + 1;
  const hasNextPage = nextPage <= totalPages;
  const hasPrevPage = prevPage >= 1;
  return (
    <>
      {totalPages > 1 && !showAll && (
        <s.Wrapper colorPair={colorPair}>
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
        </s.Wrapper>
      )}
    </>
  );
};
