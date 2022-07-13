import { DateTime } from "luxon";

function CommentSection(props) {

    let comments = props.comments;

    return (
      <div>
        <h3 className="block mt-2 text-2xl font-semibold">Discussion:</h3>
         {comments.map((comment) => {
                return (
                    <div className="flex flex-col  mb-2 px-2 border rounded-md bg-base-200">                 
                        <p>{comment.content}</p>
                        <div className="flex items-center gap-5">
                            <p className="text-accent">by {comment.author}</p>
                            <p className="text-sm">{DateTime.fromISO(comment.date).toLocaleString(DateTime.DATE_MED)}</p>
                        </div>
                    </div>
                    
                )
        })}
      </div>
    );
  }
  
  export default CommentSection;
  