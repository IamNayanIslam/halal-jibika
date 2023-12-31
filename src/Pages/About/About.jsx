import "./About.css";

function About() {
  return (
    <>
      <div className="about-wrap">
        <div className="about">
          <h1>
            About Halal <span>Jibika</span>
          </h1>
          <h3>The Bangladesh's work marketplace</h3>

          <div className="president">
            <img src="/img/president.png" alt="" />
            <div>
              <h4>Md. Nayan Islam</h4>
              <p>Founder & President</p>
            </div>
          </div>
          <p className="p">
            Halal Jibika is the #1 job site in Bangladesh with over 30M+ unique
            visitors every month. Halal Jibika strives to put job seekers first,
            giving them free access to search for jobs, post resumes, and
            research companies. Every day, we connect millions of people to new
            opportunities.
          </p>
          <p className="note">
            Please note that Halal Jibika and its affiliates are directly or
            indirectly owned by a publicly traded Bangladeshi parent company,
            Recruit Holdings Co., Ltd.
          </p>
        </div>
        <div className="about-img">
          <img src="/img/work.png" alt="" />
        </div>
      </div>
    </>
  );
}

export default About;
