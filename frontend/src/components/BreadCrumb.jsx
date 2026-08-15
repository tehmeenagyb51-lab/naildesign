import { Link } from "react-router-dom";
import { VscChevronRight } from "react-icons/vsc";

export default function BreadCrumb({ page }) {
  return (
    <header>
      <div className="wrapper">
        <div className="bg-accent p-5 lg:p-8 flex justify-between items-center">
          <ul className="flex items-center flex-wrap gap-1 capitalize">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li><VscChevronRight className="text-lg" /></li>
            <li>{page}</li>
          </ul>
        </div>
      </div>
    </header>
  );
}
