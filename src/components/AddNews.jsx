// Пример компонента для добавления новости
import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase/firebaseConfig"; // Импорт базы данных

const AddNews = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "news"), {
        title,
        content,
        createdAt: new Date()
      });
      alert("Новость успешно добавлена");
      setTitle("");
      setContent("");
    } catch (error) {
      console.error("Ошибка при добавлении новости", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Заголовок новости"
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Содержание новости"
      />
      <button type="submit">Добавить новость</button>
    </form>
  );
};

export default AddNews;