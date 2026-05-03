import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { useEffect, useState } from "react";
import { keywords } from "../utils/constant";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const getSearchSuggestions = () => {
    const json = keywords.filter((item) =>
      item.toLocaleLowerCase().startsWith(searchQuery.toLocaleLowerCase()),
    );
    console.log("json", json);
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      getSearchSuggestions();
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          className="h-8 cursor-pointer"
          src="https://cdn-icons-png.flaticon.com/128/6015/6015685.png"
          alt="menu"
          onClick={() => toggleMenuHandler()}
        />
        <a href="/">
          {" "}
          <img
            className="h-8 mx-2"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/3840px-Logo_of_YouTube_%282015-2017%29.svg.png"
            alt="youtube-logo"
          />
        </a>
      </div>
      <div className="col-span-10 px-10">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border border-gray-400 w-1/2 p-2 rounded-l-full"
        />
        <button className="border border-gray-400 p-2 rounded-r-full">
          Search
        </button>
      </div>
      <div className="col-span-1">
        <img
          className="h-8"
          alt="user"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&s"
        />
      </div>
    </div>
  );
};

export default Head;
