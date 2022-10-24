import React from "react";

const Paginations = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div>
      <nav>
        <div className="flex justify-center items-center mt-4">
          {pageNumbers.map((number) => (
            <div key={number}>
              <div onClick={() => paginate(number)} className="w-8 h-8 flex justify-center items-center bg-slate-200 cursor-pointer mr-2 rounded-lg">
                {number}
              </div>
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Paginations;
