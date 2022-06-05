import {useEffect, useState} from "react";

const useHasChange = (dependencies) => {
  const [changed, setChange] = useState(false)

  useEffect(() => {
    setChange(true);
  },  Object.values(dependencies))

  useEffect(() => {
    if(!changed)
      return;

    setTimeout(() => {
      setChange(false);
    }, 1200);
  },  [changed])

  return changed;
}

export default useHasChange;
