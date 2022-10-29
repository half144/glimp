import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    title ? (document.title = title) : null;
    return () => (document.title = "glimp");
  }, [title]);
};

export default useTitle;
