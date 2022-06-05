import useHasChange from "../hooks/useHasChange";
import SecondChildren from "./SecondChildren";

function Children({incremental, position, onChangeElement}){
  const changed = useHasChange([incremental, position])

  return <div className={`children ${changed ? "reactive" : ""}`}>
    <p> Counter {incremental} </p>
    <button onClick={onChangeElement}>Update</button>

    <SecondChildren position={position}>
      <p>{position}</p>
    </SecondChildren>

    <SecondChildren incremental={incremental}>
      <p>{incremental}</p>
    </SecondChildren>
  </div>;
}

export default Children;
