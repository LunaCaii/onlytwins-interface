export function Blog() {
  const blogs = [
    {
      title: 'AI Sex Chat Features & Benefits',
      date: 'October 1,2024',
    },
    {
      title:
        'Unveiling Hidden Desires:The Increasing Acceptance of Kinks in Modern AmericaUnveiling Hidden Desires:The Increasing Acceptance of Kinks in Modern America Unveiling Hidden Desires:The Increasing Acceptance of Kinks in Modern America',
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
    <div id="Blog" className="main-layout flex flex-col lg:!mt-44">
      <h2 className="text-white font-montserrat-bold text-[71px] font-extrabold leading-normal">
        Blog
      </h2>

      <ul className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-16 mt-16">
        {blogs.map((x, index) => (
          <li
            className={`relative bg-[#515354] h-fit rounded-[20px] p-2 lg:px-6 lg:pt-6 lg:pb-9 ${
              index % 2 === 0 ? '' : 'mt-20'
            }`}
            key={x.title}
          >
            <img src="/blog-pic.svg" alt="" />
            <h3 className="text-[#EEECEA] font-montserrat text-[10px] lg:text-[18px] my-3 lg:my-10">
              {x.date}
            </h3>

            <div className="text-[#EEECEA] font-montserrat-bold text-[12px] lg:text-[22px] min-h-20 mb-12 lg:min-h-36 max-h-16 lg:max-h-52 break-words overflow-hidden">
              {x.title}
            </div>

            <p className="max-lg:absolute text-[#EEECEA] font-montserrat text-[12px] lg:text-[16px] font-thin bottom-2">
              See more {'>'}
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}
