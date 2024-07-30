import { getCollections } from "@/lib/actions/actions";
import Image from "next/image";
import Link from "next/link";

const Collections = async () => {
  const collections = await getCollections();

  const logos = [
    "/TULUM AKUMAL LOGO.png",
    "/ISLAS LOGO.png",
    "/CHICHEN LOGO.png",
    "/CENOTES LOGO.png",
    
  ];

  return (
    <div className="flex flex-col items-center gap-10 py-8 px-5">
      <p className="text-heading1-bold">Featured</p>
      {!collections || collections.length === 0 ? (
        <p className="text-body-bold">No collections found</p>
      ) : (
        <div className="flex flex-wrap items-center justify-center gap-8">
          {collections.map((collection: CollectionType, index: number) => (
            <Link href={`/collections/${collection._id}`} key={collection._id}>
              <div className="relative rounded-lg cursor-pointer">
                <Image
                  src={collection.image}
                  alt={collection.title}
                  width={350}
                  height={200}
                />
                <div className="absolute top-0 left-0 w-full h-full z-1 flex flex-col justify-center items-center space-y-1 font-rowdies">
                  <div className="absolute bottom-1 right-1 bg-white bg-opacity-5 p-4 rounded backdrop-blur-md transform transition duration-500 hover:scale-110">
                    <Image
                      src={logos[index]}
                      alt="Logo"
                      width={50}
                      height={50}
                    />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Collections;