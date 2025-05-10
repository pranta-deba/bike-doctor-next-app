import dbConnect, { COLLECTION_NAME } from "@/lib/dbConnect";
import Image from "next/image";
import Link from "next/link";

const Services = async () => {
  const data = await (await dbConnect(COLLECTION_NAME.SERVICES))
    .find({})
    .toArray();

  return (
    <div className="px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Our Services</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {data.map((service) => (
          <div
            key={service._id.toString()}
            className="bg-white shadow-lg rounded-xl overflow-hidden transition hover:scale-105 duration-300"
          >
            <div className="relative w-full h-56">
              <Image
                src={service.image}
                alt={service.name}
                width={600}
                height={200}
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{service.name}</h2>
              <p className="text-gray-600 mb-2">{service.description}</p>
              <p className="text-primary font-bold mb-4">
                {service.currency} ${service.price}
              </p>
              <Link
                href={`/services/${service._id}`}
                className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
