import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

import { socialLinks } from '../consts/socialLinks'

function Footer() {

  return (
    <footer className="bg-snow dark:bg-deep sticky md:fixed inset-x-0 bottom-0">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">©2024 <a href="/" className="hover:underline">Dodekath3on™</a>. All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <a href="#" target='_blank' rel='noopener noreferrer' className="text-gray-500 hover:text-accent dark:hover:text-white">
              <FaFacebookF />
              <span className="sr-only">Facebook page</span>
                </a>
                <a href="#" target='_blank' rel='noopener noreferrer' className="text-gray-500 hover:text-accent dark:hover:text-white ms-5">
                  <FaDiscord />
                  <span className="sr-only">Discord community</span>
                </a>
                <a href="#" target='_blank' rel='noopener noreferrer' className="text-gray-500 hover:text-accent dark:hover:text-white ms-5">
                  <FaXTwitter />
                  <span className="sr-only">Twitter page</span>
                </a>
                <a href="https://github.com/Dodekath3on" target='_blank' rel='noopener noreferrer' className="text-gray-500 hover:text-accent dark:hover:text-white ms-5">
                  <FaGithub />
                  <span className="sr-only">GitHub account</span>
              </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer