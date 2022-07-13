import { Link } from "react-router-dom";
import Avatar from "./91641202.jpeg"
import { DateTime } from "luxon";

function PostListCard(props) {

    const data = props.data;
    const link = "/posts/"+data.title; 

    const formattedDate = DateTime.fromISO(data.date).toLocaleString(DateTime.DATE_MED);

    return (
      <div className="w-full max-w-4xl" key={data.title}>
        
        <div className="bg-base-100 p-6 rounded-lg drop-shadow-md flex flex-col md:mx-6 mx-2">
            {/* IMG will go here, remove padding from the div above and add a new div below, with the padding params. */}
            <div className="flex justify-between">
                <span className="text-sm font-light mb-2">{formattedDate}</span>
            </div>
            <div className="flex flex-col flex-1">
                <Link to={link}><a className="text-2xl neutral-focus font-bold hover:underline prose-2xl">{data.title}</a></Link>
                <p className="mt-2 md:text-md text-sm">{data.preview}</p>
            </div>
            <div>
                {data.tags.map(tag=>{
                    return <p className="text-xs badge badge-outline badge-accent p-2 mr-2 mb-2 mt-3">{tag}</p>
                })}
            </div>
            
            <div className="flex items-center justify-between mt-4 ">
                <Link to={link}><button className="flex items-center btn btn-secondary">
                <a className="text-white">Read more</a>
                <svg className="ml-2 -mr-1 w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </button></Link>
                <div className="flex items-center">
                    <img className="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block" src={Avatar} alt="avatar" />
                    <a className="font-bold text-secondary">{data.author}</a>
                </div>
            </div>
        </div>
      </div>
    );
  }
  
  export default PostListCard;
  