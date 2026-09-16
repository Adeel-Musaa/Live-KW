const meters = [
  {id:'Compressor 1', value:944.71, max:1200, info:"EM1"},
  {id:'Compressor 2', value:0, max:1200, info:"EM2"},
  {id:'Compressor 3', value:0, max:1200, info:"EM3"},
  {id:'CC Conveyor New', value:700, max:1200, info:"EM4"},
  {id:'CC Conveyor Old', value:650.5, max:1200, info:"EM5"},
  {id:'Wolf DB 3', value:320, max:1200, info:"EM6"},
  {id:'Bib Machine Area', value:380.6, max:1200, info:"EM7"},
  {id:'BiB R04', value:680, max:1200, info:"EM8"},
  {id:'Tea Bag Area', value:1050.5, max:1200, info:"EM9"},
  {id:'FS Area', value:965.63, max:1200, info:"EM10"},
  {id:'Blend Area', value:250.2, max:1200, info:"EM11"},
  {id:'Generator 2', value:507, max:1200, info:"EM12"},
  {id:'Generator 1', value:944.71, max:1200, info:"EM13"},
  {id:'Out going', value:700, max:1200, info:"EM14"},
  {id:'New Office', value:380.6, max:1200, info:"EM15"},
  {id:'Old Office', value:420.6, max:1200, info:"EM16"},
  {id:'360KVA UPS', value:520, max:1200, info:"EM17"},
  {id:'Factory Light', value:260, max:1200, info:"EM18"},
  {id:'FS & BM area (Lesco)', value:980, max:1200, info:"EM19"},
  {id:'Main Wapda', value:150, max:1200, info:"EM20"},
  {id:'Fire Hydrant', value:600, max:1200, info:"EM21"},
  {id:'Solar', value:720, max:1200, info:"EM22"},
  {id:'Compressor Room', value:507, max:1200, info:"EM23"},
  {id:'200 KVA UPS', value:320, max:1200, info:"EM24"},
  {id:'Blend Area 1st Floor', value:380.6, max:1200, info:"EM25"},
  {id:'Bib Machine', value:1150, max:1200, info:"EM26"}
];

const grid = document.getElementById("chartGrid");

meters.forEach((m, i) => {
  const percent = (m.value / m.max) * 100;

  // 3 range colors
  let color = "#43a047"; // green
  if (percent > 60 && percent <= 85) color = "#fbc02d"; // yellow
  else if (percent > 85) color = "#e53935"; // red

  const col = document.createElement("div");
  col.className = "col-lg-2 col-md-3 col-sm-4 col-6"; 

  const card = document.createElement("div");
  card.className = "meter-card";
  card.innerHTML = `
    <div class="meter-title">${m.id}</div>
    <div id="chart${i}"></div>
    <div class="gauge-label gauge-min">0</div>
    <div class="gauge-label gauge-max">${m.max}</div>
    <div class="meta">${m.info}</div>
  `;
  col.appendChild(card);
  grid.appendChild(col);

  // Apex half radial chart
  const options = {
    series: [percent],
    chart: { type: 'radialBar', sparkline: {enabled: true} },
    plotOptions: {
      radialBar: {
        startAngle: -90,
        endAngle: 90,
        hollow: { size: '65%' },
        track: { background: '#f0f0f0', strokeWidth: '100%' },
        dataLabels: {
          name: { show: false },
          value: {
            show: true,
            fontSize: '16px',
            fontWeight: 600,
            offsetY: 5,
            formatter: () => m.value.toFixed(0) + " kW"
          }
        }
      }
    },
    colors: [color]
  };

  const chart = new ApexCharts(document.querySelector(`#chart${i}`), options);
  chart.render();
});
