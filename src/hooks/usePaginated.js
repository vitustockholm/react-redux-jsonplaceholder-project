import React from 'react';

const usePaginated = ({
  postsPerPage,
  totalPosts,
  paginate,
  currentPageIs,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className='pagination'>
        {pageNumbers.map((number) => (
          <li key={number} className='page-item'>
            <a onClick={() => paginate(number)} href='!#' className='page-link'>
              [ {number}] {currentPageIs}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default usePaginated;
