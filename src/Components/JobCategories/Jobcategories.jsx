import { IoIosStar } from "react-icons/io";
import "./Jobcategories.css";
import { useContext } from "react";
import { FavoriteJobsContext } from "../../App";
import { Link } from "react-router-dom";

const jobCategories = [
  {
    id: 1,
    category: "Development & IT",
    rating: "4.85/5",
    works: "1853",
  },
  {
    id: 2,
    category: "AI Services",
    rating: "4.8/5",
    works: "256",
  },
  {
    id: 3,
    category: "Design & Creative",
    rating: "4.91/5",
    works: "758",
  },
  {
    id: 4,
    category: "Sales & Marketing",
    rating: "4.5/5",
    works: "369",
  },
  {
    id: 5,
    category: "Writing & Translation",
    rating: "4.92/5",
    works: "652",
  },
  {
    id: 6,
    category: "Admin & Customer Support",
    rating: "4.77/5",
    works: "508",
  },
  {
    id: 7,
    category: "Finance & Accounting",
    rating: "4.80/5",
    works: "248",
  },
  {
    id: 8,
    category: "Engineering & Architecture",
    rating: "4.85/5",
    works: "652",
  },
];

function Jobcategories() {
  const { isDark } = useContext(FavoriteJobsContext);
  return (
    <>
      <div className="categories-wrap">
        <h2>Browse jobs by category</h2>
        <div className="categories">
          {jobCategories.map((category) => (
            <div
              className={`category ${isDark && "dark-bg"}`}
              key={category.id}
            >
              <img src={`./${category.id}.png`} alt="" />
              <h2>{category.category}</h2>
              <div className="stats">
                <div className="rating">
                  <IoIosStar />
                  <p>{category.rating}</p>
                </div>
                <div className="jobs-num">
                  <p>{category.works} jobs</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Jobcategories;
