import * as React from "react"

const HeroSection = (props) => {
  return (
    <section id={props.fields.scroll_anchor_id} className="hero-section">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="hero-content text-center">
            <h1>{props.fields.heading}</h1>
            <p>{props.fields.subheadline}</p>
            <a href={props.fields.button_url} target="_blank" rel="noreferrer" className="main-btn blue btn-hover">{props.fields.button_label}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="css-uwwqev e1v84xtg1"><g><path d="M5,12.9999981 L16.86,12.9999981 L13.23,17.36 C12.8765378,17.7852593 12.9347407,18.4165378 13.36,18.77 C13.7852593,19.1234622 14.4165378,19.0652593 14.77,18.64 L19.77,12.64 C19.8036393,12.5922757 19.8337206,12.5421403 19.86,12.49 C19.86,12.44 19.91,12.41 19.93,12.36 C19.9753265,12.2453413 19.9990589,12.1232892 20,11.9999981 C19.9990589,11.8767108 19.9753265,11.7546587 19.93,11.64 C19.93,11.59 19.88,11.56 19.86,11.51 C19.8337206,11.4578597 19.8036393,11.4077243 19.77,11.36 L14.77,5.36 C14.5796435,5.1314599 14.2974322,4.99951697 14,4.99999809 C13.7663478,4.99954349 13.5399121,5.08091885 13.36,5.23 C13.1554929,5.39954816 13.0268522,5.64350078 13.0024631,5.90802851 C12.978074,6.17255624 13.0599411,6.43591738 13.23,6.64 L16.86,10.9999981 L5,10.9999981 C4.44771525,10.9999981 4,11.4477153 4,11.9999981 C4,12.5522847 4.44771525,12.9999981 5,12.9999981 Z"></path></g></svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

  export default HeroSection;
