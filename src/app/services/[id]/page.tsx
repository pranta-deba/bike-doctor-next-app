const ServicesDetails = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;

  console.log(id);
  return (
    <div>
      <h1>page</h1>
    </div>
  );
};

export default ServicesDetails;
