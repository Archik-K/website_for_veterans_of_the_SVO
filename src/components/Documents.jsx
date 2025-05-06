import React, { useState, useEffect } from 'react';
// Используем стили модалки, а не main.module.css
import styles from '../assets/styles/main.module.css';

// Внутренний компонент: загружает и рендерит список из documents.json
function DocumentsList() {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    fetch('/documents/documents.json')
      .then(res => {
        if (!res.ok) throw new Error('Не удалось загрузить documents.json');
        return res.json();
      })
      .then(setDocs)
      .catch(console.error);
  }, []);

  if (docs.length === 0) return <p>Документы не найдены или идет загрузка…</p>;

  return (
    <ul className={styles.docList}>
      {docs.map((doc, index) => (
        <React.Fragment key={doc.id}>
          <li className={styles.docItem}>
            <strong>{doc.title}</strong>
            <p>{doc.description}</p>
            <a
              href={`/documents/${doc.filename}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Скачать
            </a>
          </li>
          {index < docs.length - 1 && (
            <div className={styles.directions__line}></div>
          )}
        </React.Fragment>
      ))}
    </ul>
  );
}

// Основной компонент: кнопка + модальное окно
export default function Documents() {
  const [isOpen, setIsOpen] = useState(false);

  // Закрытие по ESC
  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === 'Escape') setIsOpen(false);
    }
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <>
      <button className={styles.openButton} onClick={() => setIsOpen(true)}>
        Документы и реквизиты
      </button>

      {isOpen && (
        <div className={styles.overlay} onClick={() => setIsOpen(false)}>
          <div className={styles.modal} onClick={e => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <h2>Документы и реквизиты</h2>
              <button
                className={styles.closeButton}
                onClick={() => setIsOpen(false)}
              >
                &times;
              </button>
            </div>
            <div className={styles.content}>
              <DocumentsList />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
