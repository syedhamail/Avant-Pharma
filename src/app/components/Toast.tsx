export default function Toast({ message }: { message: string }) {
  return (
    <div className="fixed top-6 right-6 bg-[#009B7A] text-white px-6 py-4 rounded-lg shadow-lg animate-slide-in z-50">
      {message}
    </div>
  );
}
