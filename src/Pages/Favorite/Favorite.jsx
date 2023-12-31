import { useEffect } from "react";

function Favorite() {
  useEffect(() => {
    document.title = "Favorite || Halal Jibika";
  }, []);
  return <div>Favorite</div>;
}

export default Favorite;
