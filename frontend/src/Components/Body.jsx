import React from 'react';
import './Body.css';

function Body() {
  return (
    <div className="body-container">
      <h2 className="body-header">Discover the Power of Community</h2>

      {/* Our Mission section with image beside the text */}
      <div className="body-content">
        <div className="body-half">
          <h3 className="section-title">Our Mission</h3>
          <p>
            🌟 Our Mission 🌟At Active Hub 🎯, our mission is to empower 💪 developers of all skill levels 🌱🚀 to make their first contributions to open-source 🌐. We strive to create a platform that is inclusive 🤝, accessible 📲, and engaging 😃, helping beginners 👶 find their way in the vast world of open-source development 🛠. We believe that open-source is a powerful tool 🔧 for learning 📚, collaboration 🤝, and innovation 💡. By providing curated resources 📂, clear guidance 📑, and a supportive community 👥, we aim to break down the barriers 🚪 that often prevent newcomers 🆕 from contributing to open-source projects. Together, let's build a future 🔮 where everyone 🌍 can contribute to and benefit from the open-source ecosystem 🌱. Join us on this journey 🛤 to make a difference 🌈, one contribution at a time ⏳. Let's make open-source accessible for all 🌟!
          </p>
        </div>
        <div className="body-half body-image">
          <img src="/images/OurMission.jpeg" alt="Our Mission" />
        </div>
      </div>

      {/* Our Vision section with image beside the text */}
      <div className="body-content">
        <div className="body-half body-image">
          <img src="/images/pic2.webp" alt="Our Vision" />
        </div>
        <div className="body-half">
          <h3 className="section-title">Our Vision</h3>
          <p>
            🔮 Our Vision 🔮 Our vision at Active Hub 🌍 is to create a world 🌐 where every developer 💻, regardless of their background or experience level 🧑‍💻, has the opportunity to contribute meaningfully to open-source projects 🛠. We envision a vibrant 🎉 and inclusive 🌈 community where knowledge is shared freely 📚, collaboration is fostered 🤝, and innovation is driven by diverse perspectives 🌟. Through Active Hub 🚀, we aim to remove the barriers 🚧 that prevent talented developers from engaging in the open-source ecosystem 🌱. We are committed to building a platform 🏗 that is not only a resource 📖 but also a springboard 🛫 for developers to grow 🌱, learn 📚, and succeed 🎯. By empowering developers with the tools 🛠, knowledge 🧠, and community support 👥 they need, we strive to shape the future 🌟 of open-source development. Our ultimate goal is to see a world where open-source is accessible to all 🌍, where contributions are celebrated 🎉, and where every developer can leave their mark 💫 on the software that powers our digital lives 💻. Let's build this future together 🤝.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Body;
