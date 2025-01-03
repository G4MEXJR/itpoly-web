import React from 'react';
import Header from '../components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

function About() {
  return (
    <div>
      <Header />
      <div className="container mt-5" style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#F0FFF0', borderRadius: '10px', padding: '20px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
        <h2 className="text-center mb-4" style={{ color: '#2E7D32' }}>หลักสูตรประกาศนียบัตรวิชาชีพ</h2>
        
        {/* Section: Introduction */}
        <div className="row mb-5">
          <div className="col-lg-6">
            <h3 style={{ color: '#2E7D32' }}>พุทธศักราช 2567</h3>
            <p style={{ color: '#555555' }}>
              เป็นหลักสูตรระดับประกาศนียบัตรวิชาชีพหลังจากจบการศึกษาระดับมัธยมศึกษาตอนต้นหรือเทียบเท่า
              ซึ ่งเป็นการจัดการศึกษา ด้านวิชาชีพและยกระดับการศึกษาวิชาชีพของบุคคลให้สูงขึ้น สอดคล้อง
              กับแผนพัฒนาเศรษฐกิจและสังคมแห ่งชาติ แผนการศึกษาแห ่งชาติ เป็นไปตามกรอบคุณวุฒิแห ่งชาติ
              กรอบคุณวุฒิอ้างอิงอาเซียน หรือกรอบคุณวุฒิอื ่นในระดับสากล มาตรฐานการศึกษาของชาติ
              และกรอบคุณวุฒิอาชีวศึกษาแห่งชาติโดยเน้นการเรียนรู้ด้วยการปฏิบัติ เพื่อพัฒนาสมรรถนะกําลังคน
              ระดับฝีมือ รวมทั้งคุณธรรม จริยธรรม จรรยาบรรณวิชาชีพ และกิจนิสัยที ่เหมาะสมในการทํางาน
              ให้สอดคล้องกับความต้องการกําลังคนของตลาดแรงงาน ชุมชนสังคม และการพัฒนาประเทศ
              รวมทั้งประกอบอาชีพอิสระได้
            </p>
          </div>
          <div className="col-lg-6">
            <img
              src="https://scontent.fbkk13-2.fna.fbcdn.net/v/t39.30808-6/287364821_5626452760698281_8820890121130721538_n.png"
              alt="About Us"
              className="img-fluid rounded shadow"
            />
          </div>
        </div>

        {/* Section: Mission */}
        <div className="row mb-5">
          <div className="col-lg-6">
            <img
              src="https://scontent.fcnx3-1.fna.fbcdn.net/v/t39.30808-6/465978142_1089522303173861_2020056444694595837_n.jpg"
              alt="Our Mission"
              className="img-fluid rounded shadow"
            />
          </div>
          <div className="col-lg-6">
            <h3 style={{ color: '#2E7D32' }}>หลักสูตรใหม่</h3>
            <p style={{ color: '#555555' }}>
              หลักสูตรประกาศนียบัตรวิชาชีพ พุทธศักราช 2567 เป็นหลักสูตรหลังจากจบการศึกษา
              ระดับมัธยมศึกษาตอนต้นหรือเทียบเท่า ที่พัฒนาขึ้นเพื่อใช้ในการจัดการศึกษาด้านวิชาชีพ
              ระดับประกาศนียบัตรวิชาชีพ เพื่อยกระดับการศึกษาวิชาชีพของบุคคลให้สูงขึ้น สอดคล้องกับ ยุทธศาสตร์ชาติ
              แผนพัฒนาเศรษฐกิจและสังคมแห่งชาติ อุตสาหกรรมเป้าหมายในการพัฒนาประเทศ แผนการศึกษาแห่งชาติ
              ความต้องการของสถานประกอบการ รวมทั้งข้อเสนอจากคณะอนุกรรมการร่วมภาครัฐและเอกชน
              เพื่อผลิตและพัฒนากําลังคนอาชีวศึกษา (อ.กรอ.อศ.) โดยหลักสูตรดังกล่าวเป็นไปตามกรอบคุณวุฒิแห่งชาติ
              (National Qualifications Framework : NQF) และกรอบคุณวุฒิอ้างอิงอาเซียน (ASEAN Qualifications
              Reference Framework : AQRF) มาตรฐานการศึกษาของชาติ กรอบคุณวุฒิอาชีวศึกษาแห่งชาติ
              และเกณฑ์มาตรฐานคุณวุฒิอาชีวศึกษาระดับประกาศนียบัตรวิชาชีพ
            </p>
          </div>
        </div>

        {/* Section: Key Values */}
        <h3 className="text-center mb-4" style={{ color: '#2E7D32' }}>กิจกรรมและการแข่งขันทักษะ</h3>
        <div className="row text-center">
          <div className="col-md-4">
            <div className="card shadow-sm mb-4">
              <img
                src="https://scontent.fbkk12-3.fna.fbcdn.net/v/t39.30808-6/470135944_1085990173322428_1956281052542621304_n.jpg"
                alt="Quality Education"
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title" style={{ color: '#2E7D32' }}>ทักษะการเขียนโปรแกรมคอมพิวเตอร์</h5>
                <p className="card-text" style={{ color: '#555555' }}>
                  ขอแสดงความยินดีกับนักศึกษา ระดับภาค ทักษะการเขียนโปรแกรมคอมพิวเตอร์ ได้รับรางวัลรองชนะเลิศ
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow-sm mb-4">
              <img
                src="https://scontent.fcnx1-1.fna.fbcdn.net/v/t39.30808-6/455750420_1003996458188467_5607197828104470552_n.jpg"
                alt="Student Empowerment"
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title" style={{ color: '#2E7D32' }}>CMESSchoolleague2024</h5>
                <p className="card-text" style={{ color: '#555555' }}>
                  อันดับที่ 1 รอบ Midterm ของจังหวัดเชียงใหม่ เจอกันรอบ End Game จ้า
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow-sm mb-4">
              <img
                src="https://scontent.fcnx1-1.fna.fbcdn.net/v/t39.30808-6/460280362_921015173403066_7148432919746778440_n.jpg"
                alt="Community Impact"
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title" style={{ color: '#2E7D32' }}>MOE Content Creator Awards</h5>
                <p className="card-text" style={{ color: '#555555' }}>
                  “เพิ่มพูน” มอบรางวัล MOE Content Creator Awards สุดว้าว!! เยาวชน ครู บุคคลทั่วไปกวาดรางวัลเพียบ.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
