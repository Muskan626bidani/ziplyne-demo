import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import "./Testimonials.css";
import Testi_card from "./Testi_card";
export default function Testimonials(props) {
  return (
    <>
      <div className="testimonials">
        <Carousel>
          <Carousel.Item>
            <Testi_card
              title="Joanna K"
              desc="--Consultant"
              review="Highly poweful and yet ease to use tool to create in- app
                  tutorial"
              img="https://blog.hubspot.com/hubfs/Customer-testimonial-page.jpg"
              q1="  What do you like best?"
              a1="I liked how it takes almost zero technical expertise to
                  understand and manage this. Using the dashboard, you can
                  easily build an in-app guide tool from the bottom up,
                  including design, content, look and feel, and much more."
              q2="What do you dislike?"
              a2=" There is nothing that I dislike about the tool as of right
                  now! It's very easy to use and haven't had any issues with the
                  usability of the tool. "
            />
          </Carousel.Item>

          <Carousel.Item>
            <Testi_card
              title="Arunabh A"
              desc="--product specialist"
              review="Smart and Straight Forward"
              img="https://cdn2.hubspot.net/hubfs/53/Testimonial-lead-gen-1.jpg"
              q1="  What do you like best?"
              a1="The app has a really easy and straightforward UI. There is not
                   a lot of clutter and easy to navigate."
              q2="What do you dislike?"
              a2="  There is not a lot to dislike as such. The product has most
                   of the features one might need. The only thing that can be
                   improved is the Popup cards UI. "
            />
          </Carousel.Item>
          <Carousel.Item>

            <Testi_card
              title="Aman Sharma"
              desc="  --Executive Sponsor in Marketing and Advertising"
              review="Great Ux-improvement"
              img="https://blog.hubspot.com/hubfs/testimonial-request-template-1.jpg"
              q1="  What do you like best?"
              a1=" Ziplyne is designed intuitively and with customer support
              workflows in mind. It is simple to use, incorporates ability
              to bring in data from existing data storage methods like
              excel. Provides integrations with zendesk/jira and AI
              capabilities to reduce repetitive support tasks as well as
              automation"
              q2="What do you dislike?"
              a2="  There isn't much to dislike. It is a product manager/UI
              designer's dream solution"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
}
