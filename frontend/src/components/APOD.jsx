// In ContentWrapper.js
import React from 'react';
import Main from './Main';
import Sidebar from './Sidebar';
import Footer from './Footer';

function APOD({ data, showModal, handleToggleModal }) {
  return (
    <>
      {data ? <Main data={data} /> : <div className="loadingState"><i className="fa-solid fa-gear"></i></div>}
      {showModal && <Sidebar data={data} handleToggleModal={handleToggleModal} />}
      {data && <Footer data={data} handleToggleModal={handleToggleModal} />}
    </>
  );
}

export default APOD;
