// const paginationEl = document.querySelector('.pagination-list');


// export function element(totalPages, page) {
//     let liEl = '';
//     let activeEl;
//     let beforePages = page - 1;
//     let afterPages = page + 1;

//     if (page > 1) {
//         const markup = page.map(el => {
//             return `<li class="pagination-prew-list">
//                     <div class="pagination-prew">
//                     <svg class="pagination-prew__icon" width="24" height="24">
//                         <use href="./images/prew.svg#prew"></use>
//                     </svg>
//                     </div>
//                 </li>`;
//         }).join('');


//         paginationEl.innerHTML = markup;
//     }

    // for (let pageLength = beforePages; pageLength <= afterPages; pageLength++) {
    //     if (page == pageLength) {
    //         activeEl = 'active';
    //     } else {
    //         activeEl = '';
    //     }
    //     return liEl += `<li class="pagination-item ${activeEl}">${pageLength}</li>`;
    // }

    // if (page < totalPages) {
    //     return liEl += `<div class="pagination-next">
    //                 <svg class="pagination-next__icon" width="24" height="24">
    //                 <use href="./images/next.svg#next"></use>
    //                 </svg>
    //             </div>`;

    // }
    // paginationEl.innerHTML = markup;
//     console.log(paginationEl.innerHTML = liEl);
//     console.log(liEl);
// }
// element(9, 2);
// console.log(element(9, 3));




