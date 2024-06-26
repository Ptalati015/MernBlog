import React from "react";
import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import { BsGithub , BsInstagram, BsInfoCircle, BsHouse, BsDribbble} from "react-icons/bs";
export default function FooterCom() {
  return (
    <Footer container className="border border-t-8 border-teal-500">
      <div className=" w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className=" mt-5">
            <Link
              to="/"
              className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white"
            >
              <span className=" px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
                Talati's
              </span>
              Blog
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="About" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="idkyet.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  demo PROJECTS
                </Footer.Link>

                <Footer.Link
                  href="./about"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Talati's Blog
                </Footer.Link>
              </Footer.LinkGroup>
            </div>

            <div>
              <Footer.Title title="Follow Us" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://github.com/Ptalati015"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </Footer.Link>

                <Footer.Link href="#">Discord</Footer.Link>
              </Footer.LinkGroup>
            </div>

            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Privacy Policy</Footer.Link>

                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider></Footer.Divider>
        <div className="w-full sm:flex sm:items-center sm:justify-between"> 
          <Footer.Copyright
            href="#"
            by="Preet's Blog"
            year={new Date().getFullYear()}
          ></Footer.Copyright>
          <div className= "flex gap-6 sm:mt-0 mt-4 sm:justify-center">
          <Footer.Icon href = "https://ptalat2.github.io/Portfolios/" icon ={BsHouse}></Footer.Icon>
            <Footer.Icon href = "" icon ={BsInfoCircle}></Footer.Icon>
            <Footer.Icon href = "#" icon ={BsInstagram}></Footer.Icon>
            <Footer.Icon href = "https://github.com/Ptalati015" icon ={BsGithub}></Footer.Icon>
            <Footer.Icon href = "#" icon ={BsDribbble}></Footer.Icon>
          </div>
        </div>
      </div>
    </Footer>
  );
}
