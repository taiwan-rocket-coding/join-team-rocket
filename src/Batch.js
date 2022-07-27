import Card from "./Card";

const Batch = ({ memberData }) => {
  const { batch, members } = memberData;
  return (
    <div className="container mx-auto px-4 text-4xl">
      <div className="mb-14">
        <h2 className="text-center text-primary mb-12">第{batch}梯</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
          {members.map((member, index) => (
            <Card key={index} data={member} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Batch;
