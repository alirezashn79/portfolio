const ProjectItem = ({ title, img }) => {
  return (
    <div className="h-auto w-full rounded-xl group hover:bg-gradient-to-r from-gray-400 to-myColor relative shadow-lg shadow-gray-500">
      <img src={img} alt="/" className="rounded-xl group-hover:opacity-10" />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center text-white">
        <h3 className="text-2xl font-bold tracking-wider">{title}</h3>
        <p className="pt-2 pb-4">React js</p>
        <a
          href="/"
          className="text-gray-700 bg-white p-2 rounded-lg font-bold text-lg"
        >
          More Info
        </a>
      </div>
    </div>
  );
};

export default ProjectItem;
