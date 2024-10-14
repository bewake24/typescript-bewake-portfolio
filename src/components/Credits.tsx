const Credits = () => {
  const sections = [
    { id: 1, title: "Home" },
    { id: 2, title: "Blog" },
  ];

  return (
    <div className="min-h-screen bg-[#1e1e3a] text-white p-4 md:p-8 ">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-6xl md:text-center font-bold my-8 md:my-16 gradient-text">
          Credits
        </h2>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/3 hidden md:block">
            <nav>
              <ul className="space-y-2">
                {sections.map((section) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.title}`}
                      className="hover:text-purple-400 transition-colors"
                    >
                      {section.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="md:w-2/3 bg-purple-900 bg-opacity-20 p-6 rounded-lg">
            <section id="section-1">
              <h2 className="text-2xl font-semibold mb-4">Home</h2>
              <p className="mb-4">
                <ul>
                  <li>
                    Frontend Icon:
                    <a href="https://www.freepik.com/free-psd/3d-nft-icon-digital-artist-male_25469816.htm#query=developer%203d&position=22&from_view=keyword&track=ais_hybrid-rr-similar&uuid=b7fdc59c-fae6-45d7-b2fb-41b4344ff119">
                      <span className="gradient-text"> Image by Graphue</span>
                    </a>{" "}
                    on Freepik .
                  </li>

                  <li>
                    Backend Icon: Image by
                    <a href="https://www.freepik.com/free-psd/seo-icon-pack_320758552.htm#fromView=search&page=1&position=12&uuid=5e85ee22-3489-4b16-8774-c4bd0e424c6c">
                      <span className="gradient-text"> Freepik</span>.
                    </a>
                  </li>

                  <li>
                    Devops Icon: Image by
                    <a href="https://www.freepik.com/free-psd/marketing-character-composition-rendering_263115436.htm#fromView=search&page=2&position=22&uuid=9db465d1-863a-4ea0-82e6-c3f88eb14108">
                      <span className="gradient-text"> Freepik</span>.
                    </a>
                  </li>

                  <li>
                    Database Icon: Image by
                    <a
                      href="https://www.freepik.com/free-vector/cloud-computing-concept_1531135.htm#fromView=search&page=4&position=20&uuid=7d4fa8a4-e36d-4769-8e07-3241ff48d4ca"
                      target="_blank"
                    >
                      <span className="gradient-text">
                        {" "}
                        macrovector on Freepik
                      </span>
                      .
                    </a>
                  </li>
                </ul>
              </p>
            </section>
            <div className="h-16"></div>
            <p className="text-xs text-purple-400">
              * Website is currently under development. Credits to some
              resources might be missing. I'm Working hard to complete this site
              as soon as possible. If you have any objection please{" "}
              <a href="mailto:vivek@valeff.com" className="text-slate-200">
                {" "}
                reach out to me
              </a>
            </p>
            {/* Add more sections as needed */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Credits;
