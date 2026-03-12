'use client';

import { Show, SignInButton, UserButton } from '@clerk/nextjs';

export const AuthButtons = () => {
  return (
    <div className="flex items-center ml-4">
      <Show when="signed-out">
        <SignInButton mode="modal">
          <button className="px-4 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold transition-colors cursor-pointer">
            Sign In
          </button>
        </SignInButton>
      </Show>
      <Show when="signed-in">
        <UserButton afterSignOutUrl="/" />
      </Show>
    </div>
  );
};
