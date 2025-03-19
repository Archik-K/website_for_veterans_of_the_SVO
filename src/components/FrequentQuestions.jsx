import styles from "../assets/styles/main.module.css";

const questions = [
  {
    id: 1,
    question: "- Могу ли я принять участие, если у меня нет опыта?",
    answer:
      "Конечно! Наши мероприятия открыты для всех, независимо от опыта. Мы рады помочь вам освоиться.",
  },
  {
    id: 2,
    question: "- Можно ли пригласить друга?",
    answer:
      "Да, конечно! Просто убедитесь, что для каждого участника есть регистрация.",
  },
  {
    id: 3,
    question: "- Нужно ли приносить что-то с собой?",
    answer:
      "Нет, всё необходимое будет предоставлено на месте. Вам нужно только желание участвовать!",
  },
  {
    id: 4,
    question: "- Как можно отменить регистрацию, если не смогу прийти?",
    answer:
      "Пожалуйста, сообщите нам заранее, если не сможете прийти, чтобы мы могли пригласить других участников.",
  },
];

const FrequentQuestions = () => {
  return (
    <div className={styles.frequentquestions}>
      <h1 className={styles.frequentquestions__title}>ЧАСТЫЕ ВОПРОСЫ</h1>
      <div className={styles.cardsWrapper}>
        {questions.map((q) => (
          <div key={q.id} className={styles.cardWrapper}>
            <div className={styles.cardObject}>
              {/* Лицевая сторона: вопрос */}
              <div className={styles.faceFront}>
                <div className={styles.titleWrapper}>
                  <div className={styles.title}>{q.question}</div>
                </div>
              </div>
              {/* Обратная сторона: ответ */}
              <div className={styles.faceBack}>
                <div className={styles.infoWrapper}>
                  <div className={styles.infoTitle}>Ответ</div>
                  <p>{q.answer}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className={styles.description__line}></div>
      </div>
    </div>
  );
};

export default FrequentQuestions;
