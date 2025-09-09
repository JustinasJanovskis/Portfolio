import { useRef, useState, useEffect } from 'react';

function ScrollButton({ children, onClick, active }) {
  return (
    <button
      onClick={onClick}
      style={{
        background: 'none',
        border: 'none',
        padding: 0,
        margin: 0,
        color: 'white',
        fontSize: '1.1rem',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        fontWeight: active ? 'bold' : 'normal',
        opacity: active ? 1 : 0.6,
        transition: 'all 0.2s ease',
      }}
    >
      <span
        style={{
          display: 'inline-block',
          width: '10px',
          height: '10px',
          borderRadius: '50%',
          backgroundColor: active ? 'white' : '#aaa',
        }}
      />
      {children}
    </button>
  );
}

function SimplePDFViewer({ filePath }) {
  return (
    <iframe
      src={filePath}
      width="100%"
      height="400px"
      style={{ border: 'none', borderRadius: '8px', marginTop: '1rem' }}
      title="PDF Viewer"
    />
  );
}

/*Circles for Programming Language Icons*/
const circleIconStyle = {
  width: 60,
  height: 60,
  borderRadius: '50%',
  objectFit: 'cover',
  border: '2px solid white',
};


export default function Home() {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);
  const section5Ref = useRef(null);
  const section6Ref = useRef(null);

  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = [
      { ref: section1Ref, id: 'about' },
      { ref: section2Ref, id: 'skills'},
      { ref: section3Ref, id: 'projects' },
      { ref: section4Ref, id: 'resume' },
      { ref: section5Ref, id: 'contact' },
      { ref: section6Ref, id: 'experience' },
    ];

    sections.forEach(({ ref }) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      sections.forEach(({ ref }) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);

  const scrollTo = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
      {/* Fixed Left Side */}
      <div
        style={{
          width: '45%',
          minWidth: '320px',
          boxSizing: 'border-box',
          background: 'linear-gradient(225deg, #0F172A 0%, #1E293B 86%)',
          color: 'white',
          position: 'sticky',
          top: 0,
          height: '100vh',
          padding: '8rem 5rem 2rem 16rem',
        }}
      >
        <img
            src={process.env.PUBLIC_URL + "/Portrait.jpg"}
            alt="Justinas Portrait"
            style={{
              width: 60,
              height: 60,
              borderRadius: '50%',
              objectFit: 'cover',
              transform: 'scale(1.3)',
              border: '2px solid white',
            }}
          />
        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          <h1 style={{ margin: 0, fontSize: '3rem', whiteSpace: 'nowrap' }}>Justinas Janovskis</h1>
        </div>
        {/*Short Description about me */}
        <h2 style={{ margin: 0, fontSize: '1.5rem' }}>Software Engineer | Full Stack Developer</h2>
        <p>Turning today's ideas into tomorrow's breakthroughs.</p>

        {/*Creating all of the buttons on the left side for the scrolling sections */}
        <div style={{ marginTop: '3rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <ScrollButton
            onClick={() => scrollTo(section1Ref)}
            active={activeSection === 'about'}>
            About Me
          </ScrollButton>

          <ScrollButton
            onClick={() => scrollTo(section2Ref)}
            active={activeSection === 'skills'}>
            Skills
          </ScrollButton>

          <ScrollButton
            onClick={() => scrollTo(section3Ref)}
            active={activeSection === 'projects'}>
            Projects
          </ScrollButton>
          
          <ScrollButton
            onClick={() => scrollTo(section6Ref)}
            active={activeSection === 'experience'}>
            Experience
          </ScrollButton>

          <ScrollButton
            onClick={() => scrollTo(section4Ref)}
            active={activeSection === 'resume'}>
            Resume
          </ScrollButton>

          <ScrollButton
            onClick={() => scrollTo(section5Ref)}
            active={activeSection === 'contact'}>
            Contact
          </ScrollButton>
        </div>
      </div>

      {/* Scrollable Right Side */}
      <div
        style={{
          width: '55%',
          minWidth: '400px',
          height: '100vh',
          overflowY: 'scroll',
          padding: '2rem',
          paddingTop: '8rem',
          paddingRight: '8rem',
          background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 70%)',
          color: 'white',
        }}
      >
        {/*About me section */}
        <section id="about" ref={section1Ref} style={{padding: '1rem' }}>
          <h1>About Me</h1>
          <p>I'm a developer focused on creating practical, real-world applications that help others solve problems through research and thoughtful design.
            What I love most about being a software developer is the ability to tackle challenges head-on — creating new solutions to problems 
            both new and old. I'm passionate about turning ideas into reality and adapting to a wide range of domains, from embedded systems and socket
            programming to AI model integration and mobile app development.
          </p>
          <p>
            I recently graduated from California State University San Marcos with a B.S. in Computer Science, earning Summa Cum Laude honors with a 4.0 GPA.
            Throughout my academic journey, I collaborated on diverse team projects, applying both leadership and technical skills to deliver timely, impactful solutions. 
            Working in collaboration with students and mentors, I developed relationships that played a key role in shaping my communication, adaptability,
            and approach to team-oriented projects.
          </p>
          <p>
            I was fortunate to gain industry experience through a mentorship with a member of Qualcomm’s Computer Vision team, where I collaborated with a team
            to develop and deploy a leaderboard web application showcasing image classification models from Qualcomm's AI Hub.
          </p>
          <p>
            Outside of work my hobbies include hiking, biking, and playing sports such as soccer and volleyball. During school, I was actively involved in the finance club, chess
            club, and ping pong club.  I played soccer on recreational teams for Storm, where I was nominated to the all-star team for five different seasons, and also selected for
            the premier all-stars team to travel and compete in local tournaments.
            I also dedicated four years to the marching band at Rancho Buena Vista High School, where I competed alongside other 6A bands in SCSBOA
            tournaments. Most recently, I had the opportunity to participate in the 2025 ACM Hackathon at CSUSM, where I tackled coding challenges of varying difficulty and 
            developed creative solutions.
          </p>
          {/* Relevant Coursework Section */}
          <p style={{ maxWidth: '500px', lineHeight: '1.6' }}>
            <strong>Relevant Coursework:</strong> Operating Systems, Computer Networks, AI & Machine Learning, Software Engineering, Databases, Data Structures
          </p>
        </section>

        {/* Skills Section */}
        <section id="skills" ref={section2Ref} style={{padding: '1rem' }}>
          <h1>Skills</h1>
          <h2>Programming Languages</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
            {/* First Row */}
            <div style={{ display: 'flex', gap: '1.5rem'}}>
              <img src={process.env.PUBLIC_URL + "/c++-icon.png"} alt="C++" style={circleIconStyle} />
              <img src={process.env.PUBLIC_URL + "/c-icon.png"} alt="C" style={circleIconStyle} />
              <img src={process.env.PUBLIC_URL + "/python-icon.webp"} alt="Python" style={circleIconStyle} />
            </div>
            {/* Second Row */}
            <div style={{ display: 'flex', gap: '1.5rem', marginLeft: '2.75rem' }}>
              <img src={process.env.PUBLIC_URL + "/javascript.png"} alt="JavaScript" style={circleIconStyle} />
              <img src={process.env.PUBLIC_URL + "/sql.jpg"} alt="SQL" style={circleIconStyle} />
            </div>
            {/* Third Row */}
            <div style={{ display: 'flex', gap: '1.5rem'}}>
              <img src={process.env.PUBLIC_URL + "/java.png"} alt="Java" style={circleIconStyle} />
              <img src={process.env.PUBLIC_URL + "/kotlin.jpg"} alt="Kotlin" style={circleIconStyle} />
              <img src={process.env.PUBLIC_URL + "/assembly.png"} alt="Assembly" style={circleIconStyle} />
            </div>
          </div>

          {/* Frameworks Section */}
          {/* Frameworks */}
          <h2>Frameworks</h2>
          <p style={{ maxWidth: '500px', lineHeight: '1.6', marginBottom: '1.5rem' }}>
            TensorFlow, PyTorch, Keras, scikit-learn, ONNX Runtime, OpenCV, FastAPI, SQLModel, React, Android SDK, Mbed OS
          </p>

          {/* Libraries */}
          <h2>Libraries</h2>
          <p style={{ maxWidth: '500px', lineHeight: '1.6', marginBottom: '2rem' }}>
            Pydantic, SQLAlchemy, bcrypt, passlib, PyJWT, OAuth2.0, Pillow, email-validator, chart.js, H5py, NumPy, QAI-Hub
          </p>

          {/* Tools & Platforms */}
          <h2>Tools & Platforms</h2>
          <p style={{ maxWidth: '500px', lineHeight: '1.6' }}>
            Android Studio, Firebase, MongoDB, Figma, Mbed Studio, Git, Github, Docker, Hostinger, AWS EC2, CSUSM HPC, Google Colab, VS Code, Wireshark
          </p>

        </section>

        {/*My Projects section */}
        <section id="projects" ref={section3Ref} style={{padding: '1rem' }}>
          <h1>Projects</h1>
          {/*My Capstone/Biggest Project */}
          <div style={{ marginBottom: '8rem' }}>
            <h2>ApprAIse "Senior Project"</h2>
            <p> As part of a 4-person team, I collaborated with a mentor from Qualcomm to design and develop 
              <strong> ApprAIse</strong> - a web application that benchmarks image classification models 
              from Qualcomm’s AI Hub. Our system evaluates these models using the ImageNet-1K dataset and 
              presents the results through an interactive leaderboard.
            </p>
            <p>
              The platform enables developers to compare model performance and even upload sample images 
              to see real-time inference speed based on their selected model. We focused on building 
              a visually appealing, developer-friendly interface that delivers actionable insights for 
              AI researchers and engineers working in the image classification space.
            </p>
            <strong>Tools:</strong> QAI-hub, Python, HTML, CSS, JavaScript, Figma

            <p>I had the amazing opportunity to share our innovative work with over 70 attendees, including engineers and fellow students, at Qualcomm’s campus.</p>

            <video
              width="100%"
              height="auto"
              controls
              style={{ borderRadius: '8px', marginTop: '1rem' }}>
              <source src={process.env.PUBLIC_URL + "/ApprAIse_Presentation.mp4"} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p>
              Check out the <a href="https://github.com/adoante/apprAIse" target="_blank" rel="noopener noreferrer" style={{ color: '#4ade80', textDecoration: 'underline' }}>
              apprAIse Github</a> to see the full project code and details.
            </p>
          </div>

          {/*Fire and Smoke Detection Using Yolo Models */}
          <div style={{ marginBottom: '8rem' }}>
              <h2>Fire and Smoke Detection</h2>
              <p>
                Implemented and fine-tuned fire and smoke detection models based on YOLOv8 and YOLOv12 architectures, 
                inspired by previously published research. Applied transfer learning to compare model performance before and after fine-tuning. 
                Analyzed differences in accuracy and reliability across both models to identify improvements in real-world fire surveillance tasks.  
              </p>
              <p>
                <strong>Tools:</strong> Python, Ultralytics YOLOv8, YOLOv12, PyTorch, Roboflow
              </p>
              <SimplePDFViewer filePath={process.env.PUBLIC_URL + "/fire_smoke.pdf"} />
          </div>

          {/*Computer Security Project*/}
          <div style={{marginBottom: '8rem' }}>
            <h2>AI Security "Jailbreaking Deepseek"</h2>
            <p>
              Performed testing on DeepSeek's content filters using techniques like prompt obfuscation,
              hexadecimal encoding, and fictional framing. Evaluated the LLM's vulnerability to prompt injection
              and censorship bypasses to highlight risks and propose safeguards.
            </p>
            <p>
              <strong>Tools:</strong> DeepSeek, Prompt Engineering, RapidTables, Chat Interface
            </p>
            <SimplePDFViewer filePath= {process.env.PUBLIC_URL + "/AI-Security-Project.pdf"} />
          </div>

          {/*Pomodoro Timer*/}
          <div style={{marginBottom: '8rem'}}>
            <h2>Pomodoro Timer</h2>
            <p>
              Collaborated in a team of two to design and build a customizable Pomodoro timer that encourages
              focused study sessions by alternating work intervals with breaks. The system includes five OLED
              displays and four push buttons, allowing users to adjust timers in real time and track session
              progress. Visual and auditory cues are provided through LEDs and a buzzer. Unlike traditional
              timers, this version emphasizes user control and physical interactivity through a compact embedded design.
            </p>
            <p>
              <strong>Tools:</strong> Arduino, C++, OLEDs, Circuits
            </p>
            <SimplePDFViewer filePath={process.env.PUBLIC_URL + "/Pomodoro-Timer-Project.pdf"}/>
          </div>
        </section>


        {/* Experience Section */}
        <section id="experience" ref={section6Ref} style={{padding: '1rem' }}>
          <h1>Experience</h1>

          {/* Math Tutor Experience */}
          <div style={{ marginBottom: '3rem' }}>
            <h2>Mathematics Tutor</h2>
            <h4>Rancho Buena Vista High School – Vista, CA</h4>
            <p><em>November 2020 – March 2021</em></p>
            <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.8' }}>
              <li>Tutored 5+ students weekly, explaining complex math concepts and assisting with homework from algebra through calculus.</li>
              <li>Improved student performance through one-on-one guidance and positive reinforcement.</li>
            </ul>
          </div>

          {/* Hackathon Participation */}
          <div>
            <h2>CSUSM ACM Hackathon Participant</h2>
            <h4>California State University San Marcos</h4>
            <p><em>Spring 2025</em></p>
            <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.8' }}>
              <li>Participated in a 1-week coding challenge hosted by ACM at CSUSM.</li>
              <li>Collaborated with a team to solve varying difficulty problems and build a creative solution under time constraints.</li>
              <li>Strengthened skills in teamwork, coding under pressure, and developing creative solutions.</li>
            </ul>
          </div>
        </section>

        {/*Resume section */}
        <section id="resume" ref={section4Ref} style={{padding: '1rem' }}>
          <h1>Resume</h1>
          <p>View and download my full resume below</p>
          <a
            href={process.env.PUBLIC_URL + '/Justinas_Janovskis_Resume_2025.pdf'}
            download
            style={{ color: '#4ade80', textDecoration: 'underline', cursor: 'pointer' }}
          >
            Download Resume (PDF)
          </a>
        </section>

        {/*Contact Information/Resume section */}
        <section id="contact" ref={section5Ref} style={{padding: '1rem' }}>
          <h1>Contact</h1>
          <p>Feel free to reach out!</p>
          <p>Email: <a href="mailto:justinasjano@gmail.com" style={{ color: '#4ade80' }}>justinasjano@gmail.com</a></p>
          <p>
            LinkedIn: <a href="https://www.linkedin.com/in/justinas-janovskis-86a6a12a1/" target="_blank" rel="noopener noreferrer" style={{ color: '#4ade80' }}>
              linkedin.com/in/justinas-janovskis
            </a>
          </p>

          <p>
            GitHub: <a href="https://github.com/JustinasJanovskis" target="_blank" rel="noopener noreferrer" style={{ color: '#4ade80' }}>
            github.com/JustinasJanovskis
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
