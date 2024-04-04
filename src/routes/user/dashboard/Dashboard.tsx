import { UserInfo } from '@root/src/types/UserInfo';
import springUtils from '@root/src/utils/springUtils';
import { Button, Tabs } from 'flowbite-react';
import React from 'react';
import { HiAdjustments, HiUserCircle } from 'react-icons/hi';
import { MdDashboard } from 'react-icons/md';
import DashboardInfo from './DashboardInfo';
import DashboardProduct from './DashboardProducts';

/**
 * spring route `/me`
 * @returns
 */
export default function Dashboard() {
  const [userInfo, setUserInfo] = React.useState({} as UserInfo);
  React.useEffect(() => {
    document.title = 'Dashboard';
    // springUtils.checkLogin();
    springUtils.fetchUserInfo().then(setUserInfo);
  }, []);
  return (
    <main className="dark:text-white">
      <Tabs aria-label="Tabs with icons" style="underline">
        <Tabs.Item active title="Profile" icon={HiUserCircle}>
          <div className="overflow-x-auto">
            <DashboardInfo userInfo={userInfo} />
          </div>
        </Tabs.Item>
        <Tabs.Item title="Products" icon={MdDashboard}>
          <DashboardProduct userInfo={userInfo} />
        </Tabs.Item>
        <Tabs.Item title="Settings" icon={HiAdjustments}>
          <Button color="red" title="Change password">
            <i className="fa-duotone fa-key"></i> <span className="ms-2">Change Password</span>
          </Button>
        </Tabs.Item>
        {/* <Tabs.Item title="Contacts" icon={HiClipboardList}>
          This is <b>Contacts tab's associated content</b>. Clicking another tab will toggle the visibility of this one
          for the next. The tab JavaScript swaps classes to control the content visibility and styling.
        </Tabs.Item> */}
        {/* <Tabs.Item disabled title="Disabled">
          Disabled content
        </Tabs.Item> */}
      </Tabs>
    </main>
  );
}
