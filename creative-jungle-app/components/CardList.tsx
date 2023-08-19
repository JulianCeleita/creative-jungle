"use client";

import React, { useState, useEffect } from "react";
import Card from "./Card";
import SearchBar from "./SearchBar";
import { type Post } from "@/typings";
import { postApiURL } from "@/config/urls.config";
import { useStore } from "@/store/useStore";

export const CardList = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  
  const {
    postList,
    error,
    isLoading,
    setLoadingNewCards,
    setAddNewCards,
    setLoadingFailedCards,
    setDeleteCard
  } = useStore();

  useEffect(() => {
    async function fetchPosts() {
      setLoadingNewCards();
      try {
        const response = await fetch(postApiURL(0,3));
        setAddNewCards(await response.json() as Post[])
        
      } catch (error) {
        setLoadingFailedCards(error);
      }
    }

    fetchPosts();
  }, []);
  
  useEffect(() => {
    setPosts(postList);
  }, [postList]);
  

  const handleDelete = (id: number) => {
      setDeleteCard(id);
  };

  if (error) {
    return <div>Ha ocurrido un error</div>;
  }
  if (isLoading) {
    return <div>Cargando...</div>;
  }
  return (
    <section>
      <div className="grid grid-flow-row-dense grid-cols-1 mx-5 mb-16">
        {posts.map((post) => (
          <Card
            key={post.id}
            id={post.id}
            title={post.title}
            body={post.body}
            handleDelete={handleDelete} 
          />
        ))}
      </div>
    </section>
  );
};

export default CardList;