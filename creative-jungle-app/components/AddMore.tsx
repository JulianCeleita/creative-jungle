import { postApiURL } from "@/config/urls.config";
import { StoreContext } from "@/store/StoreContext";
import { type Post } from "@/typings";
import { useContext } from "react";

export const MAX_ITEMS = 100;

const AddMore = () => {
  const { setAddNewCards, setLoadingFailedCards, maxCardId } =
    useContext(StoreContext);

  async function fetchPosts() {
    try {
      const itemsToLoad = 5;
      const response = await fetch(
        postApiURL(Math.min(maxCardId, MAX_ITEMS - itemsToLoad), itemsToLoad)
      );
      setAddNewCards((await response.json()) as Post[]);
    } catch (error) {
      setLoadingFailedCards(error);
    }
  }
  if (maxCardId >= MAX_ITEMS) {
    return <div>No hay más resultados</div>;
  }
  return (
    <button
      className="bg-[#1B6B93] text-white p-4 rounded-3xl shadow mb-4 hover:opacity-90"
      onClick={() => fetchPosts()}
    >
      Ver más
    </button>
  );
};

export default AddMore;
