import React from 'react';
import { FloatButton } from 'antd';
import {
  FacebookOutlined,
  SendOutlined,
  TwitterOutlined,
} from '@ant-design/icons';
import './../../components/Article/ArticlePage.css';

interface IFloatButtonMenu {
  facebook: {
    url: string;
    quote: string;
  };
  twitter: {
    url: string;
    text: string;
  };
}

function FloatButtonMenu({ facebook, twitter }: IFloatButtonMenu) {
  const handleFacebookShare = () => {
    const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      facebook.url
    )}&quote=${encodeURIComponent(facebook.quote)}`;
    window.open(shareUrl, '_blank', 'width=600,height=400');
  };

  const handleTwitterShare = () => {
    const shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
      twitter.url
    )}&text=${encodeURIComponent(twitter.text)}`;
    window.open(shareUrl, '_blank', 'width=600,height=400');
  };

  return (
    <>
      <FloatButton.Group
        trigger='hover'
        type='primary'
        style={{ right: 94 }}
        icon={<SendOutlined />}
      >
        <FloatButton
          icon={<FacebookOutlined />}
          onClick={handleFacebookShare}
        />
        <FloatButton icon={<TwitterOutlined />} onClick={handleTwitterShare} />
      </FloatButton.Group>
    </>
  );
}

export default FloatButtonMenu;
