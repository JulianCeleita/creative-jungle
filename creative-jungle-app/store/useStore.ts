"use client"
import { type Post, type PostId, type Action, type State } from "@/typings";
import { useReducer } from "react";

export const initialState: State = {
  postList: [],
  error: null,
  isLoading: false,
  filter: null,
};

export function reducer(state: State, action: Action) {
  const { type } = action;
  if (type === "LOADING_NEW_CARDS") {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (type === "ADD_NEW_CARDS") {
    return {
      ...initialState,
      postList: [...state.postList, ...action.payload], 
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
  if (type === "SET_FILTER") { 
    return {
      ...state,
      filter: action.payload,
    };
  }
  return state;
}

export function useStore() {
  const [{ postList, error, isLoading, filter }, dispatch] = useReducer(
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

  const setFilter = (payload: PostId | null) => { 
    dispatch({ type: "SET_FILTER", payload });
  };
const maxCardId= postList.reduce((acc, post) => Math.max(acc, post.id), 0);

  return {
    postList,
    error,
    isLoading,
    filter,
    setLoadingNewCards,
    setAddNewCards,
    setLoadingFailedCards,
    setDeleteCard,
    setFilter,
    maxCardId
  };
}
export type Store = ReturnType<typeof useStore>;