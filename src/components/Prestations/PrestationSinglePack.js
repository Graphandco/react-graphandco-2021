import React from 'react';

export const PrestationSinglePack = ({ title }) => {
  return (
    <div className="pack-wrapper">
      <div className="pack-left">
        <div className="pack-left-content">
          <div className="pack-title">{title}</div>
          <div className="pack-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere numquam dicta corporis quaerat nam nihil asperiores rem impedit obcaecati commodi
            eligendi dolore ad aliquid sunt quae, id earum officiis fugit.
          </div>
        </div>
        <img src={`/img/starter-pack.jpg`} alt="Pack" />
      </div>
      <div className="pack-right">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi facere distinctio nulla voluptas? Tempore a rerum, nihil rem nesciunt sint. Recusandae
        totam inventore autem voluptas ut architecto nihil ducimus repellendus in, illum nam, rem pariatur blanditiis a quae fugit mollitia accusantium modi
        asperiores! Perspiciatis id impedit, magni repellat et esse!
      </div>
    </div>
  );
};
