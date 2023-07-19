import { groq } from 'next-sanity';
import { getClient } from '../../sanity/lib/getClient';
import { GetStaticPaths, GetStaticProps } from 'next';
import { SanityDocument } from '@sanity/client';
import { urlForImage } from '../../sanity/lib/image';
export const getStaticPaths: GetStaticPaths = async () => {
  const client = getClient();
  const slugsQuery = groq`*[_type == "post" && defined(slug.current)].slug.current`;
  const slugs = await client.fetch(slugsQuery);
  const paths = slugs.map((slug: string) => ({ params: { slug } }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
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
    <div className="justify-center p-10 m-10">
      <h1 className="p-10 text-4xl font-bold text-center bg-[#EEF6F4] text-emerald-950">
        {title}
      </h1>
      {mainImage && (
        <div className="flex justify-center">
          <img
            src={urlForImage(mainImage).url()}
            alt={mainImage?.alt}
            className="w-[500px] h-auto m-10"
          />
        </div>
      )}
      <div className="flex items-center text-gray-600">
        <a className="p-3">Author: {author?.name}</a>
        <p>
          Published At:{' '}
          {new Date(publishedAt).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </p>
      </div>
      {body && (
        <div>
          {body.map((block: any, index: number) => {
            if (block._type === 'block' && block.style === 'h2') {
              return (
                <h2 className="p-5 mb-3 text-2xl font-semibold" key={index}>
                  {block.children[0].text}
                </h2>
              );
            } else if (block._type === 'block') {
              return (
                <p className="justify-between p-3 mb-2 text-lg" key={index}>
                  {block.children[0].text}
                </p>
              );
            }
            return null;
          })}
        </div>
      )}
    </div>
  );
}
