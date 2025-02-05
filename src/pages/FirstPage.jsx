const FirstPage = () => {
  return (
    <>
      <div className="wrapper">
        <img className="logo" src="/images/logo.png" alt="" />
      </div>
      <p>Developed by Sowndarya M, Vishnudhasan G, Yalini A of Batch - 15, Dept. of CSE, KSRIET as their academic project.</p>


      <style jsx>
        {`
          .wrapper {
            background-color: rgb(57, 237, 192);
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .logo {
            width: 230px;
            height: 75px;
          }
        `}
      </style>
    </>
  );
};

export default FirstPage;
