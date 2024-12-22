export function Blog() {
  const blogs = [
    {
      title: 'AI Sex Chat Features & Benefits',
      date: 'October 1,2024',
    },
    {
      title:
        'Unveiling Hidden Desires:The Increasing Acceptance of Kinks in Modern America',
      date: 'June 26,2024',
    },
    {
      title: 'Spicy Chat Al: Redefining Virtual Companionship',
      date: 'October 15,2024',
    },
    {
      title: 'Understanding the Features of Romantic Al and How to Use Them',
      date: 'November 1,2024',
    },
  ]

  return (
    <div id="Blog" className="main-layout flex flex-col !mt-44">
      <h2 className="text-white font-montserrat-bold text-[71px] font-extrabold leading-normal">
        Blog
      </h2>

      <ul className="grid grid-cols-4 gap-16 mt-16">
        {blogs.map((x) => (
          <li
            className="bg-[#515354] rounded-[20px] px-6 pt-6 pb-9 relative"
            key={x.title}
          >
            <img src="/blog-pic.svg" alt="" />
            <h3 className="text-[#EEECEA] font-montserrat text-[18px] my-10">
              {x.date}
            </h3>

            <div className="text-[#EEECEA] font-montserrat-bold text-[22px] min-h-36 max-h-52 break-words overflow-hidden">
              {x.title}
            </div>

            <p className="text-[#EEECEA] font-montserrat text-[16px] font-thin">
              See more {'>'}
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}
