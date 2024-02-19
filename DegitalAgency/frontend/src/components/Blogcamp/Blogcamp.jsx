import BlogCard from "./BlogCard";
import img1 from "../../assets/blog/blog1.png";
import img2 from "../../assets/blog/blog2.png";
import img3 from "../../assets/blog/blog3.png";

const BlogsData = [
  {
    id: 1,
    image: img1,
    title: "Realtime analytics",
    description:
      " The results have been incredible.With Power Digital it feels like they  are in our trench, supporting and understanding us. They are like a partner and mentor in helping us get where we want to be . The results have been incredible ",
    author: "Someone",
    date: "April 22,2022",
    aosDelay: "0",
  },
  {
    id: 2,
    image: img2,
    title: "Realtime analytics",
    description:
      "The results have been incredible.With Power Digital it feels like they  are in our trench, supporting and understanding us. They are like a partner and mentor in helping us get where we want to be . The results have been incredible",
    author: "Someone",
    date: "April 22,2022",
    aosDelay: "300",
  },
  {
    id: 3,
    image: img3,
    title: "Realtime analytics",
    description:
      "The results have been incredible.With Power Digital it feels like they  are in our trench, supporting and understanding us. They are like a partner and mentor in helping us get where we want to be . The results have been incredible",
    author: "Someone",
    date: "April 22 2022",
    aosDelay: "500",
  },
];

const Blogcamp = () => {
  return (
    <>
      <div className="bg-gray-100 dark:bg-gray-900 dark:text-white py-10 pb-14">
        <section data-aos="fade-up" className="container ">
          <h1
            data-aos="fade-up"
            className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-semibold"
          >
            Our Blogs
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BlogsData.map((item) => (
              <BlogCard key={item.id} {...item} />
            ))}
          </div>
          <div data-aos="fade-up" data-aos-offset="0" className="text-center">
            <button className="btn-primary">View All Posts</button>
          </div>
        </section>
      </div>
    </>
  );
};

export default Blogcamp;
