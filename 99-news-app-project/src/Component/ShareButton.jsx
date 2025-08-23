import React from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TelegramShareButton,
  TelegramIcon,
} from "react-share";

const ShareButton = ({ shareUrl, title }) => {
  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="flex justify-center items-center gap-x-2 bg-blue-700 py-4 px-4 rounded-md mx-auto ">
        {/* WhatsApp Share Button */}
        <WhatsappShareButton url={shareUrl} title={title}>
          <WhatsappIcon size={30} round />
        </WhatsappShareButton>

        {/* Facebook Share Button */}
        <FacebookShareButton url={shareUrl} quote={title}>
          <FacebookIcon size={30} round />
        </FacebookShareButton>

        {/* Twitter Share Button */}
        <TwitterShareButton url={shareUrl} title={title}>
          <TwitterIcon size={30} round />
        </TwitterShareButton>

        {/* LinkedIn Share Button */}
        <LinkedinShareButton url={shareUrl} title={title}>
          <LinkedinIcon size={30} round />
        </LinkedinShareButton>

        {/* Telegram Share Button */}
        <TelegramShareButton url={shareUrl} title={title}>
          <TelegramIcon size={30} round />
        </TelegramShareButton>
      </div>
    </div>
  );
};

export default ShareButton;
