import axios from 'axios';
import { useState } from 'react';
import { useRouter } from "next/navigation";
import css from './index.module.css'
export default function Home() {
  const [itemName, setItemName] = useState("");
  const [itemName2, setItemName2] = useState("");
  const [itemPrice, setItemPrice] = useState("");
  const [itemPrice2, setItemPrice2] = useState("");
  const [itemUrl, setItemUrl] = useState("");
  const [itemUrl2, setItemUrl2] = useState("");
  const router = useRouter();
  const post = async () => {
    await axios.post('http://localhost:8000/AddQuiz', {
        url1: itemUrl,
        price1: itemPrice,
        name1: itemName,
        url2: itemUrl2,
        price2: itemPrice2,
        name2: itemName2,
        }).then((res) => {
          if(res.status == 200){
            setItemName("");
            setItemName2("");
            setItemPrice("");
            setItemPrice2("");
            setItemUrl("");
            setItemUrl2("");
            router.push("/")
          }
        });
  };
    return (
      <div className={css.body}>
        <div className={css.Div}>
            <div className={css.Div1}>
                <div>
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
                      <p className={css.title}>Image URl</p>
                      <input
                      type='text'
                      className={css.Input} 
                      placeholder="Url" 
                      value={itemUrl} 
                      onChange={(e) => setItemUrl(e.target.value)} />
                    </div>
                </div>
                <div>
                    <div>
                      <p className={css.title}>Name</p>
                      <input
                      type='text'
                      className={css.Input} 
                      placeholder="Name" 
                      value={itemName2} 
                      onChange={(e) => setItemName2(e.target.value)} />
                    </div>
                    <div>
                      <p className={css.title}>Price</p>
                      <input
                      type='number'
                      className={css.Input} 
                      placeholder="price" 
                      value={itemPrice2} 
                      onChange={(e) => setItemPrice2(e.target.value)} />
                    </div>
                    <div>
                      <p className={css.title}>Image  Url</p>
                      <input
                      type='text'
                      className={css.Input} 
                      placeholder="Url" 
                      value={itemUrl2} 
                      onChange={(e) => setItemUrl2(e.target.value)} />
                    </div>
                </div>
            </div>
                <button onClick={post} className={css.Post}>Post</button>
        </div>
      </div>
    )
  }