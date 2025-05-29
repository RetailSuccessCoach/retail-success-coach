"use client";

export default function NotFoundClient() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-24">
      <h1 className="text-4xl font-bold mb-4">404 – Page Not Found</h1>
      <p className="text-gray-600 text-center max-w-md">
        Sorry, we couldn’t find the page you were looking for.
      </p>
    </div>
  );
}
