import ProjectItem from "./ProjectItem";

const Projects = () => {
  const projectsItem = [
    {
      title: "DigiKala",
      img: "/assets/main.webp",
    },
    {
      title: "Divar",
      img: "/assets/main.webp",
    },
    {
      title: "Punisha",
      img: "/assets/main.webp",
    },
    {
      title: "Amouzeshyar",
      img: "/assets/main.webp",
    },
  ];

  return (
    <div id="projects" className=" max-w-5xl mx-auto px-4 pb-16 md:pl-20">
      <h1 className="text-4xl font-bold text-myColor text-center py-4">
        Products
      </h1>
      <p className="py-4 text-center text-gray-600">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut libero
        laborum ipsum modi consequatur nulla optio tenetur? Accusamus laboriosam
        aspernatur at numquam molestias dolore, ipsam quaerat aperiam quidem, a
        cupiditate.
      </p>
      <div className="grid md:grid-cols-2 gap-12">
        {projectsItem.map((item, idx) => (
          <ProjectItem key={idx} title={item.title} img={item.img} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
