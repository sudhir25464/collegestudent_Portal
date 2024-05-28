import React, { useEffect, useState } from 'react';
import Userupdate from '../pages/Userupdate';
import { Link, Outlet } from 'react-router-dom';
import Userpost from '../pages/Userpost';
import EductContentpage from '../pages/EductContentpage';
import UserdashbordHeader from '../pages/UserdashbordHeader';
//import 'bootstrap/dist/css/bootstrap.min.css';

const ResponsiveList = () => {
   const [isMobile, setIsMobile] = useState(true);

  return (
    <div className="px-4 bg-light ">
      <div className="row py-5">
        <div className="col-md-3 col-4">
          <div className='list-group  list-group-flush' id="myList" role="tablist">
            <Link to='details'  className={`list-group-item  active list-group-item-action `} id="item1-list" data-toggle={isMobile ? 'collapse' : 'list'} href="#item1">
              DashBord
            </Link>
            <Link to='userupdate' className={`list-group-item list-group-item-action `} id="item2-list" data-toggle={isMobile ? 'collapse' : 'list'} href="#item2">
              Updates
            </Link>
            <Link to='impbloguser' className={`list-group-item list-group-item-action `} id="item2-list" data-toggle={isMobile ? 'collapse' : 'list'} href="#item2">
              Blog
            </Link>
            <Link to='e-leringbord' className={`list-group-item list-group-item-action `} id="item3-list" data-toggle={isMobile ? 'collapse' : 'list'} href="#item3">
              E-learing
            </Link>
            {/* Add more items as needed */}
          </div>
        </div>
        <div className={isMobile ? 'col-8' : 'col-md-12 '}>
          <div className="tab-content ">
            <div className="tab-pane fade show  " id="item1">
              
              <UserdashbordHeader/>
              
            </div>

             <div className="tab-pane fade" id="item2">
           <Userupdate/>
            </div>

            <div className="tab-pane fade" id="item3">
            <Userpost/>
            </div>

            <div className="tab-pane fade" id="item3">
            <EductContentpage/>
            </div> 
            

           </div> <Outlet/>
            {/* Add more content panes as needed */}
       
        </div>
      </div>

      
    </div>
  );
};

export default ResponsiveList;
