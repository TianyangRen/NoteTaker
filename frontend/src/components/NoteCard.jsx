import { Link } from "react-router"
import { PenSquareIcon, Trash2Icon } from "lucide-react"
import { formatDate } from "../lib/utils"

const NoteCard = ({note}) => {
  return <Link to={`/notes/${note._id}`}
  className="card bg-base-100 hover:shadow-lg transition-all duration-200 border-t-8 border-solid border-[#4361e3]"
  >
    <div className="card-body bg">
        <h3 className="card-title text-base-content">{note.title}</h3>
        <p className="text-base-content/70 line-clamp-3">{note.content}</p>
        <div className="card-actions justify-between items-center mt-4">
            <span className="text-sm to-base-content/60">{formatDate(new Date(note.createdAt))}</span>
            <div className="flex items-center gap-1">
                <PenSquareIcon className="size-4" />
                <button className="btn btn-ghost btn-xs text-error">
                    <Trash2Icon className="size-4" />
                </button>
            </div>
        </div>
    </div>
         </Link>
}

export default NoteCard
