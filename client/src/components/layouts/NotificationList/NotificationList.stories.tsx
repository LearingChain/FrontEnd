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
        user: '🔔테스트 알림 제목',
        paragraph:
          '테스트 중인 단락입니다. 테스트 중인 단락입니다. 테스트 중인 단락입니다. 테스트 중인 단락입니다.테스트 중인 단락입니다.테스트 중인 단락입니다.테스트 중인 단락입니다.테스트 중인 단락입니다.테스트 중인 단락입니다.테스트 중인 단락입니다.테스트 중인 단락입니다.테스트 중인 단락입니다.테스트 중인 단락입니다.',
        active: true,
        date: new Date(),
      },
      {
        user: '🔔테스트 알림 제목',
        paragraph:
          '테스트 중인 단락입니다. 테스트 중인 단락입니다. 테스트 중인 단락입니다. 테스트 중인 단락입니다.테스트 중인 단락입니다.테스트 중인 단락입니다.테스트 중인 단락입니다.테스트 중인 단락입니다.테스트 중인 단락입니다.테스트 중인 단락입니다.테스트 중인 단락입니다.테스트 중인 단락입니다.테스트 중인 단락입니다.',
        active: false,
        date: new Date(new Date().getTime() - 90000000),
      },
      {
        user: '🔔테스트 알림 제목',
        paragraph:
          '테스트 중인 단락입니다. 테스트 중인 단락입니다. 테스트 중인 단락입니다. 테스트 중인 단락입니다.테스트 중인 단락입니다.테스트 중인 단락입니다.테스트 중인 단락입니다.테스트 중인 단락입니다.테스트 중인 단락입니다.테스트 중인 단락입니다.테스트 중인 단락입니다.테스트 중인 단락입니다.테스트 중인 단락입니다.',
        active: false,
        date: new Date(new Date().getTime() - 180000000),
      },
    ]}
  />
);
