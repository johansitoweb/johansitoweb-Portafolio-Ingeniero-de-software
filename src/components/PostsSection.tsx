import PostCard from "./PostCard"
import { POSTS } from "@/content/posts"

const PostsSection = () => {
  return (
    <div className="flex flex-col md:w-[700px] lg:w-[800px] w-full justify-center items-center gap-7">
      {POSTS.map(({ title, description, date, tags, url }) => (
        <PostCard
          key={title}
          title={title}
          description={description}
          tags={tags}
          date={date}
          url={url}
        />
      ))}
    </div>
  )
}

export default PostsSection
