import { groq } from "next-sanity";
import { getClient } from "../../sanity/lib/getClient";
import { GetStaticPaths, GetStaticProps } from "next";
import { SanityDocument } from "@sanity/client";
import { urlForImage } from "../../sanity/lib/image";

export const getStaticPaths: GetStaticPaths = async () => {
  const client = getClient();
  const slugsQuery = groq`*[_type == "post" && defined(slug.current)].slug.current`;
  const slugs = await client.fetch(slugsQuery);
  const paths = slugs.map((slug: string) => ({ params: { slug } }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params}) => {
  const { slug } = params || {};
  if (!slug) {
    return { notFound: true };
  }
  const client = getClient();
  const postQuery = groq`*[_type == "post" && slug.current == $slug][0]{
    _id, title, body, mainImage, author->{name}, publishedAt
  }`;
  const data = await client.fetch(postQuery, { slug });
  return { props: { data } };
};

export default function BlogPostPage({ data }: { data: SanityDocument }) {
  if (!data) {
    return <div>Loading...</div>;
  }

  const { title, body, mainImage, author, publishedAt } = data;

  return (
    <div>
      <h1>{title}</h1>
      <a>Author: {author?.name}</a>
      <p>Published At: {new Date(publishedAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })}</p>
      {mainImage && (
        <img
          src={urlForImage(mainImage).url()}
          alt={mainImage?.alt}
          className="w-full"
        />
      )}
    {body && (
        <div>
          {body.map((block: any, index: number) => {
            if (block._type === "block" && block.style === "h2") {
              return <h2 key={index}>{block.children[0].text}</h2>;
            } else if (block._type === "block") {
              return <p key={index}>{block.children[0].text}</p>;
            }
            return null;
          })}
        </div>
      )}
    </div>
  );
}

