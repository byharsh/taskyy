import avatar from "../../assets/images/avatar.jpg";

const Sidebar = () => {
  return (
    <aside className="max-w-60 min-w-14 bg-gray-400 h-full">
      <div className="flex h-full flex-col border-r p-4 items-center justify-between">
        <div className=" h-full flex flex-col border gap-20">
          <div className="bg-red-200">
            <img
              src={avatar}
              alt=""
              className="h-20 rounded-full border border-red-300 shadow-md"
            />

            <p>User Name</p>
            <p>Profile Type</p>
          </div>
          <div className="bg-blue-200">
            <nav>
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </nav>
          </div>
          <div className="bg-green-200">
            <p>Feeling Blank?</p>
            <p>Create a new page, </p>
            <button>Create Page</button>
          </div>
        </div>
        <div className="bg-yellow-200 w-full">
          <ul>
            <li>Settings</li>
            <li>Erase All</li>
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
