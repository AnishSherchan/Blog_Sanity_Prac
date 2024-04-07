import React from "react";
import Script from "next/script";
import { client } from "../../sanity/client";
import { SanityDocument } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import moment from "moment";
import urlBuilder from "@sanity/image-url";
import { useParams } from "next/navigation";
import { PortableText } from "@portabletext/react";
import Head from "next/head";

const Slug = async ({ params }: { params: { slug: string } }) => {
  const BLOG_QUERY = `*[_type == "blog" && slug.current == "${params.slug}"][0]`;
  const blog: any = await client.fetch<SanityDocument[any]>(BLOG_QUERY);
  const AUTHOR_QUERY = `*[_type == "author" && _id == "${blog.author._ref}"][0]`;
  const author: any = await client.fetch(AUTHOR_QUERY);
  const builder = imageUrlBuilder(client);
  console.log(builder.image(author.image).url());

  const myPortableTextComponents = {
    types: {
      image: ({ value, isInline }: { value: string; isInline: string }) => (
        <img
          src={urlBuilder(client)
            .image(value)
            .width(isInline ? 100 : 800)
            .fit("max")
            .auto("format")
            .url()}
        />
      ),
    },
  };
  return (
    <>
      <Script src="/assets/js/main.js"></Script>

      <Head>
        <meta content="IE=edge,chrome=1" http-equiv="X-UA-Compatible" />

        <meta
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
          name="viewport"
        />

        <title>testetstafusyvibias</title>

        <meta
          property="og:title"
          content="How to become a frontend developer | Atom Template"
        />

        <meta property="og:locale" content="en_US" />

        <link rel="canonical" href="//post" />

        <meta property="og:url" content="//post" />

        <meta
          name="description"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />

        <link rel="icon" type="image/png" href="/assets/img/favicon.png" />

        <meta name="theme-color" content="#5540af" />

        <meta property="og:site_name" content="Atom Template" />

        <meta property="og:image" content="//assets/img/social.jpg" />

        <meta name="twitter:card" content="summary_large_image" />

        <meta name="twitter:site" content="@tailwindmade" />

        <link href="https://fonts.gstatic.com" rel="preconnect" />

        <link
          as="style"
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&family=Raleway:wght@400;500;600;700&display=swap"
          rel="preload"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&family=Raleway:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />

        <link
          href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css"
          rel="stylesheet"
        />

        <link
          href="/assets/styles/main.min.css"
          media="screen"
          rel="stylesheet"
        />

        <script
          defer
          src="https://unpkg.com/@alpine-collective/toolkit@1.0.0/dist/cdn.min.js"
        ></script>

        <script
          defer
          src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"
        ></script>

        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.7.2/styles/atom-one-dark.min.css"
        />
      </Head>

      <div id="main" className="relative">
        <div>
          <div className="w-full z-50 top-0 py-3 sm:py-5  bg-primary ">
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
                  <li className="group pl-6">
                    <a
                      href="/#about"
                      className="cursor-pointe pt-0.5 font-header font-semibold uppercase text-white"
                    >
                      About
                    </a>

                    <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                  </li>

                  <li className="group pl-6">
                    <a
                      href="/#services"
                      className="cursor-pointe pt-0.5 font-header font-semibold uppercase text-white"
                    >
                      Services
                    </a>

                    <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                  </li>

                  <li className="group pl-6">
                    <a
                      href="/#portfolio"
                      className="cursor-pointe pt-0.5 font-header font-semibold uppercase text-white"
                    >
                      Portfolio
                    </a>

                    <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                  </li>

                  <li className="group pl-6">
                    <a
                      href="/#clients"
                      className="cursor-pointe pt-0.5 font-header font-semibold uppercase text-white"
                    >
                      Clients
                    </a>

                    <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                  </li>

                  <li className="group pl-6">
                    <a
                      href="/#work"
                      className="cursor-pointe pt-0.5 font-header font-semibold uppercase text-white"
                    >
                      Work
                    </a>

                    <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                  </li>

                  <li className="group pl-6">
                    <a
                      href="/#statistics"
                      className="cursor-pointe pt-0.5 font-header font-semibold uppercase text-white"
                    >
                      Statistics
                    </a>

                    <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                  </li>

                  <li className="group pl-6">
                    <a
                      href="/#blog"
                      className="cursor-pointe pt-0.5 font-header font-semibold uppercase text-white"
                    >
                      Blog
                    </a>

                    <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                  </li>

                  <li className="group pl-6">
                    <a
                      href="/#contact"
                      className="cursor-pointe pt-0.5 font-header font-semibold uppercase text-white"
                    >
                      Contact
                    </a>

                    <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                  </li>
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
                  <a
                    href="/#about"
                    className="pt-0.5 font-header font-semibold uppercase text-white"
                  >
                    About
                  </a>
                </li>

                <li className="py-2">
                  <a
                    href="/#services"
                    className="pt-0.5 font-header font-semibold uppercase text-white"
                  >
                    Services
                  </a>
                </li>

                <li className="py-2">
                  <a
                    href="/#portfolio"
                    className="pt-0.5 font-header font-semibold uppercase text-white"
                  >
                    Portfolio
                  </a>
                </li>

                <li className="py-2">
                  <a
                    href="/#clients"
                    className="pt-0.5 font-header font-semibold uppercase text-white"
                  >
                    Clients
                  </a>
                </li>

                <li className="py-2">
                  <a
                    href="/#work"
                    className="pt-0.5 font-header font-semibold uppercase text-white"
                  >
                    Work
                  </a>
                </li>

                <li className="py-2">
                  <a
                    href="/#statistics"
                    className="pt-0.5 font-header font-semibold uppercase text-white"
                  >
                    Statistics
                  </a>
                </li>

                <li className="py-2">
                  <a
                    href="/#blog"
                    className="pt-0.5 font-header font-semibold uppercase text-white"
                  >
                    Blog
                  </a>
                </li>

                <li className="py-2">
                  <a
                    href="/#contact"
                    className="pt-0.5 font-header font-semibold uppercase text-white"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <div className="container py-6 md:py-10">
              <div className="mx-auto max-w-4xl">
                <div className="">
                  <h1 className="pt-5 font-body text-3xl font-semibold text-primary sm:text-4xl md:text-5xl xl:text-6xl">
                    {blog?.title}
                  </h1>
                  <div className="flex items-center pt-5 md:pt-10">
                    <div>
                      <img
                        src={builder.image(author.image).url()}
                        className="h-20 object-cover w-20 rounded-full border-2 border-grey-70 shadow"
                        alt="author image"
                      />
                    </div>
                    <div className="pl-5">
                      <span className="block font-body text-xl font-bold text-grey-10">
                        {author.name}
                      </span>
                      <span className="block pt-1 font-body text-xl font-bold text-grey-30">
                        {moment(author._createdAt).utc().format("YYYY-MM-DD")}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="prose max-w-none pt-8">
                  <PortableText
                    value={blog.content}
                    components={myPortableTextComponents}
                  />
                </div>
              </div>
            </div>
            <div className="flex pt-10">
              <a
                href="/"
                className="rounded-xl bg-primary px-4 py-1 font-body font-bold text-white hover:bg-grey-20"
              >
                Frontend
              </a>
              <a
                href="/"
                className="ml-2 block rounded-xl bg-primary px-4 py-1 font-body font-bold text-white hover:bg-grey-20"
              >
                Design
              </a>
            </div>
            <div className="mt-10 flex justify-between border-t border-lila py-12">
              <a href="/" className="flex items-center">
                <i className="bx bx-left-arrow-alt text-2xl text-primary"></i>
                <span className="block pl-2 font-body text-lg font-bold uppercase text-primary md:pl-5">
                  Previous Post
                </span>
              </a>
              <a href="/" className="flex items-center">
                <span className="block pr-2 font-body text-lg font-bold uppercase text-primary md:pr-5">
                  Next Post
                </span>
                <i className="bx bx-right-arrow-alt text-2xl text-primary"></i>
              </a>
            </div>
            <div className="flex flex-col items-center border-t border-lila py-12 pt-12 md:flex-row md:items-start xl:pb-20">
              <div className="w-3/4 sm:w-2/5 lg:w-1/4 xl:w-1/5">
                <img
                  src="/assets/img/blog-author.jpg"
                  className="rounded-full shadow"
                  alt="author image"
                />
              </div>
              <div className="ml-0 text-center md:ml-10 md:w-5/6 md:text-left">
                <h3 className="pt-10 font-body text-2xl font-bold text-secondary md:pt-0">
                  Christy Smith
                </h3>
                <p className="pt-5 font-body text-lg leading-8 text-secondary sm:leading-9 md:text-xl md:leading-9 lg:leading-9 xl:leading-9">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit.
                </p>
                <div className="flex items-center justify-center pt-5 md:justify-start">
                  <a href="/">
                    <i className="bx bxl-facebook-square text-2xl text-primary hover:text-yellow"></i>
                  </a>
                  <a href="/" className="pl-4">
                    <i className="bx bxl-twitter text-2xl text-primary hover:text-yellow"></i>
                  </a>
                  <a href="/" className="pl-4">
                    <i className="bx bxl-dribbble text-2xl text-primary hover:text-yellow"></i>
                  </a>
                  <a href="/" className="pl-4">
                    <i className="bx bxl-linkedin text-2xl text-primary hover:text-yellow"></i>
                  </a>
                  <a href="/" className="pl-4">
                    <i className="bx bxl-instagram text-2xl text-primary hover:text-yellow"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-primary">
        <div className="container flex flex-col justify-between py-6 sm:flex-row">
          <p className="text-center font-body text-white md:text-left">
            © Copyright 2022. All right reserved, ATOM.
          </p>
          <div className="flex items-center justify-center pt-5 sm:justify-start sm:pt-0">
            <a href="/">
              <i className="bx bxl-facebook-square text-2xl text-white hover:text-yellow"></i>
            </a>
            <a href="/" className="pl-4">
              <i className="bx bxl-twitter text-2xl text-white hover:text-yellow"></i>
            </a>
            <a href="/" className="pl-4">
              <i className="bx bxl-dribbble text-2xl text-white hover:text-yellow"></i>
            </a>
            <a href="/" className="pl-4">
              <i className="bx bxl-linkedin text-2xl text-white hover:text-yellow"></i>
            </a>
            <a href="/" className="pl-4">
              <i className="bx bxl-instagram text-2xl text-white hover:text-yellow"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slug;
