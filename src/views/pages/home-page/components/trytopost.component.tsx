"use client";
import React from "react";
import { Game } from "@/stores/game.data.store";
import axiosInstance from "@/libs/axios";

const onclickHandler = () => {
  postNewGameHandler();
};

const postNewGameHandler = async () => {
  const data: Game = {
    createdAt: "stringTest2",
    name: "stringTest2",
    image: "stringTest2",
    publisher: "stringTest2",
    description: "stringTest2",
    category: "stringTest2",
    items: [],
    id: "stringTest2",
  };
  try {
    const response = await axiosInstance.post("/products", data);
    console.log(response); // Success response
  } catch (error) {
    console.error("Error posting data:", error); // Handle errors here
  }
};

export default function TryToPost() {
  return (
    <div>
      <button
        onClick={() => {
          postNewGameHandler();
        }}
      >
        Send Data
      </button>
    </div>
  );
}
