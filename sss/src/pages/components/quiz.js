import { useRouter } from "next/router";

export const Quiz = ({ IMG, Name, onclick }) => {
  const router = useRouter();
  const styling = {
    backgroundImage: `url('${IMG}')`,
  };
  return (
    <button className="startButton" style={styling} onClick={onclick}>
      {Name}
    </button>
  );
};
