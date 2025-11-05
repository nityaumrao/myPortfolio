'use client';

export const SocialButtons = () => {
  return (
    <div className="flex gap-4 justify-center items-center">
      <a
        href="https://github.com/nityaumrao"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center px-6 py-2 rounded-full border border-black/30 bg-teal-500 text-white hover:bg-teal-700 transition-colors duration-300 dark:border-white/30 dark:bg-white dark:text-black dark:hover:bg-white/90"
      >
        <svg
          className="w-5 h-5 mr-2"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.603-3.369-1.343-3.369-1.343-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.544 2.914 1.186.092-.924.35-1.544.636-1.9-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.270.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.194 22 16.440 22 12.017 22 6.484 17.523 2 12 2z" clipRule="evenodd" />
        </svg>
        GitHub
      </a>

      <a
        href="https://www.linkedin.com/in/nityaumrao"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center px-6 py-2 rounded-full border border-blue-600 bg-blue-400 text-white hover:bg-blue-800 transition-colors duration-300"
      >
        <svg
          className="w-5 h-5 mr-2"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.05-8.736 0-9.646h3.554v1.348c.429-.619 1.196-1.5 2.905-1.5 2.122 0 3.714 1.383 3.714 4.357v5.441zM5.337 9.432c-1.144 0-1.915-.758-1.915-1.704 0-.947.768-1.703 1.96-1.703 1.192 0 1.917.756 1.94 1.703 0 .946-.748 1.704-1.985 1.704zm1.946 11.02H3.391V9.806h3.892v10.646zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
        LinkedIn
      </a>
    </div>
  );
};

export default SocialButtons;
