// import React from 'react';
// import { useQuery } from '@tanstack/react-query';
// import { formatDistanceToNow } from 'date-fns';
// import { Linkedin, ThumbsUp, MessageSquare, Share2, Loader2 } from 'lucide-react';
// import { fetchLatestPosts } from '../../services/linkedin/api';

// export default function LinkedInFeed() {
//   const { data: posts, isLoading, error } = useQuery({
//     queryKey: ['linkedinPosts'],
//     queryFn: () => fetchLatestPosts(5),
//     refetchInterval: 1000 * 60 * 60 * 6, // Refetch every 6 hours
//   });

//   if (isLoading) {
//     return (
//       <div className="bg-white rounded-lg p-6 shadow-lg">
//         <div className="flex items-center gap-2 mb-6">
//           <Linkedin className="w-6 h-6 text-blue-600" />
//           <h3 className="text-2xl font-semibold">LinkedIn Activity</h3>
//         </div>
//         <div className="flex justify-center py-8">
//           <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
//         </div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="bg-white rounded-lg p-6 shadow-lg">
//         <div className="flex items-center gap-2 mb-6">
//           <Linkedin className="w-6 h-6 text-blue-600" />
//           <h3 className="text-2xl font-semibold">LinkedIn Activity</h3>
//         </div>
//         <p className="text-red-500">Failed to load LinkedIn posts</p>
//       </div>
//     );
//   }

//   return (
//     <div className="bg-white rounded-lg p-6 shadow-lg">
//       <div className="flex items-center gap-2 mb-6">
//         <Linkedin className="w-6 h-6 text-blue-600" />
//         <h3 className="text-2xl font-semibold">LinkedIn Activity</h3>
//       </div>
//       <div className="space-y-6">
//         {posts?.map((post) => (
//           <article key={post.id} className="border-b border-gray-100 pb-6 last:border-0">
//             <p className="text-gray-700 mb-3">{post.content}</p>
//             <div className="flex items-center justify-between text-sm text-gray-500">
//               <span>{formatDistanceToNow(post.publishedAt)} ago</span>
//               <div className="flex items-center gap-4">
//                 <span className="flex items-center gap-1">
//                   <ThumbsUp className="w-4 h-4" /> {post.likes}
//                 </span>
//                 <span className="flex items-center gap-1">
//                   <MessageSquare className="w-4 h-4" /> {post.comments}
//                 </span>
//                 <span className="flex items-center gap-1">
//                   <Share2 className="w-4 h-4" /> {post.shares}
//                 </span>
//               </div>
//             </div>
//           </article>
//         ))}
//       </div>
//     </div>
//   );
// }

import React, { useEffect } from 'react';
import '../../styles/LinkedInActivity.css'; // Import the CSS

const LinkedInActivity: React.FC = () => {
  useEffect(() => {
    consoleText(
      ['LinkedIn Activity', 'Activity Coming Soon', 'Stay Tuned!'],
      'linkedin-text',
      ['tomato', 'rebeccapurple', 'lightblue']
    );
  }, []);

  const consoleText = (words: string[], id: string, colors: string[]) => {
    if (colors === undefined) colors = ['#fff'];
    let visible = true;
    const con = document.getElementById('console');
    let letterCount = 1;
    let x = 1;
    let waiting = false;
    const target = document.getElementById(id);

    if (target) {
      target.setAttribute('style', 'color:' + colors[0]);
      window.setInterval(() => {
        if (letterCount === 0 && waiting === false) {
          waiting = true;
          target.innerHTML = words[0].substring(0, letterCount);
          window.setTimeout(() => {
            const usedColor = colors.shift();
            colors.push(usedColor as string);
            const usedWord = words.shift();
            words.push(usedWord as string);
            x = 1;
            target.setAttribute('style', 'color:' + colors[0]);
            letterCount += x;
            waiting = false;
          }, 1000);
        } else if (letterCount === words[0].length + 1 && waiting === false) {
          waiting = true;
          window.setTimeout(() => {
            x = -1;
            letterCount += x;
            waiting = false;
          }, 1000);
        } else if (waiting === false) {
          target.innerHTML = words[0].substring(0, letterCount);
          letterCount += x;
        }
      }, 120);

      window.setInterval(() => {
        if (visible === true) {
          con?.classList.add('hidden');
          visible = false;
        } else {
          con?.classList.remove('hidden');
          visible = true;
        }
      }, 400);
    }
  };

  return (
    <div className="text-center py-10">
      <h3
        id="linkedin-text"
        className="text-3xl font-bold typing-container"
      ></h3>
      <div id="console" className="console-underscore text-3xl font-bold">
        &#95;
      </div>
    </div>
  );
};

export default LinkedInActivity;
