import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  width: 100%;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  margin-top: 20px;
`;

const Title = styled.h1`
  font-size: 24px;
`;

const Progress = styled.h2`
  font-size: 18px;
`;

interface TextCardProps {
  title: string;
  progress: string;
}

const TextCard: React.FC<TextCardProps> = ({ title, progress }) => {
  return (
    <Card>
      <Title>{title}</Title>
      <Progress>Progress: {progress}</Progress>
    </Card>
  );
};

export default TextCard;
