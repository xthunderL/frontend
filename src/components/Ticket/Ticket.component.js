import React from "react";
import "./ticketstyle.css";
import { tickets } from "./ticktes";
// import img1 from "./img/attractive-1869761_1920.jpg";
// import img2 from "./img/girl-2696947_1920.jpg";
// import img3 from "./img/girl-4000270_1920.jpg";
// import img4 from "./img/portrait-4597853_1920.jpg";

const TicketComponent = () => {
  console.log("HI", tickets);
  return (
    <div>
      <div class="main">
        <main class="maincontent">
          Tickets
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
          <img src={"assets/img/userIcon.jpg"} alt="User" id="img-user" />
        </main>
        <div class="allticket">
          <div id="filtros">
            All ticket
            <div id="iconos">
              <div id="sort">
                <a href="#" id="i-sort">
                  <img src="https://img.icons8.com/windows/15/000000/sort-amount-up.png" />
                </a>
                Sort
              </div>
              <div id="filter">
                <a href="#" id="i-sort">
                  <img src="https://img.icons8.com/ios-filled/15/000000/filter--v1.png" />
                </a>
                Filter
              </div>
            </div>
          </div>

          <div class="ticketdetails">
            <table style={{ width: "100%" }} id="table">
              <thead>
                <tr>
                  <th className="a1">Ticket details</th>
                  <th className="a2">Customer name</th>
                  <th className="a3">Date</th>
                  <th className="a3">Priority</th>
                </tr>
              </thead>
            </table>
          </div>
          {/* <div className="eachCard">
                
                <div className="ticket">
                  <h1>{item.detail}</h1>
                </div>
                <div className="name">
                  <h1>{item.name}</h1>
                </div>

                <div className="date">
                  <h1>{item.date}</h1>
                </div>
                <div className="priority">
                  <h1>{item.priority}</h1>
                </div>
              </div> */}

          <div className="TicketTabel">
            {tickets.map((item, index) => {
              console.log(index);
              let img = item.img;
              //let imgSrc = `public/assets/img/${img}`;
              //console.log(imgSrc);

              console.log(img);
              return (
                <tbody key={index}>
                  <tr>
                    <td className="c1">
                      <img src={img} alt="User" className="UIMG" />
                      <label id="fields">{item.detail}</label>
                    </td>
                    <td className="c2" id="fields">
                      {item.name}
                    </td>
                    <td className="c3" id="fields">
                      {item.date}
                    </td>
                    <td className="c4">
                      <div className={item.priority}>{item.priority}</div>
                    </td>
                  </tr>
                </tbody>
              );
            })}

            {/* <div className="uImg">
            <img src={img1} alt="User" />
          </div>
          <div class="usuario">
            <img src={img2} alt="User" className="UIMG" />
          </div>
          <div class="usuario">
            <img src={img3} alt="User" className="UIMG" />
          </div>
          <div class="usuario">
            <img src={img4} alt="User" className="UIMG" />
          </div> */}

            {/* <div class="usuario">
              <img
                src="public/assets/img/portrait-4597853_1920.jpg"
                alt="User"
                id="img-user1"
              />
            </div>
            <div class="usuario">
              <img
                src="public/assets/img/attractive-1869761_1920.jpg"
                alt="User"
                id="img-user1"
              />
            </div>
            <div class="usuario">
              <img
                src="public/assets/img/woman-1692849_1920.jpg"
                alt="User"
                id="img-user1"
              />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketComponent;
