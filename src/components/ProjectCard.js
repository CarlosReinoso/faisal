import Image from "next/image";

const ProjectCard = ({ imageUrl, location, area, category }) => {
  return (
    <div className="relative w-full h-96 m-4 group">
      <div className="absolute inset-0 border-2 border-white p-1">
        <div className="relative w-full h-full overflow-hidden">
          <Image
            src={imageUrl}
            alt={`${location} image`}
            layout="fill"
            objectFit="cover"
            className="rounded-sm transition-transform duration-300 ease-in-out transform group-hover:scale-110"
            style={{ opacity: 0.6 }}
          />
        </div>
        <div className="absolute inset-0 border border-gray-200 m-4">
          <div className="absolute top-0 left-0 w-full flex justify-center">
            <div className="bg-gray-100 text-black text-center py-2 px-4 w-40">
              {category}
            </div>
          </div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-white text-lg font-semibold">{location}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
