import dbConnect from "@/lib/dbConnect";

const Services = async () => {
  const data = await (await dbConnect("services")).find({}).toArray();

  console.log(data);
  return (
    <div>
      <h1>Services</h1>
    </div>
  );
};

export default Services;
