import { NavLink } from "react-router";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col">
      Not Found your page, so waht bitchhhh go somewhere else..... aggghhh fck
      you, fck off!!
      <NavLink to="/" className="text-blue-500 underline">
        fck yourself and go to home page
      </NavLink>
    </div>
  );
};

export default NotFoundPage;
