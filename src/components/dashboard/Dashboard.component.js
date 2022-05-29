import React from "react";
import "./style.css";
import LineChart from "./LineChart";

const DashboardComponent = (props) => {
  return (
    <div className="dashboard">
      <div class="main">
        <main class="maincontent">
          Overview
          <div class="iconos">
            <a href="#" id="i-search">
              <img src="https://img.icons8.com/ios-glyphs/20/000000/search.png" />
            </a>
            <a href="#" id="i-alarm">
              <img src="https://img.icons8.com/ios-glyphs/20/000000/alarm.png" />
            </a>
          </div>
          <a href="#" id="user-name">
            Hernan Escorcia
          </a>
          <img
            src={require("../Ticket/img/userIcon.jpg")}
            alt="User"
            id="img-user"
          />
        </main>

        <div class="cajas">
          <div id="Unresolved">
            <a href="#">Unresolved</a>
            <a href="#" id="numero">
              60
            </a>
          </div>
          <div id="Overdue">
            <a href="#">Overdue</a>
            <a href="#" id="numero">
              16
            </a>
          </div>
          <div id="Open">
            <a href="#">Open</a>
            <a href="#" id="numero">
              43
            </a>
          </div>
          <div id="On Hold">
            <a href="#">On Hold</a>
            <a href="#" id="numero">
              60
            </a>
          </div>
        </div>

        <div class="trends">
          <div id="today-trends" style={{ width: "200", height: "90" }}>
            Today's trends
            {/* <canvas id="myChart" ></canvas> */}
            <LineChart />
          </div>

          <div id="statics">
            <aside>
              Resolved
              <p>449</p>
            </aside>
            <aside>
              Receibed
              <p>426</p>
            </aside>
            <aside>
              Average first response time
              <p>33m</p>
            </aside>
            <aside>
              Average response time
              <p>3h 8m</p>
            </aside>
            <aside>
              Resolution within SLA
              <p>94%</p>
            </aside>
          </div>
        </div>

        <div class="ticandtask">
          <div id="ticket">
            <div id="unresolvedtickets">
              Unresolved tickets
              <a href="#">View details</a>
            </div>
            <div id="groupsupport">
              Group: <p> Support</p>
            </div>
            <div class="data">
              <div>
                Waiting on feature request
                <p>4238</p>
              </div>
              <div>
                Awaiting Customer Response
                <p>1005</p>
              </div>
              <div>
                Awaiting Developer Fix
                <p>914</p>
              </div>
              <div>
                Pending
                <p>281</p>
              </div>
            </div>
          </div>
          <div id="task">
            <div id="taskall">
              Task
              <a href="#">View all</a>
            </div>
            <div id="groupsupport">Today</div>
            <div class="datatask">
              <div id="createtask">
                Create new task
                <a href="#">+</a>
              </div>
              <div>
                <div id="chkbox">
                  <input type="checkbox" name="" id="" />
                  Finish ticket update
                </div>

                <p id="urgent">Urgent</p>
              </div>
              <div>
                <div id="chkbox">
                  <input type="checkbox" name="" id="" />
                  Create new ticket example
                </div>

                <p id="pNew">New</p>
              </div>
              <div>
                <div id="chkbox">
                  <input type="checkbox" name="" id="" />
                  Update ticked report
                </div>

                <p id="pDefault">Default</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardComponent;
