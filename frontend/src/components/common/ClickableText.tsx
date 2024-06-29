import React from 'react';

interface IClickableText {
  cb: () => void;
  text: string;
  tag: keyof JSX.IntrinsicElements;
}

function ClickableText({ cb, text, tag: Tag }: IClickableText) {
  return (
    <Tag style={{ cursor: 'pointer' }} onClick={cb}>
      {text}
    </Tag>
  );
}

export default ClickableText;
