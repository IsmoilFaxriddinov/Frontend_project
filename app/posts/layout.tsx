'use client';

import { Toaster } from 'react-hot-toast';

export default function PostsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-gradient-to-b from-yellow-100 to-white min-h-screen p-6">
      {children}
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}
