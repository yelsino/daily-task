import * as React from 'react';
import { IconFire } from '../Atoms/Icons';

export interface IItemStatsProps {
}

export default class ItemStats extends React.Component<IItemStatsProps> {
  public render() {
    return (
        <div className="border  rounded-full p-3">
        <div className="flex items-center gap-x-2">
          <span className="text-orange-500">
            <IconFire />
          </span>
          <div className="flex flex-col">
            <span className="font-poppins font-semibold">300 task</span>
            <span className="font-poppins text-gray-400 font-light truncate">
              completas
            </span>
          </div>
        </div>
      </div>
    );
  }
}
