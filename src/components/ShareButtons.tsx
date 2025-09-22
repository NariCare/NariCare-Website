import React from 'react';
import { Share2, Facebook, Twitter, Linkedin, Copy, MessageCircle } from 'lucide-react';
import { Button } from './ui/button';

interface ShareButtonsProps {
  url: string;
  title: string;
  description: string;
}

export const ShareButtons: React.FC<ShareButtonsProps> = ({ url, title, description }) => {
  const fullUrl = url.startsWith('http') ? url : `https://naricare.com${url}`;
  const encodedUrl = encodeURIComponent(fullUrl);
  const encodedTitle = encodeURIComponent(title);
  const encodedDescription = encodeURIComponent(description);

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    whatsapp: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(fullUrl);
      // You could add a toast notification here
      alert('Link copied to clipboard!');
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = fullUrl;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      alert('Link copied to clipboard!');
    }
  };

  const nativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: title,
          text: description,
          url: fullUrl,
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      copyToClipboard();
    }
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <div className="flex items-center gap-2 mb-4">
        <Share2 className="w-5 h-5 text-[#8383ed]" />
        <h3 className="font-semibold text-gray-900 [font-family:'Merriweather',Helvetica]">
          Share this article
        </h3>
      </div>
      
      <div className="flex flex-wrap gap-3">
        {/* Native Share (mobile) */}
        <Button
          onClick={nativeShare}
          variant="outline"
          size="sm"
          className="flex items-center gap-2 border-[#8383ed]/20 text-[#8383ed] hover:bg-[#8383ed] hover:text-white"
        >
          <Share2 className="w-4 h-4" />
          <span className="hidden sm:inline">Share</span>
        </Button>

        {/* Facebook */}
        <Button
          onClick={() => window.open(shareLinks.facebook, '_blank', 'width=600,height=400')}
          variant="outline"
          size="sm"
          className="flex items-center gap-2 border-blue-200 text-blue-600 hover:bg-blue-600 hover:text-white"
        >
          <Facebook className="w-4 h-4" />
          <span className="hidden sm:inline">Facebook</span>
        </Button>

        {/* Twitter */}
        <Button
          onClick={() => window.open(shareLinks.twitter, '_blank', 'width=600,height=400')}
          variant="outline"
          size="sm"
          className="flex items-center gap-2 border-sky-200 text-sky-600 hover:bg-sky-600 hover:text-white"
        >
          <Twitter className="w-4 h-4" />
          <span className="hidden sm:inline">Twitter</span>
        </Button>

        {/* LinkedIn */}
        <Button
          onClick={() => window.open(shareLinks.linkedin, '_blank', 'width=600,height=400')}
          variant="outline"
          size="sm"
          className="flex items-center gap-2 border-blue-200 text-blue-700 hover:bg-blue-700 hover:text-white"
        >
          <Linkedin className="w-4 h-4" />
          <span className="hidden sm:inline">LinkedIn</span>
        </Button>

        {/* WhatsApp */}
        <Button
          onClick={() => window.open(shareLinks.whatsapp, '_blank')}
          variant="outline"
          size="sm"
          className="flex items-center gap-2 border-green-200 text-green-600 hover:bg-green-600 hover:text-white"
        >
          <MessageCircle className="w-4 h-4" />
          <span className="hidden sm:inline">WhatsApp</span>
        </Button>

        {/* Copy Link */}
        <Button
          onClick={copyToClipboard}
          variant="outline"
          size="sm"
          className="flex items-center gap-2 border-gray-200 text-gray-600 hover:bg-gray-600 hover:text-white"
        >
          <Copy className="w-4 h-4" />
          <span className="hidden sm:inline">Copy Link</span>
        </Button>
      </div>

      <p className="text-sm text-gray-500 mt-3">
        Help other mothers by sharing this helpful information
      </p>
    </div>
  );
};