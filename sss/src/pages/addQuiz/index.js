import axios from 'axios';
import { useState } from 'react';
import { useRouter } from "next/navigation";
import css from './index.module.css'
export default function Home() {
  const [itemName, setItemName] = useState("");
  const [itemPrice, setItemPrice] = useState("");
  const [itemUrl, setItemUrl] = useState("");
  const router = useRouter();
  const post = async () => {
    await axios.post('http://localhost:8000/AddQuiz', {
        url: itemUrl,
        price: itemPrice,
        name: itemName,
        }).then((res) => {
          if(res.status == 200){
            setItemName("");
            setItemPrice("");
            setItemUrl("");
            router.push("/")
          }
        });
  };
    return (
      <div className={css.body}>
        <div className={css.Div}>
          <h1>AddQuiz</h1>
            <div className={css.Div1}>
                  <div>
                      <p className={css.title}>Name</p>
                      <input
                      type='text'
                      className={css.Input} 
                      placeholder="Name" 
                      value={itemName} 
                      onChange={(e) => setItemName(e.target.value)} />
                    </div>
                    <div>
                      <p className={css.title}>Price</p>
                      <input
                      type='number'
                      className={css.Input} 
                      placeholder="price" 
                      value={itemPrice} 
                      onChange={(e) => setItemPrice(e.target.value)} />
                    </div>
                    <div>
                      <p className={css.title}>Image or URL</p>
                      <input
                      type='text'
                      className={css.Input} 
                      placeholder="Url" 
                      value={itemUrl} 
                      onChange={(e) => setItemUrl(e.target.value)} />
                    </div>
            </div>
                <button onClick={post} className={css.Post}>Post</button>
        </div>
      </div>
    )
  }