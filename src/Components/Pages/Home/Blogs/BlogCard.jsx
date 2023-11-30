/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";


const BlogCard = ({ blog }) => {
    // console.log(blog)
    const { tourist_name, tourist_email, price, detail, guide_name, type, date, storyImage,_id
    } = blog;
    return (
        <div>
            <Link to={`/blogdetail/${_id}`}><article className="flex flex-col bg-stone-200 dark:bg-gray-900">
                <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                    <img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src={storyImage} />
                </a>
                <div className="flex flex-col flex-1 p-6">
                    <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
                    <a rel="noopener noreferrer" href="#" className="text-xs tracki uppercase hover:underline dark:text-violet-400">{ type}</a>
                    <h3 className="flex-1 py-2 text-lg font-semibold leadi">Te nulla oportere reprimique his dolorum</h3>
                    <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                        <span>{date}</span>
                        <span>2.1K views</span>
                    </div>
                </div>
            </article></Link>


        </div>
    );
};

export default BlogCard;