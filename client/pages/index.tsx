import { useState } from "react";
import Card from "../components/Card";
import SearchBar from "../components/SearchBar";
import styles from "../styles/index.module.scss";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState([]);

  const search = async (username) => {
    const res = await axios.get(`http://localhost:5000/user/${username}`);
    setData(res.data.data);
  };

  const trim = (text: string): string => {
    if (text && text.length >= 400) {
      return text.slice(0, 400) + "...";
    } else {
      return text;
    }
  };

  const removeBracketText = (text: string): string => {
    if (text) {
      return text.replace(/\[.*\]/g, "");
    } else {
      return text;
    }
  };

  return (
    <>
      <div className={styles.bg}>
        <h3>Discover New Visual Novels</h3>
        <h2>Start by entering your VNDB username</h2>
      </div>
      <div className={styles.search}>
        <SearchBar callback={search} />
      </div>

      <div className={styles.cardgrid}>
        {data.map((vn) => {
          return (
            <Card
              title={vn.title}
              desc={trim(removeBracketText(vn.description))}
              cover={vn.image}
              link={`https://vndb.org/v${vn.id}`}
            />
          );
        })}
      </div>
    </>
  );
};

export default Home;
