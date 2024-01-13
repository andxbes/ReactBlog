
function Pagination({ page, setPage, meta }) {
    // {
    //     "page": 1,
    //     "pageSize": 9,
    //     "pageCount": 3,
    //     "total": 20
    // }
    let max_pages = 9;
    if (meta?.pageCount) {
        max_pages = meta?.pageCount;
    }

    return (
        <div className="flex justify-between flex-1 sm:justify-end">
            <button onClick={() => setPage((p) => p > 1 ? p - 1 : 1)} className="relative inline-flex items-center px-3 py-2 text-sm font-semibold text-gray-900 bg-white rounded-md ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0">Previous</button>
            <button onClick={() => setPage((p) => p + 1)} className="relative inline-flex items-center px-3 py-2 ml-3 text-sm font-semibold text-gray-900 bg-white rounded-md ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0">Next</button>
        </div>
    );
}

export default Pagination;