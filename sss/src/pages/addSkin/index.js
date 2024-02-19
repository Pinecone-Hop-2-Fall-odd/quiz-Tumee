import axios from "axios";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import css from "./index.module.css";
export default function Home(props) {
  const params = useSearchParams();
  const image = params.get("quizIMG")
  const quizN = params.get("quizName");
  const [itemName, setItemName] = useState("");
  const [itemPrice, setItemPrice] = useState("");
  const [itemUrl, setItemUrl] = useState("");
  const [itemName_2, setItemName_2] = useState("");
  const [itemPrice_2, setItemPrice_2] = useState("");
  const [itemUrl_2, setItemUrl_2] = useState("");
  const router = useRouter();
  const post = async () => {
    await axios
    .post("http://localhost:8000/AddQuiz", {
      url_1: itemUrl,
      price_1: itemPrice,
      name_1: itemName,
      url_2: itemUrl_2,
      price_2: itemPrice_2,
      name_2: itemName_2,
      quizIMG: image,
      quizName: quizN,
    })
    .then((res) => {
      if (res.status == 200) {
        router.push("/");
      }
    });
  };
  useEffect(() => {
    if (!image) {
      router.push(`/add`);
    }
  }, []);
  console.log(props);
  return (
    <div className={css.body}>
      <div className={css.Div}>
        <h1>AddQuiz</h1>
        <div>
          <p className={css.title}>{quizN}</p>
          <img width={200} height={100} src={image} />
        </div>
        <div className={css.Div1}>
          <div>
            <div>
              <p className={css.title}>Name</p>
              <input
                type="text"
                className={css.Input}
                placeholder="Name"
                value={itemName}
                onChange={(e) => setItemName(e.target.value)}
              />
            </div>
            <div>
              <p className={css.title}>Price</p>
              <input
                type="number"
                className={css.Input}
                placeholder="price"
                value={itemPrice}
                onChange={(e) => setItemPrice(e.target.value)}
              />
            </div>
            <div>
              <p className={css.title}>Image URL</p>
              <input
                type="text"
                className={css.Input}
                placeholder="Url"
                value={itemUrl}
                onChange={(e) => setItemUrl(e.target.value)}
              />
            </div>
          </div>
          <div>
            <div>
              <p className={css.title}>Name</p>
              <input
                type="text"
                className={css.Input}
                placeholder="Name"
                value={itemName_2}
                onChange={(e) => setItemName_2(e.target.value)}
              />
            </div>
            <div>
              <p className={css.title}>Price</p>
              <input
                type="number"
                className={css.Input}
                placeholder="price"
                value={itemPrice_2}
                onChange={(e) => setItemPrice_2(e.target.value)}
              />
            </div>
            <div>
              <p className={css.title}>Image URL</p>
              <input
                type="text"
                className={css.Input}
                placeholder="Url"
                value={itemUrl_2}
                onChange={(e) => setItemUrl_2(e.target.value)}
              />
            </div>
          </div>
        </div>
        <button onClick={post} className={css.Post}>
          Post
        </button>
      </div>
    </div>
  );
}
