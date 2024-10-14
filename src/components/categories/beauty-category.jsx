import React from "react";
import Link from "next/link";
// internal
import ErrorMsg from "../common/error-msg";
import { ArrowRightSm, ArrowRightSmTwo } from "@/svg";
import { useGetShowCategoryQuery } from "@/redux/features/categoryApi";
import { HomeThreeCategoryLoader } from "../loader";
import { useRouter } from "next/router";
const BeautyCategory = () => {
  const router = useRouter();
  const {
    data: categories,
    isLoading,
    isError,
  } = useGetShowCategoryQuery("show");

  // handle category route
  const handleCategoryRoute = (title) => {
    router.push(
      `/shop?category=${title
        .toLowerCase()
        .replace("&", "")
        .split(" ")
        .join("-")}`
    );
  };
  // decide what to render
  let content = null;

  if (isLoading) {
    content = <HomeThreeCategoryLoader loading={isLoading} />;
  }
  if (!isLoading && isError) {
    content = <ErrorMsg msg="There was an error" />;
  }
  if (!isLoading && !isError && categories?.result?.length === 0) {
    content = <ErrorMsg msg="No Category found!" />;
  }
  if (!isLoading && !isError && categories?.result?.length > 0) {
    const category_items = categories.result;
    content = category_items.map((item) => (
      <div key={item._id} className="col-4 col-lg-2 ">
        <div className="tp-category-item-3 p-relative black-bg text-center z-index-1 fix  rounded-circle ">
          <div
            className="tp-category-thumb-3 cursor-pointer include-bg ratio ratio-16x9"
            style={{ backgroundImage: `url(${item.img.replace(/\\/g, "/")})` }}
            onClick={() => handleCategoryRoute(item.parent)}
          ></div>
          {/* {item.parent} */}

          <div className="tp-category-content-3 transition-3">
            {/* <h3 className="tp-category-title-3">
              <a
                className="cursor-pointer"
                onClick={() => handleCategoryRoute(item.parent)}
              >
              </a>
            </h3> */}
            {/* <span className="tp-categroy-ammount-3">
              {item.products.length} Products
            </span> */}
            {/* <div className="tp-category-btn-3">
              <a
                onClick={() => handleCategoryRoute(item.parent)}
                className="cursor-pointer tp-link-btn tp-link-btn-2"
              >
                View Now
                <ArrowRightSm />
              </a>
            </div> */}
          </div>
        </div>
        <div className="mt-6px">{item.parent}</div>
      </div>
    ));
  }
  return (
    <>
      <section className="tp-category-area pt-95">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-lg-6 col-md-8">
              {/* <div className="tp-section-title-wrapper-3 mb-45">
                <span className="tp-section-title-pre-3"> 
                  Product Collection
                </span>
                <h3 className="tp-section-title-3">Discover our products</h3>
              </div> */}
            </div>
            <div className="col-lg-6 col-md-4">
              <div className="tp-category-more-3 text-md-end mb-55">
                <Link href="/shop" className="tp-btn">
                  View All Products <ArrowRightSmTwo />
                </Link>
              </div>
            </div>
          </div>
          <div className="row">{content}</div>
        </div>
      </section>
    </>
  );
};

export default BeautyCategory;
