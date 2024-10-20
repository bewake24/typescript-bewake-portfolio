import frontendDevelopment from "../assets/Images/frontend-development.png";

const About = () => {
  return (
    <section id="about" className="py-10">
      <div className="mt-12">
        <h2 className="text-3xl font-bold mb-8 gradient-text">What I Do</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Frontend Development:</strong> Crafting clean, responsive,
            and visually appealing interfaces using <strong>React</strong>,{" "}
            <strong>Tailwind</strong>, <strong>Bootstrap</strong>, and modern
            JavaScript frameworks.
          </li>
          <li>
            <strong>Backend Development:</strong> Building efficient APIs and
            handling server-side logic using <strong>Node.js</strong>,{" "}
            <strong>Express</strong>, and <strong>Mongoose</strong>.
          </li>
          <li>
            <strong>Database Management:</strong> Proficient in{" "}
            <strong>MySQL</strong> and <strong>MongoDB</strong>, ensuring smooth
            data operations for both relational and NoSQL databases.
          </li>
          <li>
            <strong>Devops:</strong> Helping clients bring their ideas to life
            by delivering high-quality, customized web solutions.
          </li>
        </ul>
        <img src={frontendDevelopment} alt="Frontend Development" className="w-full mt-8" />
      </div>
    </section>
  );
};

export default About;
