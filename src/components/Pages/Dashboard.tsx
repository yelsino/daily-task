import * as React from "react";
import { Link } from "react-router-dom";
import Header from "../Header";
import Stats from "../Stats/Stats";
import Welcome from "../Welcome";

export interface IDashboardProps {}

export default class Dashboard extends React.Component<IDashboardProps> {
  public render() {
    return (
      <>
        <Header />

        <Welcome />
        <Stats />

          <Link to='/tasks/new-task' className="bg-black text-white w-full font-poppins py-5 rounded-full text-center">
            New task
          </Link>
      </>
    );
  }
}
