import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function AdminPanel() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get('http://localhost:3000/api/news', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setNews(res.data);
      } catch (error) {
        console.error('Ошибка загрузки новостей', error);
      }
    };
    fetchNews();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm('Вы уверены, что хотите удалить новость?')) {
      try {
        const token = localStorage.getItem('token');
        await axios.delete(`http://localhost:3000/api/news/${id}`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        setNews(news.filter(item => item._id !== id)); // Удаляем новость
      } catch (error) {
        console.error('Ошибка удаления', error);
      }
    }
  };

  return (
    <div>
      <h2>Админ-панель</h2>
      <Link to="/admin/news" style={{ marginBottom: '10px', display: 'inline-block' }}>
        ➕ Добавить новость
      </Link>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {news.map(item => (
          <li key={item._id} style={{ borderBottom: '1px solid #ddd', padding: '10px 0' }}>
            <h3>{item.title}</h3>
            <Link to={`/admin/news/${item._id}`} style={{ marginRight: '10px' }}>✏️ Редактировать</Link>
            <button onClick={() => handleDelete(item._id)} style={{ color: 'red', border: 'none', background: 'none', cursor: 'pointer' }}>
              ❌ Удалить
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdminPanel;