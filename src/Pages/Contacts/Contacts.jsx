import "./Contacts.css";

function Contacts() {
  return (
    <>
      <div className="contacts-wrap">
        <h1>Contact Wirth Us</h1>
        <div className="contact-channels">
          <div className="contact-channel">
            <div>
              <h3 className="channel-name">Customer Support</h3>
              <p>Phone: +8801713-489764</p>
              <p>customersupport@hj.com</p>
            </div>
            <div>
              <img src="/img/call.png" alt="" />
            </div>
          </div>
          <div className="contact-channel">
            <div>
              <h3 className="channel-name">Enterprise Solution</h3>
              <p>Phone: +8801763-898172</p>
              <p>enterprisesolution@hj.com</p>
            </div>
            <div>
              <img src="/img/enterprise.png" alt="" />
            </div>
          </div>
          <div className="contact-channel">
            <div>
              <h3 className="channel-name">Press Inquiries</h3>
              <p>Phone: +8801616-065766</p>
              <p>pressinquiries@hj.com</p>
            </div>
            <div>
              <img src="/img/press.png" alt="" />
            </div>
          </div>
        </div>
        <div className="offices">
          <h2>Our Offices</h2>

          <div className="office">
            <img src="/img/map.png" alt="" />
            <div>
              <h3>Dhaka Office</h3>
              <address>
                761, Safuragreen, Satmosjid Road, Dhanmondi, Dhaka-1209,
                Bangladesh
              </address>
            </div>
          </div>
          <div className="office">
            <img src="/img/map.png" alt="" />
            <div>
              <h3>San Francisco Office</h3>
              <address>
                Market Square, 1355 Market St suite 900, San Francisco, CA
                94103, United States
              </address>
            </div>
          </div>
          <div className="office">
            <img src="/img/map.png" alt="" />
            <div>
              <h3>London Office</h3>
              <address>
                221b, Baker Street, London-NW1-6x, United Kingdom
              </address>
            </div>
          </div>
          <div className="office">
            <img src="/img/map.png" alt="" />
            <div>
              <h3>Tokyo Office</h3>
              <address>
                1-chōme-4-18 Kōraku, Bunkyo City, Tokyo 112-0004, Japan
              </address>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contacts;
