/// <reference path='../../types/customHtmlAttributes.d.ts' />

import FlowbiteToast from '@root/src/components/FlowbiteLayout/FlowbiteToast';
import { saveForms } from '@root/src/components/formSaver';
import springUtils, { AjaxResponse } from '@root/src/utils/springUtils';
import axios from 'axios';
import { Button, Label, Tabs, TextInput } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { HiUserCircle } from 'react-icons/hi';

export default function Login() {
  // toast indicator
  const [showToast, setShowToast] = useState(false);
  // toast info
  const [toastInfo, setToastInfo] = useState({
    // default title from parent
    title: 'parent: toast title',
    // default description from parent
    description: 'parent: toast description',
    // default icon class name from parent
    iconClassName: 'user'
  });

  const fetchHandler = async function (url: string | URL) {
    const login: { data: AjaxResponse } = await axios({
      url: new String(url).toString(),
      withCredentials: true,
      method: 'GET'
    });
    // set new toast info
    setToastInfo({
      title: login.data.error ? 'Gagal' : 'Sukses',
      description: login.data.message,
      iconClassName: 'user'
    });
    setShowToast(true);
    if (!login.data.error) {
      location.href = document.referrer || '/dashboard';
    }
  };

  useEffect(() => {
    document.title = 'Login';
    saveForms();
  }, []);

  return (
    <main className="space-y-4">
      <Tabs aria-label="Login Form" style="default">
        <Tabs.Item active title="Login with email and password" icon={HiUserCircle}>
          <form
            action="#"
            method="post"
            className="flex max-w-md flex-col gap-4 mx-auto"
            onSubmit={e => {
              e.preventDefault();
              const form = e.target as HTMLFormElement;
              const url = new URL(springUtils.getOrigin());
              const email = form.querySelector<HTMLInputElement>('input[name=email]')?.value || 'null';
              const password = form.querySelector<HTMLInputElement>('input[name=password]')?.value || 'null';
              url.pathname = '/login/' + email + '/' + password;
              fetchHandler(url);
            }}
          >
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email1" value="Your email" />
              </div>
              <TextInput id="email1" name="email" type="email" placeholder="name@flowbite.com" required />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password1" value="Your password" />
              </div>
              <TextInput id="password1" name="password" type="password" required />
            </div>
            <Button type="submit" color="blue">
              Submit
            </Button>
          </form>
        </Tabs.Item>
        <Tabs.Item title="Login Using Token" icon={HiUserCircle}>
          <form
            action="#"
            className="flex max-w-md flex-col gap-4 mx-auto"
            onSubmit={e => {
              e.preventDefault();
              const form = e.target as HTMLFormElement;
              const url = new URL(springUtils.getOrigin());
              const token = form.querySelector<HTMLInputElement>('input[name=token]')?.value || 'null';
              url.pathname = '/login/' + token;
              fetchHandler(url);
            }}
          >
            <div>
              <div className="mb-2 block">
                <Label htmlFor="token" value="Your token" />
              </div>
              <TextInput id="token" name="token" type="text" placeholder="xxxx-xxxx-xxxx-xxx" required />
            </div>
            <Button type="submit" color="blue">
              Submit
            </Button>
          </form>
        </Tabs.Item>
      </Tabs>
      <FlowbiteToast
        showToast={showToast}
        handler={setShowToast}
        title={toastInfo.title}
        description={toastInfo.description}
        iconClassName={toastInfo.iconClassName}
        autoHide={true}
      />
    </main>
  );
}
