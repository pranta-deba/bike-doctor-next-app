import Image from "next/image";
import Link from "next/link";

const ServicesDetails = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;

  const res = await fetch(`${process.env.BASE_URL}/api/service/${id}`);
  const service = await res.json();

  console.log(service);

  if (!service) return <div>Service not found</div>;

  const aspectRatio = 16 / 9;
  const containerWidth = 768;
  const containerHeight = Math.round(containerWidth / aspectRatio);

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div
        className="relative w-full mb-6 overflow-hidden rounded-md"
        style={{ height: containerHeight }}
      >
        <Image
          src={service.image}
          alt={service.name}
          width={containerWidth}
          height={containerHeight}
          layout="responsive"
          objectFit="cover"
        />
      </div>
      <h1 className="text-3xl font-bold mb-4">{service.name}</h1>
      <p className="text-lg text-gray-700 mb-2">{service.description}</p>
      <p className="text-lg font-semibold text-blue-600 mb-4">
        {service.currency} ${service.price}
      </p>
      <Link
        href="/checkout"
        className="inline-block bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 transition-colors"
      >
        Proceed to Checkout
      </Link>
    </div>
  );
};

export default ServicesDetails;
