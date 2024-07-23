export default function Button({ buttonUrl, buttonText }) {
  return (
    <div className="mt-4 flex justify-center">
      <a
        href={buttonUrl}
        className="inline-block px-6 py-3 border-2 border-black text-black font-semibold rounded-full hover:bg-gray-800 hover:text-white transition duration-300 ease-in-out"
      >
        {buttonText}
      </a>
    </div>
  );
}
