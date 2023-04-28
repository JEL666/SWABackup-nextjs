import { Post } from "@/interfaces";
import axios from "axios";
import Link from "next/link";

export const getServerSideProps = async () => {
  const { data: posts } = await axios.get('http://localhost:3000/api/posts');
  return {
    props: { posts },
  };
};

interface Props {
  posts: Post[];
}

const HomePage = ({ posts }: Props) => {
  return <div>Home
    <ul>
      {
        posts.map(post =>
          <Link href="/posts/[id]" as={`/posts/${post.id}`} key={post.id}>
              <li>{post.title}</li>
          </Link>
        )
      }
    </ul>
  </div>;
};

export default HomePage;