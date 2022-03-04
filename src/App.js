import { useState } from "react";
import moment from "moment";
import './App.css';
import "antd/dist/antd.css";
import { Col, Divider, Row } from "antd";

const columnStyle = {
  display:"flex",justifyContent:"space-around",alignItems:"center",width:"100%"
}
const ageBox = {
  width:"50%",margin:"auto",padding:"0 3% 0 3%",backgroundColor:"#EEEDDE",minHeight:"80vh",borderRadius:"2%"
}

function App() {
  const [day, setDay] = useState(1);
  const [month, setMonth] = useState(5);
  const [year, setYear] = useState(2000);
  const [calAge, setCalAge] = useState("")
  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(day, month, year);
    const birthDate = `${year}-${month}-${day}`;
    var years = moment().diff(birthDate, "years", false);
    setCalAge(years)
  };

  return (
    <div className="App">
      <Divider orientation="center">Age Calculator</Divider>

      <div style={{...ageBox}}>
      <div style={{display:"flex",justifyContent:"center"}}><h1>Enter your details</h1></div>
      <form onSubmit={handlesubmit} style={{paddingTop:"10%"}}>

        <Row gutter={[24,{ xs: 8, sm: 16, md: 24, lg: 32 }]}>
          <Col className="gutter-row" span={8}  style={{...columnStyle}}>
            <div>
              Day :
            </div>
            <input
              placeholder="Day"
              name="day"
              type={"number"}
              value={day}
              max={31}
              min={1}
              onChange={(e) => setDay(e.target.value)}
            />
          </Col>
          <Col className="gutter-row" span={8} style={{...columnStyle}}>
            <div>
              Month :
            </div>
            <input
              placeholder="Month"
              name="month "
              type={"number"}
              value={month}
              max={12}
              min={1}
              onChange={(e) => setMonth(e.target.value)}
            />
          </Col>
          <Col className="gutter-row" span={8}  style={{...columnStyle}}>
            <div>
              Year :
            </div>
            <input
              placeholder="Year"
              name="year"
              type={"number"}
              value={year}
              onChange={(e) => setYear(e.target.value)}
            />
          </Col>
        </Row>
        <Row  style={{...columnStyle, marginTop:"10%"}}>
        <button type="submit" className="App-btn">Calculate Age</button>
        </Row>
      </form>
      <Row style={{...columnStyle, marginTop:"10%"}}>
      {
        calAge ? (<Row><h2>Your Age is  : {calAge}year</h2></Row>) : "To know you Age. Press Calculate Age button"
      }
      </Row>

      </div>
    </div>
  );
}

export default App;
