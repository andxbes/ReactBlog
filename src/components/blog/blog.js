// import { useEffect } from 'react';
import { useQuery } from 'react-query';

import axios from 'axios';
import BlogItem from './blogItem';
import Notice from '../notification/notice';
import React from 'react';


async function get_posts(page = 1) {
    const { data } = await axios.get(process.env.REACT_APP_URL + `/api/blogs/?pagination[pageSize]=9&pagination[page]=${page}`, {
        headers: {
            'Authorization': 'bearer ' + process.env.REACT_APP_SECRET_TOKEN,
            // 'Accept': '*/*'
        }
    });
    return data;
}


function Blog() {
    const [page, setPage] = React.useState(1);
    const { data, isLoading, isError } = useQuery(
        ['posts', page],
        () => get_posts(page),
        {
            keepPreviousData: true
        });
    // console.info(data);

    return (
        <div className='blog__list'>
            <div className="py-24 bg-white sm:py-32">
                <div className="px-6 mx-auto max-w-7xl lg:px-8">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From the blog</h2>
                        <p className="mt-2 text-lg leading-8 text-gray-600">Learn how to grow your business with our expert advice.</p>
                    </div>
                    {isLoading ? (
                        <Notice title={'Loading'}></Notice>
                    ) : data?.data && !isLoading && !isError ? (
                        data?.data?.length > 0 ? (
                            <div className="grid max-w-2xl grid-cols-1 mx-auto mt-16 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                                {data.data.map(item => (
                                    <BlogItem key={item.id} data={item}></BlogItem>
                                ))}
                            </div>

                        ) : (
                            <Notice title={'Empty'}></Notice>
                        )
                    ) : (
                        <Notice title={'Error'} text="Something went wrong"></Notice>
                    )}

                    <div className="flex justify-between flex-1 sm:justify-end">
                        <button onClick={() => setPage((p) => p > 1 ? p - 1 : 1)} className="relative inline-flex items-center px-3 py-2 text-sm font-semibold text-gray-900 bg-white rounded-md ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0">Previous</button>
                        <button onClick={() => setPage((p) => p + 1)} className="relative inline-flex items-center px-3 py-2 ml-3 text-sm font-semibold text-gray-900 bg-white rounded-md ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0">Next</button>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Blog;