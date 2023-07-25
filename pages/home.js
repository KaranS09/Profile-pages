import React from "react";
import Brands from "../components/Explore/Brands";
import Deck from "../components/Explore/Deck";
import Header from "../components/Explore/Header";
import Image from "next/image";
import Footer from "../components/Footer";

const MainPage = () => (
  <main className="">
    <section class="bg-black opacity-95">
      <div class="grid max-w-screen-xl px-4 pt-20 pb-8 -mb-10 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
        <div class="mr-auto place-self-center lg:px-0 md:px-20 px-10 lg:col-span-7">
          <h1 class="max-w-2xl text-white text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl ''">
            <span className="text-6 xl text-blue-700">Connect</span> with fellow
            developers <br />
            <br />
          </h1>
          <p class="mb-8 font-light text-gray-400 lg:text-xl mr-16">
            Welcome to BobDAO Commune, where developers unite to harness the
            true spirit of collaboration and innovation! Our platform serves as
            the perfect virtual gathering spot, bringing together coding
            enthusiasts, seasoned professionals, and aspiring developers from
            all walks of life. By joining our vibrant community, you'll gain
            access to a treasure trove of shared knowledge, creative ideas, and
            valuable insights that will fuel your projects and expand your skill
            set.
          </p>
        </div>
        <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <Image
            src="/connect.jpg"
            alt="hero image"
            width={500}
            height={500}
            className="shadow rounded-2xl"
          />
        </div>
      </div>
    </section>

    <section class="bg-black opacity-95 lg:pl-20 md:px-20 sm:px-20 px-20">
      <div class="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
        <div class="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
          <Image
            src="/unify.jpg"
            alt="hero image"
            width={500}
            height={500}
            className="-rotate-3 rounded-2xl imageHide"
          />
          <div class="text-white sm:text-lg">
            <h2 class="mb-4 text-3xl font-extrabold tracking-tight text-white ''">
              <span className="text-4xl text-blue-700">Unified</span> Digital
              Identity
            </h2>
            <p class="mb-8 font-light text-gray-400 lg:text-xl">
              Say goodbye to cumbersome login processes and multiple passwords.
              UnifyID streamlines authentication by providing a seamless login
              experience, simplifying access to your favorite applications while
              ensuring top-notch security.
            </p>
          </div>
        </div>

        <div class="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
          <div class="text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 class="mb-4 text-3xl font-extrabold tracking-tight text-white ''">
              Secure Payment Gateway
            </h2>
            <p class="mb-8 font-light lg:text-xl">
              BitPay is a professional crypto payment gateway designed for the
              Bitfinity network, offering seamless and secure cryptocurrency
              transactions. With lightning-fast payments and immutable receipts,
              BitPay ensures a hassle-free experience for all your crypto
              transactions.
            </p>

            {/* <ul
              role="list"
              class="pt-8 space-y-5 border-t border-gray-200 my-7 ''"
            >
              <li class="flex space-x-3">
                <svg
                  class="flex-shrink-0 w-5 h-5 text-blue-500 dark:text-blue-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span class="text-base font-medium leading-tight text-white ''">
                  No middleman
                </span>
              </li>
              <li class="flex space-x-3">
                <svg
                  class="flex-shrink-0 w-5 h-5 text-blue-500 dark:text-blue-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span class="text-base font-medium leading-tight text-white ''">
                  Dispute resolution through DAO proposals
                </span>
              </li>
              <li class="flex space-x-3">
                <svg
                  class="flex-shrink-0 w-5 h-5 text-blue-500 dark:text-blue-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span class="text-base font-medium leading-tight text-white ''">
                  Transparent transactions
                </span>
              </li>
            </ul> */}
          </div>
          <Image
            src="/bitpay.jpg"
            alt="hero image"
            width={500}
            height={500}
            className="max-w-md rounded-2xl rotate-3 imageHide"
          />
        </div>
      </div>
    </section>
  </main>
);

const Header2 = () => (
  <div className="bg-black opacity-95 lg:pl-0 md:px-20 sm:px-20 px-20 text-white">
    <header id="header" class="fixed-top ">
      <div class="container d-flex align-items-center">
        <h1 class="logo me-auto">
          <a href="index.html">Arsha</a>
        </h1>

        <a href="index.html" class="logo me-auto">
          <img src="assets/img/logo.png" alt="" class="img-fluid" />
        </a>
      </div>
    </header>
  </div>
);

const HomePage = () => {
  return (
    <>
      <Header />
      <Brands />
      <MainPage />
      <Footer />
    </>
  );
};

export default HomePage;
