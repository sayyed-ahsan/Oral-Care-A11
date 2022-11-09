import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const Blog = () => {
    useTitle('Blog')
    const blogs = useLoaderData();
    console.log(blogs)
    return (
        <div>
            {
                blogs.map((blog, index) =>
                    <div key={blog._id} className="collapse rounded-box collapse-arrow m-6 border-base-300 bg-base-100">
                        <input type="checkbox" className="peer" />
                        <div className="collapse-title ">
                            {index + 1}.  {blog.qustion}
                        </div>
                        <div className="collapse-content ">
                            <p>{blog.ans}</p>
                            <p className='text-center mt-3'>{blog.publishedDay} day ago</p>
                        </div>
                    </div>
                )
            }


        </div>
    );
};

export default Blog;