import { Post, PostId, type Action, type State } from "@/typings";
import { useReducer } from "react";

const initialState: State = {
  postList: [],
  error: null,
  isLoading: false,
};

function reducer(state: State, action: Action) {
  const { type } = action;
  if (type === "LOADING_NEW_CARDS") {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (type === "ADD_NEW_CARDS") {
    return {
      postList: [...state.postList, ...action.payload],
      isLoading: false,
      error: null,
    };
  }
  if (type === "LOADING_FAILED_CARDS") {
    return {
      ...state,
      isLoading: false,
      error: action.payload,
    };
  }
  if (type === "DELETE_CARD") {
    const newPostList = state.postList.filter(
      (post) => post.id !== action.payload
    );
    return {
      ...state,
      postList: newPostList,
    };
  }
  return state;
}

export function useStore() {
  const [{ postList, error, isLoading }, dispatch] = useReducer(
    reducer,
    initialState
  );

  const setLoadingNewCards = () => {
    dispatch({ type: "LOADING_NEW_CARDS" });
  };

  const setAddNewCards = (payload: Post[]) => {
    dispatch({ type: "ADD_NEW_CARDS", payload });
  };

  const setLoadingFailedCards = (payload: any) => {
    dispatch({ type: "LOADING_FAILED_CARDS", payload });
  };

  const setDeleteCard = (payload: PostId) => {
    dispatch({ type: "DELETE_CARD", payload });
  };

  return {
    postList,
    error,
    isLoading,
    setLoadingNewCards,
    setAddNewCards,
    setLoadingFailedCards,
    setDeleteCard,
  };
}
