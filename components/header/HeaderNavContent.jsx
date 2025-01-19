"use client";

import Link from "next/link";
import {
  blogItems,
  resumeBuilderItems,
  candidateItems,
  employerItems,
  findJobItems,
  homeItems,
  pageItems,
  shopItems,
} from "../../data/mainMenuData";
import {
  isActiveParent,
  isActiveLink,
  isActiveParentChaild,
} from "../../utils/linkActiveChecker";
import { usePathname } from "next/navigation";

const HeaderNavContent = () => {
  return (
    <>
      <nav className="nav main-menu">
        <ul className="navigation" id="navbar">
          {/* current dropdown */}
          <li
            className={`${
              isActiveParent(homeItems, usePathname()) ? "current" : ""
            } dropdown`}
          >
            <Link href="home-17">Home</Link>
            {/* <span>Home2</span> */}
            {/* <div className="mega-menu">
              <div className="mega-menu-bar row pt-0">
                {homeItems.map((item) => (
                  <div
                    className="column col-lg-3 col-md-3 col-sm-12"
                    key={item.id}
                  >
                    <ul>
                      {item.items.map((menu, i) => (
                        <li
                          className={
                            isActiveLink(menu.routePath, usePathname())
                              ? "current"
                              : ""
                          }
                          key={i}
                        >
                          <Link href={menu.routePath}>{menu.name}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div> */}
          </li>
          {/* End homepage menu items */}

          {/* <li
            className={`${
              isActiveParent(findJobItems, usePathname()) ? "current" : ""
            } dropdown has-mega-menu`}
            id="has-mega-menu"
          >
            <Link href="job-list-v4">Find Jobs</Link>
            {/* <span>Find Jobs</span> */}
            {/* <div className="mega-menu">
              <div className="mega-menu-bar row">
                {findJobItems.map((item) => (
                  <div
                    className="column col-lg-3 col-md-3 col-sm-12"
                    key={item.id}
                  >
                    <h3>{item.title}</h3>
                    <ul>
                      {item.items.map((menu, i) => (
                        <li
                          className={
                            isActiveLink(menu.routePath, usePathname())
                              ? "current"
                              : ""
                          }
                          key={i}
                        >
                          <Link href={menu.routePath}>{menu.name}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div> */}
           {/*</li> */}
          {/* End findjobs menu items */}

          {/* <li
            className={`${
              isActiveParent(employerItems, usePathname()) ||
              usePathname()?.split("/")[1] === "employers-dashboard"
                ? "current"
                : ""
            } dropdown`}
          >
            <span>Employers</span>
            <ul>
              {employerItems.map((item) => (
                <li className="dropdown" key={item.id}>
                  <span
                    className={
                      isActiveParentChaild(item.items, usePathname())
                        ? "current"
                        : ""
                    }
                  >
                    {item.title}
                  </span>
                  <ul>
                    {item.items.map((menu, i) => (
                      <li
                        className={
                          isActiveLink(menu.routePath, usePathname())
                            ? "current"
                            : ""
                        }
                        key={i}
                      >
                        <Link href={menu.routePath}>{menu.name}</Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
              <li
                className={
                  usePathname()?.includes("/employers-dashboard")
                    ? "current"
                    : ""
                }
              >
                <Link href="/employers-dashboard/dashboard">
                  Employers Dashboard
                </Link>
              </li>
            </ul>
          </li> */}
          {/* End Employers menu items */}

          {/* <li
            className={`${
              isActiveParent(candidateItems, usePathname()) ||
              usePathname()?.split("/")[1] === "candidates-dashboard"
                ? "current"
                : ""
                ? "current"
                : ""
            } dropdown`}
          >
            <span>Candidates</span>
            <ul>
              {candidateItems.map((item) => (
                <li className="dropdown" key={item.id}>
                  <span
                    className={
                      isActiveParentChaild(item.items, usePathname())
                        ? "current"
                        : ""
                    }
                  >
                    {item.title}
                  </span>
                  <ul>
                    {item.items.map((menu, i) => (
                      <li
                        className={
                          isActiveLink(menu.routePath, usePathname())
                            ? "current"
                            : ""
                        }
                        key={i}
                      >
                        <Link href={menu.routePath}>{menu.name}</Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
              <li
                className={
                  usePathname()?.includes("/candidates-dashboard/")
                    ? "current"
                    : ""
                }
              >
                <Link href="/candidates-dashboard/dashboard">
                  Candidates Dashboard
                </Link>
              </li>
            </ul>
          </li> */}
          {/* End Candidates menu items */}
          <li
            className={`${
              isActiveParentChaild(resumeBuilderItems, usePathname()) ? "current" : ""
            } dropdown`}
          >
            <Link href="resume-builder">Resume Builder</Link>
          </li>
          <li
            className={`${
              isActiveParentChaild(blogItems, usePathname()) ? "current" : ""
            } dropdown`}
          >
            <Link href="blog-list-v3">Blog</Link>
            {/* <span>Blog</span>
            <ul>
              {blogItems.map((item, i) => (
                <li
                  className={
                    isActiveLink(item.routePath, usePathname()) ? "current" : ""
                  }
                  key={i}
                >
                  <Link href={item.routePath}>{item.name}</Link>
                </li>
              ))}
            </ul> */}
          </li>
          {/* End Blog menu items */}

          {/* <li
            className={`${
              isActiveParentChaild(pageItems, usePathname()) ||
              isActiveParentChaild(shopItems[0].items, usePathname())
                ? "current "
                : ""
            } dropdown`}
          >
            <span>Pages</span>
            <ul>
              {shopItems.map((item) => (
                <li className="dropdown" key={item.id}>
                  <span
                    className={`${
                      isActiveParentChaild(shopItems[0].items, usePathname())
                        ? "current "
                        : ""
                    }`}
                  >
                    {item.title}
                  </span>
                  <ul>
                    {item.items.map((menu, i) => (
                      <li
                        className={
                          isActiveLink(menu.routePath, usePathname())
                            ? "current"
                            : ""
                        }
                        key={i}
                      >
                        <Link href={menu.routePath}>{menu.name}</Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
              {pageItems.map((item, i) => (
                <li
                  className={
                    isActiveLink(item.routePath, usePathname()) ? "current" : ""
                  }
                  key={i}
                >
                  <Link href={item.routePath}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </li> */}
          {/* End Pages menu items */}
        </ul>
      </nav>
    </>
  );
};

export default HeaderNavContent;
