import useHasChange from "../hooks/useHasChange";

function SecondChildren({children, ...props}){
  const changed = useHasChange(Object.values(props))

  console.log(changed)
  return <div className={`second-children ${changed ? "reactive" : ""}`}>
    {children}
  </div>;
}

export default SecondChildren;
