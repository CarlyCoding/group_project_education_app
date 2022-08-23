import { Chart } from "react-google-charts";
import {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom"
import {findActiveUser} from '../LoginService'

function StatsContainer () {

  const [user, setUser] = useState()

  const navigate = useNavigate();

  useEffect(() => {
      findActiveUser().then((result => { setUser(result)} ))
    console.log(user);
      
  }, [])


    if(!user){
      navigate("../login")
        } else {
    
    let name = "PersonName"

    const pieData = [
        ["Quiz", "Total Questions"],
        ["Answered correctly", 11],
        ["Answered incorrectly", 2],
        ["Not yet attempted", 2]
      ];
      
    const pieOptions = {
        title: "How have you scored in the quizzes?",
        colors:['#B8D8BA','#EF959D', '#FCDDBC'],
      };
      
    const barData = [
        ["Hello", "Articles you've read", "Articles you've still to read"],
        ["Score", 12, 4],
      ];
      
    const barOptions = {
        chartArea: { width: "50%" },
        colors: ["#033F63", "#FEDC97"],
        bars: "horizontal"
      };

    return (
        <>
            <h2>Hello {user.username}, here's your performance so far...</h2>
          <Chart
            chartType="PieChart"
            data={pieData}
            options={pieOptions}
            width={"80%"}
            height={"400px"}
        />
        <h4>How many of our articles have you read?</h4>
        <Chart
            chartType="Bar"
            width="80%"
            height="400px"
            data={barData}
            options={barOptions}
        />
              </>
    )}
    }

export default StatsContainer