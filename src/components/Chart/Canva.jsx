import React, { useEffect } from "react";
import CanvasJSReact from "@canvasjs/react-charts";

const Canva = () => {
  useEffect(() => {
       const chartData = async() => {
          const res = await axios.get()
       }
  })

  const options = {
    animationEnabled: true,
    exportEnabled: true,
    theme: "dark1", 
    title: {
      text: "Expenses",
    },
    data: [
      {
        type: "pie",
        indexLabel: "{label}: {y}%",
        startAngle: -90,
        dataPoints: [
          { y: 10, label: "Entertainment" },
          { y: 35, label: "Food & Drinks" },
          { y: 10, label: "Others" },
          { y: 14, label: "Transportation" },
          { y: 14, label: "Medical Care" },
          { y: 14, label: "Utilities" },
          { y: 14, label: "Personal" },
        ],
      },
    ],
  };

  return (
    <div>
      <CanvasJSReact.CanvasJSChart options={options} />
    </div>
  );
};

export default Canva;