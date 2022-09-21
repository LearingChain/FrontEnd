import React from 'react';
import Avatar from '../../commons/Avatar/Avatar';
import Button from '../../commons/Button/Button';
import {
  BottomInfo,
  Date,
  Layout,
  MainInfo,
  NickName,
  Paragraph,
} from './ReviewAnswer.styles';

export interface ReviewAnswerProps {
  nickname: string;
  content:string;
  date: string;
}

const ReviewAnswer = ({...props}: ReviewAnswerProps) => {
  return (
    <Layout>
      <Avatar
        pattern={'noneIconAvater'}
        useImg={'/testlink'}
        width={'50px'}
        height={'50px'}
      />
      <MainInfo>
        <NickName>{props.nickname}</NickName>
        <Paragraph>{props.content}</Paragraph>
        <BottomInfo>
          <Button pattern={'textAlone'} background={'#f6f6f6'}>
            수정
          </Button>
          <Button pattern={'textAlone'} background={'#f6f6f6'}>
            삭제
          </Button>
          <Date>{props.date}</Date>
        </BottomInfo>
      </MainInfo>
    </Layout>
  );
};

export default ReviewAnswer;
