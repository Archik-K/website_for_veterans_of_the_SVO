import { useState } from "react";
import styles from "../assets/styles/main.module.css";

const questions = [
  {
    id: 1,
    question: "Как обжаловать решение ВВК?",
    answer: (
      <div>
  <ul>
    <li><strong>Способ первый:</strong> в вышестоящей ВВК (региональная/центральная; не исключает суд).</li>
    <li><strong>Способ второй:</strong> в суде.</li>
  </ul>
  <p><strong>Процедура:</strong></p>
  <ol>
    <li>Запросить выписку из протокола заседания или копию освидетельствования.</li>
    <li>Подать жалобу в вышестоящую ВВК с документами (мед.книжка, результаты обследований, независимое заключение).</li>
    <li>По решению комиссии — контрольное или повторное обследование.</li>
    <li>При изменении категории годности принимаются новые решения.</li>
  </ol>
  <p>Подробнее можно прочитать <a href="https://t.me/pv_svo/420">здесь</a>.</p>
</div>
       
    ),
  },
  {
    id: 2,
    question: "Как получить участнику СВО страховые выплаты СОГАЗ?",
    answer: (
      <div>
        <p>
          Участникам СВО положены страховые выплаты и компенсации по ФЗ №52-ФЗ и Указу Президента РФ №582, а также единовременные пособия по ФЗ №306-ФЗ.
        </p>
        <p>
          <strong>Контакты для справок и отправки документов:</strong>
        </p>
        <ul>
          <li>
            <strong>СОГАЗ:</strong> 8-800-333-0-888; электронная почта: <a href="mailto:minoborony@sogaz.ru">minoborony@sogaz.ru</a>
          </li>
          <li>
            <strong>Офис приема документов:</strong> Москва, Уланский переулок, д. 24, стр.1
          </li>
          <li>
            <strong>Военно-социальный центр Минобороны:</strong> Москва, ул. Мясницкая, д.35; тел.: 8-800-707-99-99
          </li>
        </ul>
        <p>
          Подробнее можно прочитать <a href="https://www.sogaz.ru/info/emtches_personal_sostav_min/"> здесь </a>.
        </p>
      </div>
    ),
  },
  {
    id: 3,
    question:
      "Какие меры социальной поддержки, оказываемые Социальным фондом России участникам СВО и их семьям?",
    answer: (
      <div>
        <ul>
          <li>
            <a href="https://sfr.gov.ru/grazhdanam/Informaciya_dlya_uchastnikov_SVO_i_ih_semei/~9902">
              Особое обслуживание ветеранов
            </a>
          </li>
          <li>
            <a href="https://sfr.gov.ru/grazhdanam/Informaciya_dlya_uchastnikov_SVO_i_ih_semei/~10274">
              Как участникам СВО получить направление на санаторно-курортное лечение
            </a>
          </li>
          <li>
            <a href="https://sfr.gov.ru/grazhdanam/Informaciya_dlya_uchastnikov_SVO_i_ih_semei/~9903">
              Выплаты и льготы участникам СВО
            </a>
          </li>
          <li>
            <a href="https://sfr.gov.ru/grazhdanam/Informaciya_dlya_uchastnikov_SVO_i_ih_semei/~10199">
              Как оформить выплаты и меры поддержки
            </a>
          </li>
          <li>
            <a href="https://sfr.gov.ru/grazhdanam/Informaciya_dlya_uchastnikov_SVO_i_ih_semei/~9901">
              Выплаты и компенсации семьям участников СВО
            </a>
          </li>
        </ul>
        <p>
          Подробнее про все меры поддержки можно прочитать <a href="https://sfr.gov.ru/grazhdanam/Informaciya_dlya_uchastnikov_SVO_i_ih_semei/"> здесь</a>.
        </p>
      </div>
    ),
  },
  {
    id: 4,
    question: "Где пройти реабилитацию в Воронеже?",
    answer: (
      <div>
        <div >
          <strong>Государственное многопрофильное учреждение</strong> — оказывает профессиональную и социальную реабилитацию, включая психологические и социально-медицинские услуги для участников СВО и инвалидов трудоспособного возраста.
          <br />
          <p><strong>Адрес:</strong> Калининградская ул., 110; телефон: <a href="tel:+74732218651">+7 (473) 221-86-51</a>; сайт:<a href="https://invmol-centr.e-gov36.ru/" target="_blank" rel="noopener noreferrer">
            invmol-centr.e-gov36.ru</a> </p>
        </div>
  
        <div>
          <strong>Воронежский областной центр социальной реабилитации ветеранов и инвалидов боевых действий</strong> — автономное учреждение, предоставляющее комплексную социально-медицинскую и социально-психологическую реабилитацию ветеранам, инвалидам боевых действий, их семьям и семьям погибших.
          <br />
          <p> <strong>Адрес:</strong> ул. Хользунова, 118; телефон: <a href="tel:+74732251408">+7 (473) 225-14-08</a>; сайт:<a href="https://veteran.e-gov36.ru/" target="_blank" rel="noopener noreferrer"> veteran.e-gov36.ru</a></p>
        </div>
      </div>
    ),
  },
  {
    id: 5,
    question: "Какие льготы при поступлении и обучении участников СВО и их детей?",
    answer: (
      <div>
        <div>
          <p>Участники СВО и их дети имеют льготы при поступлении и обучении:</p>
          <ul>
            <li>Отдельная квота (не менее 10% бюджетных мест), возможность поступления без экзаменов (за исключением творческих и профессиональных направлений).</li>
            <li>Государственная социальная стипендия для очников-ветеранов СВО.</li>
            <li>Рекомендации вузам: материальная помощь, снижение стоимости обучения или рассрочка платежей, а также приоритетное предоставление мест в общежитии (иногда бесплатно).</li>
            <li>Льготы зависят от вуза и представленных подтверждающих документов.</li>
          </ul>
          <p>
            Подробнее можно прочитать{" "}
            <a href="https://minobrnauki.gov.ru/press-center/news/novosti-ministerstva/68257/">
              здесь
            </a>
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 6,
    question: "Пенсионный стаж для участников СВО: как будет засчитываться и подтверждаться?",
    answer: (
      <div>
        <div>
          <p>Служба в СВО (по призыву, контракту и добровольческая) засчитывается в страховой стаж в двойном размере. Для подтверждения права на двойной стаж требуются: военный билет, справки из воинских подразделений/военкоматов, архивные документы и трудовая книжка.</p>
        <p>Подробнее можно прочитать <a href="https://dzen.ru/a/Y4WdaoU5YjKyfqtG">здесь</a></p>
        </div>
      </div>
    ),
  },
];

const FrequentQuestions = () => {
  const [flipped, setFlipped] = useState({});

  const toggleFlip = (id) => {
    setFlipped((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className={styles.frequentquestions}>
      <h1 className={styles.frequentquestions__title}>ЧАСТЫЕ ВОПРОСЫ</h1>
      <div className={styles.frequentquestions__cardsWrapper}>
        {questions.map((q) => (
          <div
            key={q.id}
            className={`${styles.cardWrapper} ${flipped[q.id] ? styles.flipped : ""}`}
            onClick={() => toggleFlip(q.id)}
          >
            <div className={styles.cardObject}>
              <div className={`${styles.face} ${styles.faceFront}`}>
                <div className={styles.titleWrapper}>
                  <div className={styles.question_title}>{q.question}</div>
                </div>
              </div>
              <div className={`${styles.face} ${styles.faceBack}`}>
                <div className={styles.infoWrapper}>
                  <div className={styles.answerContent}>{q.answer}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
       <div className={styles.directions__line}></div>
    </div>
  );
};

export default FrequentQuestions;
