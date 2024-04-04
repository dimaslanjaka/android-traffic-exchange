import Constant from '@root/src/Constant';
import FlowbiteToast from '@root/src/components/FlowbiteLayout/FlowbiteToast';
import { saveForms } from '@root/src/components/formSaver';
import { emptyInterface } from '@root/src/types/emptyInterface';
import { getCookie, setCookie } from '@root/src/utils';
import { msisdnAppendCountryID } from '@root/src/utils/msisdn';
import springUtils, { AjaxResponse } from '@root/src/utils/springUtils';
import withRouter from '@root/src/utils/withRouter';
import axios from 'axios';
import React from 'react';
import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';

interface IState extends emptyInterface {
  otpCode: string;
  toast: {
    [key: string]: any;
    title: string;
    description: string;
    iconClassName: string;
    show: boolean;
  };
}

export default withRouter(
  class GiftOtp extends React.Component<any, IState> {
    constructor(props: any) {
      super(props);
      this.state = {
        otpCode: '',
        toast: {
          // default title from parent
          title: 'parent: toast title',
          // default description from parent
          description: 'parent: toast description',
          // default icon class name from parent
          iconClassName: 'user',
          show: false
        }
      };
    }

    componentDidMount(): void {
      document.title = 'Gift | IM3';
      saveForms();
      springUtils.fetchUserInfo();
    }

    onChange = (input: string) => {
      this.setState({ otpCode: input });
      // console.log('Input changed', input);
    };

    onKeyPress = (_button: any) => {
      // console.log('Button pressed', button);
    };

    render(): React.ReactNode {
      return (
        <main className="dark:text-white relative">
          <FlowbiteToast
            showToast={this.state.toast.show}
            handler={() => {
              this.setState({
                toast: {
                  show: false,
                  title: this.state.toast.title,
                  description: this.state.toast.description,
                  iconClassName: this.state.toast.iconClassName
                }
              });
            }}
            title={this.state.toast.title}
            description={this.state.toast.description}
            iconClassName={this.state.toast.iconClassName}
            autoHide={2000}
          />
          <div className="mx-auto">
            <div className="grid grid-rows-1 grid-flow-col gap-4">
              <div className="mb-5">
                <label htmlFor="msisdn" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Nomor HP anda
                </label>
                <input
                  type="number"
                  id="msisdn"
                  name="msisdn"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="6285xxxxxxxxx"
                  required
                  defaultValue={getCookie(Constant.msisdn, '')}
                  onChange={e => {
                    const input = e.target as HTMLInputElement;
                    setCookie(Constant.msisdn, input.value, 900);
                  }}
                />
              </div>
              <div className="mb-5">
                <label htmlFor="to_msisdn" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Nomor HP target
                </label>
                <input
                  type="number"
                  id="to_msisdn"
                  name="to_msisdn"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="6285xxxxxxxxx"
                  required
                  defaultValue={getCookie(Constant.to_msisdn, '')}
                  onChange={e => {
                    const input = e.target as HTMLInputElement;
                    setCookie(Constant.to_msisdn, input.value, 900, location.pathname);
                  }}
                />
              </div>
            </div>

            <div className="grid grid-rows-1 grid-flow-col grid-cols-2 gap-4">
              <div className="mb-5">
                <button
                  className="w-full relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-yellow-600 to-blue-500 group-hover:from-yellow-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
                  onClick={e => {
                    e.preventDefault();
                    const id = this.props['router'].params.id;
                    const from_msisdn = msisdnAppendCountryID(
                      (document.querySelector('[name=msisdn]') as HTMLInputElement).value
                    );
                    const to_msisdn = msisdnAppendCountryID(
                      (document.querySelector('[name=to_msisdn]') as HTMLInputElement).value
                    );
                    console.log({ from_msisdn, to_msisdn, id });
                    axios
                      .post<AjaxResponse>(
                        springUtils.getUrl(`/im3/paket/buy/${id}/check`).toString(),
                        {
                          id,
                          from_msisdn: from_msisdn,
                          to_msisdn: to_msisdn
                        },
                        { withCredentials: true, headers: { 'Content-Type': 'application/json' } }
                      )
                      .then(res => {
                        // set new toast info
                        this.setState({
                          toast: {
                            title: res.data.error ? 'Gagal' : 'Sukses',
                            description: res.data.message,
                            iconClassName: res.data.error ? 'times' : 'check',
                            show: true
                          }
                        });
                      });
                  }}
                >
                  <span className="w-full relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Cek Paket
                  </span>
                </button>
                <blockquote className="text-sm text-center">
                  <b>Cek Paket</b> dulu lalu <b>Request OTP</b>
                </blockquote>
              </div>
              <div className="mb-5">
                <button className="w-full relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                  <span className="w-full relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Request OTP
                  </span>
                </button>
                <blockquote className="text-sm text-center">
                  Kode OTP akan dikirimkan ke <b>nomor HP anda</b>
                </blockquote>
              </div>
            </div>

            <div className="grid grid-rows-1 grid-flow-col grid-cols-2 gap-4">
              <div className="mb-5">
                <label htmlFor="otpCode" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Kode OTP
                </label>
                <input
                  type="number"
                  id="otpCode"
                  name="otpCode"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="012341"
                  required
                  value={this.state.otpCode}
                  onChange={e => this.setState({ otpCode: e.target.value })}
                />
              </div>
              <div className="mb-5 pt-7">
                <button className="w-full relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
                  <span className="w-full relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Validasi OTP
                  </span>
                </button>
              </div>
            </div>
            <div className="dark:text-dark text-dark invisible md:visible">
              <Keyboard onChange={this.onChange} onKeyPress={this.onKeyPress} />
            </div>
          </div>
        </main>
      );
    }
  }
);
