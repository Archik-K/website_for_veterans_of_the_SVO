import React, { useState } from 'react';
import { db, storage } from '../firebase';  // Добавляем import для storage
import { collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';  // Импортируем необходимые методы из Firebase Storage

const NewsEditor = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);  // Состояние для файла изображения
  const [error, setError] = useState('');
  const [uploading, setUploading] = useState(false); // Состояние для отслеживания загрузки

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !content) {
      setError('Все поля должны быть заполнены');
      return;
    }
    setError('');

    try {
      // Если есть изображение, загружаем его в Storage
      let imageUrl = '';
      if (image) {
        const storageRef = ref(storage, `newsImages/${image.name}`);
        const uploadTask = uploadBytesResumable(storageRef, image);

        // Следим за состоянием загрузки
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            // Прогресс загрузки (не обязательно, можно отобразить индикатор)
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Загрузка: ' + progress + '%');
          },
          (error) => {
            console.error("Ошибка загрузки изображения: ", error);
            setError('Ошибка при загрузке изображения. Попробуйте снова.');
          },
          async () => {
            // Получаем URL изображения после успешной загрузки
            imageUrl = await getDownloadURL(uploadTask.snapshot.ref);
            addNewsToFirestore(imageUrl);  // Сохраняем новость в Firestore после загрузки изображения
          }
        );
        return; // Ожидаем завершения загрузки изображения
      }

      // Если изображения нет, сразу добавляем новость без изображения
      addNewsToFirestore(imageUrl);
    } catch (error) {
      console.error('Ошибка при добавлении новости: ', error);
      setError('Ошибка при добавлении новости. Попробуйте снова.');
    }
  };

  // Функция для добавления новости в Firestore
  const addNewsToFirestore = async (imageUrl) => {
    try {
      await addDoc(collection(db, "news"), {
        title,
        content,
        imageUrl,  // Сохраняем URL изображения в базе
        createdAt: new Date(),
      });
      alert('Новость добавлена!');
      setTitle('');
      setContent('');
      setImage(null);
    } catch (error) {
      console.error('Ошибка при добавлении новости в Firestore: ', error);
      setError('Ошибка при добавлении новости в базу. Попробуйте снова.');
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  return (
    <div>
      <h2>Добавить новость</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>} {/* Показываем ошибку, если есть */}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Заголовок:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Содержание:</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Загрузить изображение:</label>
          <input type="file" onChange={handleImageChange} accept="image/*" />
        </div>
        <button type="submit" disabled={uploading}>Сохранить</button>
      </form>
    </div>
  );
};

export default NewsEditor;
