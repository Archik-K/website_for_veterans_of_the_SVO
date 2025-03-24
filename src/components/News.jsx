import React, { useEffect, useState } from 'react';
import { db } from '../firebase';  // Импортируем Firebase
import { collection, getDocs } from 'firebase/firestore';
import styles from "../assets/styles/main.module.css";

const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      const newsCollection = collection(db, "news");
      const newsSnapshot = await getDocs(newsCollection);
      const newsList = newsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setNews(newsList);
    };

    fetchNews();
  }, []);

  return (
    <div className={styles.news}>
      <h1 className={styles.news__title}>НОВОСТНАЯ ЛЕНТА</h1>
      <div className={styles.news__container}>
        {news.map((item) => (
          <div key={item.id} className={styles.news__item}>
            <h3>{item.title}</h3>
            <p>{item.content}</p>
          </div>
        ))}
      </div>
      <div className={styles.news__line}></div>
    </div>
  );
};

export default News;
