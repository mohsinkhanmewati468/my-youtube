import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { useEffect, useState } from "react";
import { keywords } from "../utils/constant";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();
  const getSearchSuggestions = () => {
    if (!searchQuery) {
      setSuggestions([]);
      return;
    }
    const json = keywords.filter((item) =>
      item.toLocaleLowerCase().startsWith(searchQuery.toLocaleLowerCase()),
    );
    setSuggestions(json);
    dispatch(cacheResults({ [searchQuery]: json }));
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

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
        <div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="px-5 border border-gray-400 w-1/2 p-2 rounded-l-full"
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="border border-gray-400 p-2 rounded-r-full">
            Search
          </button>
        </div>
        {showSuggestions && suggestions.length > 0 && (
          <div className="fixed bg-white py-2 px-2 w-140 shadow-lg rounded-lg border-gray-100">
            <ul>
              {suggestions.map((s, i) => (
                <li className="px-3 py-2 shadow-sm hover:bg-gray-100" key={i}>
                  🔍{s}
                </li>
              ))}
            </ul>
          </div>
        )}
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
