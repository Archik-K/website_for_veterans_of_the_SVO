import React from 'react';
import { YMaps, Map as YandexMap, Placemark } from '@pbe/react-yandex-maps';

const Map = () => {
  // Длинный текст, который будет отображаться рядом с меткой
  const captionText = 'АНО — Центр поддержки ветеранов СВО';

  return (
    <YMaps
      query={{
        lang: 'ru_RU',
        load: 'package.full',
        apikey: '56872611-60a1-4479-bb8d-db1760e58e08',
      }}
    >
      <div style={{ width: '100%', height: '500px',  display: 'flex', justifyContent: 'center'}}>
        <YandexMap
          defaultState={{
            center: [51.658048, 39.193649],
            zoom: 18,
          }}
          width="80%"
          height="100%"
        >
          <Placemark
            geometry={[51.658048, 39.193649]}
            properties={{
              // Текст, отображаемый всегда рядом с меткой
              iconCaption: captionText,
              // Балун при клике
              balloonContentHeader: 'АНО "Воронежский Центр поддержки ветеранов Специальной Военной Операции"',
              balloonContentBody: 'Мы находимся по адресу: г. Воронеж, ул. Куцыгина, д. 17, офис 203',
            }}
            options={{
              preset: 'islands#darkBlueDotIconWithCaption', // с точкой и подписью
              iconCaptionMaxWidth: 350,                     // увеличиваем ширину подписи
              iconCaptionOffset: [25, -15],                 // сдвиг подписи от метки
              openBalloonOnClick: true,
              hideIconOnBalloonOpen: false,
            }}
          />
        </YandexMap>
      </div>
    </YMaps>
  );
};

export default Map;
