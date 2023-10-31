const Project = ({ item }) => {
  console.log(item);
  return (
    <section className="flex items-center justify-center max-w-6xl mx-auto gap-4">
      <div>
        <img className="" src={item.img} />
      </div>
      <div className="w-full">
        <p className="capitalize">{item.name}</p>
        <p>{item.description}</p>
      </div>
    </section>
  );
};

export default Project;
