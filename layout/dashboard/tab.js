import { useEffect, useState } from "react";
import EditProfile from "./editProfile";
import MyBookings from "./myBookings";
import MyAddresses from "./addresses";
import BreadCrumb from "components/breadcrumb";
import MyFamilyFriends from "./family&Friends";

import { useSearchParams } from 'next/navigation'
const breadcrumblist = [
  { name: 'Home', path: '/' },
]

function TabContainer() {
  const [activeTab, setActiveTab] = useState(0);
  const searchParams = useSearchParams()
  const checkActive = searchParams.get('search')
  const tabs = [
    { label: 'My Profile', component: <EditProfile />},
    { label: 'My Bookings', component: <MyBookings /> },
    { label: 'Manage Addresses', component: <MyAddresses /> },
    { label: 'My Family & Friends', component: <MyFamilyFriends />}
  ];

  function handleTabClick(index) {
    setActiveTab(index);
  }
  const setActiveFunc = () => {
    setActiveTab(checkActive ==="My Bookings" ? 1 : 0);
  }
  useEffect(() => {
    setActiveFunc()
  },[checkActive])

  return (
    <div className="container">
      <BreadCrumb
        active='Dashboard'
        breadcrumblist={breadcrumblist}
      />
      <div className="profileCont pt-5 pb-5">
        <div className="leftBar tabs">
          <div className="tab-container">
            <ul className="tab-list">
              {tabs.map((tab, index) => (
                <li
                  key={index}
                  className={`tab-item ${index === activeTab ? 'active' : ''}`}
                  onClick={() => handleTabClick(index)}
                >
                  {tab.label}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div>{tabs[activeTab].component}</div>
      </div>
    </div>
  );
}

export default TabContainer;
