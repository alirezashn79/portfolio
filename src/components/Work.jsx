import WorkItem from "./WorkItem";

const Work = () => {
  const items = [
    {
      year: 2020,
      title: "Content Creator",
      duration: "3 Years",
      details:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et nam eligendi voluptatem fugit magnam? Quia illum vero illo debitis, corrupti unde molestiae dolor ullam, nobis nulla maxime ea sint mollitia!",
    },
    {
      year: 2017,
      title: "Amazon",
      duration: "3 Years",
      details:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et nam eligendi voluptatem fugit magnam? Quia illum vero illo debitis, corrupti unde molestiae dolor ullam, nobis nulla maxime ea sint mollitia!",
    },
    {
      year: 2015,
      title: "Google",
      duration: "2 Years",
      details:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et nam eligendi voluptatem fugit magnam? Quia illum vero illo debitis, corrupti unde molestiae dolor ullam, nobis nulla maxime ea sint mollitia!",
    },
    {
      year: 2012,
      title: "Facebook",
      duration: "3 Years",
      details:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et nam eligendi voluptatem fugit magnam? Quia illum vero illo debitis, corrupti unde molestiae dolor ullam, nobis nulla maxime ea sint mollitia!",
    },
  ];

  return (
    <div id="work" className=" max-w-5xl mx-auto py-16 px-4 md:px-16">
      <h1 className="text-4xl font-bold text-center text-myColor pb-2">Work</h1>
      {items.map((item, idx) => (
        <WorkItem
          key={idx}
          year={item.year}
          title={item.title}
          duration={item.duration}
          details={item.details}
        />
      ))}
    </div>
  );
};

export default Work;
