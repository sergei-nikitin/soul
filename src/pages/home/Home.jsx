import React from 'react';

import Main from '../../components/home/main';
import About from '../../components/home/about';
import Twirl from '../../components/home/twirl';
import Treasure from '../../components/home/treasure/Treasure';
import Seduction from '../../components/home/seduction/Seduction';
import Brand from '../../components/home/brand/Brand';
import Ukraine from '../../components/home/ukraine';
import Soul from '../../components/home/soul';

export const Home = () => {
  // React.useEffect(() => {
  //   fetch(
  //     'https://webapi.resales-online.com/V6/SearchProperties?p_agency_filterid=1&p1=1023133&p2=079298cdf1317b0133cad070922d60e3c4cd8b05&P_sandbox=true&P_Beds=2',
  //   )
  //     .then((res) => res.json())
  //     .then((res) => console.log(res));
  // }, []);
  return (
    <>
      <Main />
      <About />
      {/* <Twirl /> */}
      {/* <Seduction /> */}
      {/* <Treasure /> */}
      {/* <Brand /> */}
      {/* <Ukraine /> */}
      {/* <Soul /> */}
    </>
  );
};
