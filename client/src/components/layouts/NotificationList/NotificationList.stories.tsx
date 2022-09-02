import React from 'react';
import NotificationList from './NotificationList';

export default {
  title: 'Layouts/NotificationList',
  component: NotificationList,
};

export const all = () => (
  <NotificationList
    itemList={[
      {
        title: '🔔테스트 알림 제목',
        paragraph:
          '테스트 중인 단락입니다. 테스트 중인 단락입니다. 테스트 중인 단락입니다. 테스트 중인 단락입니다.테스트 중인 단락입니다.테스트 중인 단락입니다.테스트 중인 단락입니다.테스트 중인 단락입니다.테스트 중인 단락입니다.테스트 중인 단락입니다.테스트 중인 단락입니다.테스트 중인 단락입니다.테스트 중인 단락입니다.',
        active: true,
        date: new Date(),
      },
      {
        title: '🔔테스트 알림 제목',
        paragraph:
          '테스트 중인 단락입니다. 테스트 중인 단락입니다. 테스트 중인 단락입니다. 테스트 중인 단락입니다.테스트 중인 단락입니다.테스트 중인 단락입니다.테스트 중인 단락입니다.테스트 중인 단락입니다.테스트 중인 단락입니다.테스트 중인 단락입니다.테스트 중인 단락입니다.테스트 중인 단락입니다.테스트 중인 단락입니다.',
        active: false,
        date: new Date(new Date().getTime() - 90000000),
      },
      {
        title: '🔔테스트 알림 제목',
        paragraph:
          '테스트 중인 단락입니다. 테스트 중인 단락입니다. 테스트 중인 단락입니다. 테스트 중인 단락입니다.테스트 중인 단락입니다.테스트 중인 단락입니다.테스트 중인 단락입니다.테스트 중인 단락입니다.테스트 중인 단락입니다.테스트 중인 단락입니다.테스트 중인 단락입니다.테스트 중인 단락입니다.테스트 중인 단락입니다.',
        active: false,
        date: new Date(new Date().getTime() - 180000000),
      },
    ]}
  />
);
