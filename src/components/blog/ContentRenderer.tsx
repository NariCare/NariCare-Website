import React from 'react';
import { ContentSection } from '../../data/blogData';
import { AlertCircle, CheckCircle, Info, AlertTriangle } from 'lucide-react';

interface ContentRendererProps {
  sections: ContentSection[];
}

const CalloutIcon = ({ style }: { style: string }) => {
  switch (style) {
    case 'info':
      return <Info className="w-5 h-5" />;
    case 'success':
      return <CheckCircle className="w-5 h-5" />;
    case 'warning':
      return <AlertTriangle className="w-5 h-5" />;
    case 'danger':
      return <AlertCircle className="w-5 h-5" />;
    default:
      return <Info className="w-5 h-5" />;
  }
};

const getCalloutStyles = (style: string) => {
  switch (style) {
    case 'info':
      return 'bg-blue-50 border-blue-200 text-blue-800';
    case 'success':
      return 'bg-green-50 border-green-200 text-green-800';
    case 'warning':
      return 'bg-yellow-50 border-yellow-200 text-yellow-800';
    case 'danger':
      return 'bg-red-50 border-red-200 text-red-800';
    default:
      return 'bg-gray-50 border-gray-200 text-gray-800';
  }
};

export const ContentRenderer: React.FC<ContentRendererProps> = ({ sections }) => {
  return (
    <div className="prose prose-lg max-w-none">
      {sections.map((section, index) => {
        switch (section.type) {
          case 'heading':
            const HeadingTag = `h${section.level || 2}` as keyof JSX.IntrinsicElements;
            return (
              <HeadingTag
                key={index}
                className={`font-bold text-gray-900 ${
                  section.level === 2 ? 'text-2xl lg:text-3xl mt-8 mb-4' :
                  section.level === 3 ? 'text-xl lg:text-2xl mt-6 mb-3' :
                  'text-lg lg:text-xl mt-4 mb-2'
                }`}
              >
                {section.content}
              </HeadingTag>
            );

          case 'text':
            return (
              <p
                key={index}
                className="text-gray-700 leading-relaxed mb-4 [font-family:'Poppins',Helvetica]"
                dangerouslySetInnerHTML={{ __html: section.content || '' }}
              />
            );

          case 'list':
            const ListTag = section.style === 'numbered' ? 'ol' : 'ul';
            return (
              <ListTag
                key={index}
                className={`mb-4 space-y-2 ${
                  section.style === 'numbered' ? 'list-decimal' : 'list-disc'
                } list-inside text-gray-700`}
              >
                {section.items?.map((item, itemIndex) => (
                  <li key={itemIndex} className="leading-relaxed">
                    {item}
                  </li>
                ))}
              </ListTag>
            );

          case 'callout':
            return (
              <div
                key={index}
                className={`p-4 rounded-lg border mb-6 ${getCalloutStyles(section.style || 'info')}`}
              >
                <div className="flex items-start gap-3">
                  <CalloutIcon style={section.style || 'info'} />
                  <div className="flex-1">
                    {section.title && (
                      <h4 className="font-semibold mb-2 text-lg">
                        {section.title}
                      </h4>
                    )}
                    <p className="leading-relaxed">
                      {section.content}
                    </p>
                  </div>
                </div>
              </div>
            );

          case 'media':
            return (
              <div key={index} className="mb-6">
                {section.media?.map((mediaItem, mediaIndex) => {
                  // Convert various video URLs to embeddable iframe URLs
                  const getEmbeddableVideoUrl = (url: string) => {
                    // YouTube URLs
                    if (url.includes('youtube.com/watch?v=')) {
                      const videoId = url.split('v=')[1]?.split('&')[0];
                      return `https://www.youtube.com/embed/${videoId}`;
                    }
                    if (url.includes('youtu.be/')) {
                      const videoId = url.split('youtu.be/')[1]?.split('?')[0];
                      return `https://www.youtube.com/embed/${videoId}`;
                    }
                    // Vimeo URLs
                    if (url.includes('vimeo.com/')) {
                      const videoId = url.split('vimeo.com/')[1]?.split('?')[0];
                      return `https://player.vimeo.com/video/${videoId}`;
                    }
                    // For local video files, return as-is
                    if (url.includes('.mp4') || url.includes('.webm') || url.includes('.ogg') || url.startsWith('/')) {
                      return url;
                    }
                    // Return null for non-embeddable URLs
                    return null;
                  };

                  const embeddableUrl = getEmbeddableVideoUrl(mediaItem.url);
                  const isEmbeddableVideo = embeddableUrl !== null;

                  return (
                    <div key={mediaIndex} className="mb-6">
                      {mediaItem.title && (
                        <h4 className="font-semibold text-lg mb-2 text-gray-900">
                          {mediaItem.title}
                        </h4>
                      )}
                      {mediaItem.description && (
                        <p className="text-gray-600 mb-4">
                          {mediaItem.description}
                        </p>
                      )}
                      
                      {isEmbeddableVideo ? (
                        <div className="bg-gray-100 rounded-lg p-4">
                          <div className="relative w-full" style={{ paddingBottom: '56.25%' /* 16:9 aspect ratio */ }}>
                            <iframe
                              src={embeddableUrl}
                              className="absolute inset-0 w-full h-full rounded-lg shadow-md"
                              frameBorder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                              title={mediaItem.title}
                            />
                          </div>
                        </div>
                      ) : (
                        <div className="bg-gray-100 rounded-lg p-4">
                          <a
                            href={mediaItem.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-[#8383ed] text-white px-4 py-2 rounded-lg hover:bg-[#7373dd] transition-colors"
                          >
                            <span>▶️</span>
                            Watch Video
                          </a>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            );

          case 'video':
            return (
              <div key={index} className="mb-6">
                {section.videoTitle && (
                  <h4 className="font-semibold text-lg mb-2 text-gray-900">
                    {section.videoTitle}
                  </h4>
                )}
                {section.videoDescription && (
                  <p className="text-gray-600 mb-4">
                    {section.videoDescription}
                  </p>
                )}
                
                {section.videoUrl && (
                  <div className="bg-gray-100 rounded-lg p-4">
                    <div className="relative w-full" style={{ paddingBottom: '56.25%' /* 16:9 aspect ratio */ }}>
                      <iframe
                        src={section.videoUrl}
                        className="absolute inset-0 w-full h-full rounded-lg shadow-md"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title={section.videoTitle || 'Video'}
                      />
                    </div>
                  </div>
                )}
              </div>
            );

          case 'table':
            return (
              <div key={index} className="mb-6 overflow-x-auto">
                <table className="min-w-full border border-gray-300 rounded-lg">
                  <thead className="bg-gray-50">
                    <tr>
                      {section.headers?.map((header, headerIndex) => (
                        <th
                          key={headerIndex}
                          className="px-4 py-3 text-left font-semibold text-gray-900 border-b border-gray-300"
                        >
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {section.rows?.map((row, rowIndex) => (
                      <tr key={rowIndex} className="border-b border-gray-200">
                        {row.map((cell, cellIndex) => (
                          <td
                            key={cellIndex}
                            className="px-4 py-3 text-gray-700"
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );

          default:
            return null;
        }
      })}
    </div>
  );
};