import * as React from "react";

export interface IMyActivityProps {}

export default class MyActivity extends React.Component<IMyActivityProps> {
  public render() {
    return (
      <div className="col-span-2 border rounded-full p-5 flex font-poppins gap-x-5 items-center">
        <div className="flex flex-col items-center">
          <span>My</span>
          <span>Activity</span>
        </div>
        <div className="flex gap-x-3 text-xs">
          <div className="flex flex-col items-center">
            <span className="block bg-gray-200 w-4 h-10 rounded-full" />
            <span>lu</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="block bg-gray-200 w-4 h-10 rounded-full" />
            <span>ma</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="block bg-gray-200 w-4 h-10 rounded-full" />
            <span>mi</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="block bg-gray-200 w-4 h-10 rounded-full" />
            <span>ju</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="block bg-gray-200 w-4 h-10 rounded-full" />
            <span>vi</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="block bg-gray-200 w-4 h-10 rounded-full" />
            <span>sa</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="block bg-gray-200 w-4 h-10 rounded-full" />
            <span>do</span>
          </div>
        </div>
      </div>
    );
  }
}
