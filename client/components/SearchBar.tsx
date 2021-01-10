import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import styles from "../styles/SearchBar.module.scss";

const SearchBar = ({ callback }) => {
  const [inputText, setInputText] = useState("");
  return (
    <div className={styles.search_container}>
      <BiSearch className={styles.icon} />
      <input
        type="text"
        className={styles.searchbar}
        placeholder="Search..."
        onChange={(ev) => setInputText(ev.target.value)}
        onKeyPress={(ev) => {
          if (ev.key == "Enter") {
            callback(inputText);
          }
        }}
      />
    </div>
  );
};

export default SearchBar;
