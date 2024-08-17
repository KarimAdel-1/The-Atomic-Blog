import { usePosts } from "../context/PostContext";
import List from "./List";

export default function Posts() {
  const { posts } = usePosts();
  return (
    <section>
      <List posts={posts} />
    </section>
  );
}
