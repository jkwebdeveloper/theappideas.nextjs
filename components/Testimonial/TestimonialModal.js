import React from "react";

const TestimonialModal = ({ visible, onClose }) => {
  if (!visible) return null;

  return (
    <div className="modal_section" onClick={onClose}>
      <div className="modal_video">
        <span />
        <span />
        <span />
        <span />
        <iframe
          width="100%"
          height="100%"
          src={visible}
          frameborder="0"
          allowfullscreen
          title="testimonial"
        ></iframe>
      </div>
    </div>
  );
};

export default TestimonialModal;
