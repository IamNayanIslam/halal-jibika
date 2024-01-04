import { useEffect } from "react";
import "./Contacts.css";
import { useInView } from "react-intersection-observer";

function Contacts() {
  const [refDhaka, inViewDhaka] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const [refSF, inViewSF] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const [refLondon, inViewLondon] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const [refTokyo, inViewTokyo] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    document.title = "Contacts || Halal Jibika";
  }, []);
  return (
    <>
      <div className="contacts-wrap">
        <h1>Contact Wirth Us</h1>
        <div className="contact-channels">
          <div className="contact-channel from-left-fast">
            <div>
              <h3 className="channel-name">Customer Support</h3>
              <p>Phone: +8801713-489664</p>
              <p>customersupport@hj.com</p>
            </div>
            <div>
              <img src="/img/call.png" alt="" />
            </div>
          </div>
          <div className="contact-channel from-right-fast">
            <div>
              <h3 className="channel-name">Enterprise Solution</h3>
              <p>Phone: +8801763-899172</p>
              <p>enterprisesolution@hj.com</p>
            </div>
            <div>
              <img src="/img/enterprise.png" alt="" />
            </div>
          </div>
          <div className="contact-channel from-left-slow">
            <div>
              <h3 className="channel-name">Press Inquiries</h3>
              <p>Phone: +8801616-065776</p>
              <p>pressinquiries@hj.com</p>
            </div>
            <div>
              <img src="/img/press.png" alt="" />
            </div>
          </div>
          <div className="contact-channel from-right-slow">
            <div>
              <h3 className="channel-name">Advice/Complain</h3>
              <p>Phone: +8801316-066766</p>
              <p>advice-complain@hj.com</p>
            </div>
            <div>
              <img src="/img/angry-customer.png" alt="" />
            </div>
          </div>
        </div>
        <div className="offices">
          <h2>Our Offices</h2>
          <iframe
            className="office-location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d271.43391267266304!2d90.36943630324899!3d23.74863225085422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8c80ca24711%3A0x17a6c6027941f80d!2sEN%20Global%20Education%20Ltd!5e0!3m2!1sbn!2sbd!4v1704208751342!5m2!1sbn!2sbd"
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          <div
            ref={refDhaka}
            className={`office ${inViewDhaka ? "from-left" : ""}`}
          >
            <img src="/img/map.png" alt="" />
            <div>
              <h3>Dhaka Office</h3>
              <address>
                761, Safuragreen, Satmosjid Road, Dhanmondi, Dhaka-1209,
                Bangladesh
              </address>
            </div>
          </div>
          <div ref={refSF} className={`office ${inViewSF && "from-right"}`}>
            <img src="/img/map.png" alt="" />
            <div>
              <h3>San Francisco Office</h3>
              <address>
                Market Square, 1355 Market St suite 900, San Francisco, CA
                94103, United States
              </address>
            </div>
          </div>
          <div
            ref={refLondon}
            className={`office ${inViewLondon && "from-left"}`}
          >
            <img src="/img/map.png" alt="" />
            <div>
              <h3>London Office</h3>
              <address>
                221b, Baker Street, London-NW1-6x, United Kingdom
              </address>
            </div>
          </div>
          <div
            ref={refTokyo}
            className={`office ${inViewTokyo && "from-right"}`}
          >
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
