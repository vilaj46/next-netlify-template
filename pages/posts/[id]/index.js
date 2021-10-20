// import fs from "fs";
// import path from "path";
import { useRouter } from "next/router";
import Link from "next/link";
// import markdownToHtml from "../../api/markdownToHtml";
import { getPostBySlug } from "../../api/getAllPosts";

const Post = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <h1>Post: {id}</h1>
      <ul>
        <li>
          <Link href="/post/[id]/[comment]" as={`/post/${id}/first-comment`}>
            <a>First comment</a>
          </Link>
        </li>
        <li>
          <Link href="/post/[id]/[comment]" as={`/post/${id}/second-comment`}>
            <a>Second comment</a>
          </Link>
        </li>
      </ul>
    </>
  );
};

export async function getStaticProps(context) {
  // const fileToRead = path.join(process.cwd(), `${context.params.id}.md`);
  // const content = await markdownToHtml(fileToRead);
  const post = getPostBySlug(context.params.id);

  return {
    props: {}, // will be passed to the page component as props
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: "1" } }, // See the "paths" section below
    ],
    fallback: true,
    //   fallback: true, false, or 'blocking' // See the "fallback" section below
  };
}

export default Post;