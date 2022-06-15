import * as React from "react";
import { IconFire } from "../Atoms/Icons";
import ItemStats from "./ItemStats";
import MyActivity from "./MyActivity";

export interface IStatsProps {}

export default class Stats extends React.Component<IStatsProps> {
  public render() {
    return (
      <div>
        <p className="font-catamaran text-2xl text-gray-600">Weekly stats</p>
        <div className="grid grid-cols-30/70 gap-2 ">
          <div className="row-span-2 rounded-[30px] border flex justify-center items-center flex-col ">
          <span className="text-orange-500">
                <IconFire />
              </span>

              <div className="flex flex-col items-center">
                <span className="font-poppins font-semibold">300 task</span>
                <span className="font-poppins text-gray-400 font-light truncate">
                  completas
                </span>
              </div>
          </div>

          <ItemStats />
          <ItemStats />


        <MyActivity />
        </div>
      </div>
    );
  }
}
