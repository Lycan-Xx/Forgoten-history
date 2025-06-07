import React, { useState } from 'react';
import { Twitter, Facebook, Link as LinkIcon, Check } from 'lucide-react';

interface SocialShareToolbarProps {
  title: string;
  url?: string;
}

const SocialShareToolbar: React.FC<SocialShareToolbarProps> = ({ title, url = window.location.href }) => {
  const [copied, setCopied] = useState(false);

  const shareOnTwitter = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`;
    window.open(twitterUrl, '_blank');
  };

  const shareOnFacebook = () => {
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
    window.open(facebookUrl, '_blank');
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="fixed left-4 top-1/2 transform -translate-y-1/2 z-40 hidden md:flex flex-col space-y-3">
      <button
        className="p-2 bg-brown-light rounded-full text-white hover:bg-copper transition-colors duration-300"
        onClick={shareOnTwitter}
        aria-label="Share on Twitter"
      >
        <Twitter className="h-5 w-5" />
      </button>
      
      <button
        className="p-2 bg-brown-light rounded-full text-white hover:bg-copper transition-colors duration-300"
        onClick={shareOnFacebook}
        aria-label="Share on Facebook"
      >
        <Facebook className="h-5 w-5" />
      </button>
      
      <button
        className="p-2 bg-brown-light rounded-full text-white hover:bg-copper transition-colors duration-300"
        onClick={copyToClipboard}
        aria-label="Copy link"
      >
        {copied ? <Check className="h-5 w-5 text-green-400" /> : <LinkIcon className="h-5 w-5" />}
      </button>
    </div>
  );
};

export default SocialShareToolbar;