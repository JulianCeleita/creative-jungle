"use client";

import React, { useContext, useEffect } from "react";
import Card from "./Card";
import { type Post } from "@/typings";
import { postApiURL } from "@/config/urls.config";
import { StoreContext } from "@/store/StoreContext";
import { v4 as uuidv4 } from 'uuid';
import AddMore from "./AddMore";

export const CardList = () => { 
  const {
    postList,
    error,
    filter,
    isLoading,
    setLoadingNewCards,
    setAddNewCards,
    setLoadingFailedCards,
    setDeleteCard,
  } = useContext(StoreContext);

  useEffect(() => {
    async function fetchPosts() {
      setLoadingNewCards();
      try {
        const response = await fetch(postApiURL(0, 5));
        setAddNewCards((await response.json()) as Post[]);
      } catch (error) {
        setLoadingFailedCards(error);
      }
    }

    fetchPosts();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDelete = (id: number) => {
    setDeleteCard(id);
  };

  let filteredPosts = [...postList]; 
  if (filter !== null) {
    filteredPosts = postList.filter((post) => post.id === filter); 
  }
  if (isLoading) {
    return <div>Cargando...</div>;
  }
  if (error) {
    return <div>Ha ocurrido un error</div>;
  }

  return (
    <section>
      <div className="grid grid-flow-row-dense grid-cols-1 mx-5 mb-16">
        {filteredPosts.map((post,index) => (
          <Card
            key={uuidv4()}
            id={post.id}
            title={post.title}
            body={post.body}
            handleDelete={handleDelete}
          />
        ))}
      <AddMore />
      </div>
    </section>
  );
};

export default CardList;