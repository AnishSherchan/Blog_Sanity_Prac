import React from "react";
import Image from "next/image";
import { client } from "../sanity/client";
import { SanityDocument } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import Link from "next/link";
const Blog = async () => {
  const EVENTS_QUERY = `*[_type == "blog"]`;
  const blogs = await client.fetch<SanityDocument[]>(EVENTS_QUERY);
  const builder = imageUrlBuilder(client);
  return (
    <>
      <div
        className="w-full z-50 top-0 py-3 sm:py-5 bg-sky-400
  "
      >
        <div className="container flex items-center justify-between">
          <div>
            <a href="/">
              <img
                src="/assets/img/logo.svg"
                className="w-24 lg:w-48"
                alt="logo image"
              />
            </a>
          </div>
          <div className="hidden lg:block">
            <ul className="flex items-center">
              <a href="#about">
                <li className="group pl-6">
                  <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                    About
                  </span>

                  <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                </li>
              </a>
              <a href="#services">
                <li className="group pl-6">
                  <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                    Services
                  </span>

                  <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                </li>
              </a>
              <a href="#portfolio">
                <li className="group pl-6">
                  <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                    Portfolio
                  </span>

                  <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                </li>
              </a>
              <a href="#clients">
                <li className="group pl-6">
                  <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                    Clients
                  </span>

                  <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                </li>
              </a>
              <a href="#work">
                <li className="group pl-6">
                  <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                    Work
                  </span>

                  <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                </li>
              </a>
              <a href="#statistics">
                <li className="group pl-6">
                  <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                    Statistics
                  </span>

                  <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                </li>
              </a>
              <a href="#blog">
                <li className="group pl-6">
                  <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                    Blog
                  </span>

                  <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                </li>
              </a>

              <a href="#contact">
                <li className="group pl-6">
                  <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                    Contact
                  </span>

                  <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                </li>
              </a>
            </ul>
          </div>
          <div className="block lg:hidden">
            <button>
              <i className="bx bx-menu text-4xl text-white"></i>
            </button>
          </div>
        </div>
      </div>
      <div className="pointer-events-none fixed inset-0 z-70 min-h-screen bg-black bg-opacity-70 opacity-0 transition-opacity lg:hidden">
        <div className="absolute right-0 min-h-screen w-2/3 bg-primary py-4 px-8 shadow md:w-1/3">
          <button className="absolute top-0 right-0 mt-4 mr-4">
            <img
              src="/assets/img/icon-close.svg"
              className="h-10 w-auto"
              alt=""
            />
          </button>

          <ul className="mt-8 flex flex-col">
            <li className="py-2">
              <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                About
              </span>
            </li>

            <li className="py-2">
              <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                Services
              </span>
            </li>

            <li className="py-2">
              <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                Portfolio
              </span>
            </li>

            <li className="py-2">
              <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                Clients
              </span>
            </li>

            <li className="py-2">
              <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                Work
              </span>
            </li>

            <li className="py-2">
              <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                Statistics
              </span>
            </li>

            <li className="py-2">
              <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                Blog
              </span>
            </li>

            <li className="py-2">
              <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                Contact
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto grid w-full grid-cols-1 gap-6 pt-12 sm:w-3/4 lg:w-full lg:grid-cols-3 xl:gap-10">
        {blogs?.map((blog) => (
          <Link
            href={`/blog/${blog?.slug.current}`}
            key={blog.slug.current}
            className="shadow"
          >
            <div
              style={{
                backgroundImage: `url(${builder.image(blog.poster).url()})`,
              }}
              className="group relative h-72 bg-cover bg-center bg-no-repeat sm:h-84 lg:h-64 xl:h-72"
            >
              <span className="absolute inset-0 block bg-gradient-to-b from-blog-gradient-from to-blog-gradient-to bg-cover bg-center bg-no-repeat opacity-10 transition-opacity group-hover:opacity-50"></span>
              <span className="absolute right-0 bottom-0 mr-4 mb-4 block rounded-full border-2 border-white px-6 py-2 text-center font-body text-sm font-bold uppercase text-white md:text-base">
                Read More
              </span>
            </div>
            <div className="bg-white py-6 px-5 xl:py-8">
              <span className="block font-body text-lg font-semibold text-black">
                {blog?.title}
              </span>
              <span className="block pt-2 font-body text-grey-20">
                {blog.metaDescription}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Blog;
