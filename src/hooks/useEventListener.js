import { useEffect } from "react";

const useEventListener = (event, callback) => {
  useEffect(() => {
    document.body.addEventListener(event, callback);
    return () => {
      document.body.removeEventListener(event, callback);
    };
  }, []);
};

export default useEventListener;
