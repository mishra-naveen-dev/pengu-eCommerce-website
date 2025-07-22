import React from "react";
import img1 from "../assets/images/blog/img-1.jpg";
import img2 from "../assets/images/blog/img-2.jpg";
import img3 from "../assets/images/blog/img-3.jpg";

const LatestNews = () => {
  const blogPosts = [
    {
      id: 1,
      image: img1,
      category: "Fasion",
      author: "Jastin Wastal",
      date: "15 Sep 2023",
      title: "New season modern scarf",
      excerpt:
        "Etiam facisis urna dignissim dui quisque in mauris viverra Nulla placerat suscipit integer enim.",
    },
    {
      id: 2,
      image: img2,
      category: "Trending",
      author: "Jastin Wastal",
      date: "20 Sep 2023",
      title: "Summer Trending 2023",
      excerpt:
        "Etiam facisis urna dignissim dui quisque in mauris viverra Nulla placerat suscipit integer enim.",
    },
    {
      id: 3,
      image: img3,
      category: "Lifestyle",
      author: "Jastin Wastal",
      date: "25 Sep 2023",
      title: "Top 10 Curley Hairstyle",
      excerpt:
        "Etiam facisis urna dignissim dui quisque in mauris viverra Nulla placerat suscipit integer enim.",
    },
  ];

  return (
    <section className="wpo-blog-section section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-12">
            <div className="wpo-section-title">
              <h2>Latest News</h2>
              <p>Here is our top newses for your fasion guide.</p>
            </div>
          </div>
        </div>
        <div className="blog-wrap">
          <div className="row">
            {blogPosts.map((post) => (
              <div className="col-lg-4 col-md-6 col-12" key={post.id}>
                <div className="blog-item">
                  <div className="post-image">
                    <div className="post-img-title">
                      <span>{post.category}</span>
                    </div>
                    <img src={post.image} alt={post.title} />
                  </div>
                  <div className="post-content">
                    <ul className="post-date">
                      <li>By {post.author}</li>
                      <li>{post.date}</li>
                    </ul>
                    <h2>
                      <a href="blog-single.html">{post.title}</a>
                    </h2>
                    <p>{post.excerpt}</p>
                    <a className="post-btn" href="blog-single.html">
                      Read More...
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
