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
  const [] = useState("")
  const router = useRouter();
  const post = async () => {
    await axios.post('http://localhost:8000/addQuiz', {
        skin1: item,
        skin2: item2 
        });
  };
    return (
      <div className={css.body}>
        <div className={css.Div}>
            <div className={css.Div1}>
                <div>
                    <input 
                    type='text'
                    className={css.Input} 
                    placeholder="imgURL_1" 
                    value={itemName} 
                    onChange={(e) => setItemName(e.target.value)} />
                    <input 
                    type='text'
                    className={css.Input} 
                    placeholder="name_1" 
                    value={itemName2} 
                    onChange={(e) => setItemName2(e.target.value)} />
                    <input 
                    type='number'
                    className={css.Input} 
                    placeholder="price_1" 
                    value={itemPrice} 
                    onChange={(e) => setItemPrice(e.target.value)} />
                </div>
                <div>
                    <input 
                    type='text'
                    className={css.Input} 
                    placeholder="imgURL_2" 
                    value={itemPrice2} 
                    onChange={(e) => setItemPrice2(e.target.value)} />
                    <input 
                    type='text'
                    className={css.Input} 
                    placeholder="name_2" 
                    value={itemUrl} 
                    onChange={(e) => setItemUrl(e.target.value)} />
                    <input 
                    type='number'
                    className={css.Input} 
                    placeholder="price_2" 
                    value={itemUrl2} 
                    onChange={(e) => setItemUrl2(e.target.value)} />
                </div>
                <button onClick={post} className={css.lOGIN}>Post</button>
            </div>
        </div>
      </div>
    )
  }