import { useRouter } from "next/navigation";
export function Header(){
  const router = useRouter();
  const searchButton = (
    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
      <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
    </svg>
  );
  const addButton = <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg>
  return (
    <div className="HeaderDiv">
      <img onClick={() =>router.push(`/`)} className="quiz" src="./image/quiz.jpeg"/>
      <div className="inputDiv">
        <input className="searchInput" type="search" />
        <button className="searchButton">{searchButton}</button>
      </div>
      <div>
        <div>
          <p className="UserName"></p>
          <button className="CreateQuiz">{addButton}</button>
        </div>
        <img className="UserProfile"></img>
      </div>
    </div>
  );
}
