function BlogItem(props) {
    return (
        <article className="flex flex-col items-start justify-between">
            <div className="relative w-full">
                <img src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80" alt="" className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]" />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>
            </div>
            <div className="max-w-xl">
                <div className="flex items-center mt-8 text-xs gap-x-4">
                    <time dateTime="2020-03-16" className="text-gray-500">Mar 16, 2020</time>
                    <a href="#" className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">Marketing</a>
                </div>
                <div className="relative group">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                        <a href="#">
                            <span className="absolute inset-0"></span>
                            {props?.data?.attributes?.Title}
                        </a>
                    </h3>
                    <p className="mt-5 text-sm leading-6 text-gray-600 line-clamp-3">{props?.data?.attributes?.Content}</p>
                </div>
                <div className="relative flex items-center mt-8 gap-x-4">
                    <img src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" className="w-10 h-10 bg-gray-100 rounded-full" />
                    <div className="text-sm leading-6">
                        <p className="font-semibold text-gray-900">
                            <a href="#">
                                <span className="absolute inset-0"></span>
                                Michael Foster
                            </a>
                        </p>
                        <p className="text-gray-600">Co-Founder / CTO</p>
                    </div>
                </div>
            </div>
        </article>
    );
}

export default BlogItem;