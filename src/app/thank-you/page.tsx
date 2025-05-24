export default function ThankYouPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white px-4 py-12">
      <div className="text-center max-w-md">
        <h1 className="text-3xl font-bold text-gray-900">🎉 Thank You!</h1>
        <p className="mt-4 text-lg text-gray-700">
          Your booking is confirmed.
        </p>
        <p className="mt-2 text-sm text-gray-500">
          You’ll receive an email shortly with the Google Meet link.
        </p>
      </div>
    </div>
  );
}
