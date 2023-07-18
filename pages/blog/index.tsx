import React from 'react'
import { groq } from "next-sanity";
import { getClient } from "../../sanity/lib/getClient";
import { GetStaticProps } from "next";
import { SanityDocument } from "@sanity/client";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {urlForImage} from '../../sanity/lib/image'
import Link from 'next/link';
export const getStaticProps: GetStaticProps = async () => {
  const client = getClient();
  const postsQuery = groq`*[_type == "post"]{
    _id,
    title,
    overview,
    slug,
    mainImage,
    publishedAt, 
    author->{name}
  }`;
  const data = await client.fetch(postsQuery);
  return { props: { data } };
};

export default function BlogPage({ data }: { data: SanityDocument[] }) {
  return (
    <div>
      <div className="bg-[#EEF6F4]">
      <h1 className="text-emerald-950 text-[50px] px-5 pb-[40px] font-bold leading-[80px]">Artikel</h1>
      </div>
      <div className="item-center p-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 py-[87px]">
      {data.map((post: SanityDocument) => (
        <article key={post._id} className="justify-center m-3 w-[400px] overflow-hidden transition rounded-lg shadow hover:shadow-lg">
          <img
              alt={post.mainImage.alt}
              src={urlForImage(post.mainImage)}
            className="object-cover w-full h-[217px]"
          />
          <div className="w-full p-4 bg-white sm:p-6">
          <p className="items-center inline text-xs text-center text-gray-500">
          <a ><time dateTime={post.publishedAt} className="text-xs text-gray-500">
              {new Date(post.publishedAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}   {" | "}
            </time></a><a> {''} {post.author?.name} {" | "} </a> <a> 0 Comment </a>
              </p>
            <Link href={`/blog/${post.slug.current}`}>
              <h3 className="mt-0.5 text-blue-950 text-2xl font-semibold capitalize">{post.title}</h3>
            </Link>
            <p className="py-3 mt-2 text-gray-500 line-clamp-3 text-sm/relaxed">{post.overview}</p>
          <Link className='text-[#548776] py-[24px] text-base font-bold capitalize leading-loose' href={`/blog/${post.slug.current}`}>Read More {'>'} </Link>
          </div>
        </article>
      ))}
    </div>
    </div>
  );
}



