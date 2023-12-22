const WorkItem = ({ year, title, duration, details }) => {
  return (
    <ol className="border-l border-stone-300 ml-2 pl-4 relative">
      <li className="pb-10">
        <div className="w-3 h-3 bg-stone-300 rounded-full absolute border-white top-2 -left-1.5" />
        <p className="flex items-center justify-start gap-4 text-xs md:text-sm">
          <span className="bg-myColor text-white font-semibold px-2 py-1 rounded-md">
            {year}
          </span>
          <span className="text-myColor font-semibold text-lg">{title}</span>
          <span className="text-stone-500 font-normal leading-none text-sm">
            {duration}
          </span>
        </p>
        <p className="my-2 text-stone-600 text-base">{details}</p>
      </li>
    </ol>
  );
};

export default WorkItem;
