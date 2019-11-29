import React, {useState} from 'react';
import './App.css';
import {Chart} from "react-google-charts";

function App() {

  // FUNCTIONS
  // Get week from date
  const getWeek = (date) => {
    const firstDayOfThisYear = new Date(date.getFullYear(), 0, 1);
    return Math.ceil((((date - firstDayOfThisYear) / 86400000) + firstDayOfThisYear.getDay() + 1) / 7);
  };
  // REF: http://zerosixthree.se/snippets/get-week-of-the-year-with-jquery/

  // Data from backend
  const rowData = [
    [1514872800000, 2],
    [1514959200000, 1.98],
    [1515045600000, 2.01],
    [1515132000000, 2.01],
    [1515391200000, 2.02],
    [1515477600000, 2.03],
    [1515564000000, 2.03],
    [1515650400000, 2],
    [1515736800000, 2.01],
    [1515996000000, null],
    [1516082400000, 2.03],
    [1516168800000, 2.04],
    [1516255200000, 2.05],
    [1516341600000, 2.06],
    [1516600800000, 2.06],
    [1516687200000, 2.06],
    [1516773600000, 2.07],
    [1516860000000, 2.07],
    [1516946400000, 2.09],
    [1517205600000, 2.09],
    [1517292000000, 2.1],
    [1517378400000, 2.11],
    [1517464800000, 2.11],
    [1517551200000, 2.14],
    [1517810400000, 2.1],
    [1517896800000, 2.1],
    [1517983200000, 2.1],
    [1518069600000, 2.09],
    [1518156000000, 2.05],
    [1518415200000, 2.07],
    [1518501600000, 2.05],
    [1518588000000, 2.09],
    [1518674400000, 2.11],
    [1518760800000, 2.09],
    [1519020000000, null],
    [1519106400000, 2.1],
    [1519192800000, 2.12],
    [1519279200000, 2.11],
    [1519365600000, 2.12],
    [1519624800000, 2.13],
    [1519711200000, 2.13],
    [1519797600000, 2.12],
    [1519884000000, 2.1],
    [1519970400000, 2.12],
    [1520229600000, 2.13],
    [1520316000000, 2.12],
    [1520402400000, 2.13],
    [1520488800000, 2.11],
    [1520575200000, 2.12],
    [1520830800000, 2.1],
    [1520917200000, 2.09],
    [1521003600000, 2.07],
    [1521090000000, 2.08],
    [1521176400000, 2.08],
    [1521435600000, 2.08],
    [1521522000000, 2.08],
    [1521608400000, 2.09],
    [1521694800000, 2.08],
    [1521781200000, 2.07],
    [1522040400000, 2.08],
    [1522126800000, 2.07],
    [1522213200000, 2.05],
    [1522299600000, 2.05],
    [1522386000000, null],
    [1522645200000, 2.05],
    [1522731600000, 2.08],
    [1522818000000, 2.08],
    [1522904400000, 2.08],
    [1522990800000, 2.07],
    [1523250000000, 2.07],
    [1523336400000, 2.08],
    [1523422800000, 2.11],
    [1523509200000, 2.13],
    [1523595600000, 2.13],
    [1523854800000, 2.12],
    [1523941200000, 2.14],
    [1524027600000, 2.16],
    [1524114000000, 2.17],
    [1524200400000, 2.17],
    [1524459600000, 2.18],
    [1524546000000, 2.17],
    [1524632400000, 2.17],
    [1524718800000, 2.18],
    [1524805200000, 2.17],
    [1525064400000, 2.17],
    [1525150800000, 2.16],
    [1525237200000, 2.17],
    [1525323600000, 2.16],
    [1525410000000, 2.16],
    [1525669200000, 2.17],
    [1525755600000, 2.16],
    [1525842000000, 2.18],
    [1525928400000, 2.17],
    [1526014800000, 2.15],
    [1526274000000, 2.15],
    [1526360400000, 2.18],
    [1526446800000, 2.17],
    [1526533200000, 2.16],
    [1526619600000, 2.15],
    [1526878800000, 2.16],
    [1526965200000, 2.15],
    [1527051600000, 2.14],
    [1527138000000, 2.12],
    [1527224400000, 2.09],
    [1527483600000, null],
    [1527570000000, 2.04],
    [1527656400000, 2.06],
    [1527742800000, 2.07],
    [1527829200000, 2.09],
    [1528088400000, 2.12],
    [1528174800000, 2.13],
    [1528261200000, 2.14],
    [1528347600000, 2.13],
    [1528434000000, 2.11],
    [1528693200000, 2.13],
    [1528779600000, 2.13],
    [1528866000000, 2.12],
    [1528952400000, 2.12],
    [1529038800000, 2.12],
    [1529298000000, 2.12],
    [1529384400000, 2.12],
    [1529470800000, 2.12],
    [1529557200000, 2.11],
    [1529643600000, 2.12],
    [1529902800000, 2.1],
    [1529989200000, 2.12],
    [1530075600000, 2.11],
    [1530162000000, 2.1],
    [1530248400000, 2.11],
    [1530507600000, 2.14],
    [1530594000000, 2.12],
    [1530680400000, null],
    [1530766800000, 2.13],
    [1530853200000, 2.12],
    [1531112400000, 2.13],
    [1531198800000, 2.13],
    [1531285200000, 2.11],
    [1531371600000, 2.1],
    [1531458000000, 2.11],
    [1531717200000, 2.1],
    [1531803600000, 2.09],
    [1531890000000, 2.09],
    [1531976400000, 2.09],
    [1532062800000, 2.11],
    [1532322000000, 2.11],
    [1532408400000, 2.11],
    [1532494800000, 2.13],
    [1532581200000, 2.11],
    [1532667600000, 2.12],
    [1532926800000, 2.13],
    [1533013200000, 2.12],
    [1533099600000, 2.13],
    [1533186000000, 2.12],
    [1533272400000, 2.12],
    [1533531600000, 2.11],
    [1533618000000, 2.13],
    [1533704400000, 2.11],
    [1533790800000, 2.11],
    [1533877200000, 2.09],
    [1534136400000, 2.1],
    [1534222800000, 2.09],
    [1534309200000, 2.08],
    [1534395600000, 2.08],
    [1534482000000, 2.08],
    [1534741200000, 2.07],
    [1534827600000, 2.08],
    [1534914000000, 2.08],
    [1535000400000, 2.09],
    [1535086800000, 2.09],
    [1535346000000, 2.11],
    [1535432400000, 2.11],
    [1535518800000, 2.12],
    [1535605200000, 2.1],
    [1535691600000, 2.08],
    [1535950800000, null],
    [1536037200000, 2.1],
    [1536123600000, 2.09],
    [1536210000000, 2.08],
    [1536296400000, 2.1],
    [1536555600000, 2.1],
    [1536642000000, 2.12],
    [1536728400000, 2.12],
    [1536814800000, 2.1],
    [1536901200000, 2.1],
    [1537160400000, 2.1],
    [1537246800000, 2.13],
    [1537333200000, 2.15],
    [1537419600000, 2.15],
    [1537506000000, 2.15],
    [1537765200000, 2.16],
    [1537851600000, 2.16],
    [1537938000000, 2.14],
    [1538024400000, 2.15],
    [1538110800000, 2.14],
    [1538370000000, 2.14],
    [1538456400000, 2.12],
    [1538542800000, 2.16],
    [1538629200000, 2.16],
    [1538715600000, 2.16],
    [1538974800000, null],
    [1539061200000, 2.17],
    [1539147600000, 2.16],
    [1539234000000, 2.12],
    [1539320400000, 2.12],
    [1539579600000, 2.13],
    [1539666000000, 2.13],
    [1539752400000, 2.13],
    [1539838800000, 2.1],
    [1539925200000, 2.11],
    [1540184400000, 2.11],
    [1540270800000, 2.09],
    [1540357200000, 2.07],
    [1540443600000, 2.05],
    [1540530000000, 2.06],
    [1540789200000, 2.06],
    [1540875600000, 2.05],
    [1540962000000, 2.05],
    [1541048400000, 2.02],
    [1541134800000, 2.06],
    [1541397600000, 2.06],
    [1541484000000, 2.07],
    [1541570400000, 2.07],
    [1541656800000, 2.07],
    [1541743200000, 2.04],
    [1542002400000, null],
    [1542088800000, 2.02],
    [1542175200000, 2],
    [1542261600000, 2],
    [1542348000000, 2.02],
    [1542607200000, 1.99],
    [1542693600000, 1.97],
    [1542780000000, 1.97],
    [1542866400000, null],
    [1542952800000, 1.96],
    [1543212000000, 1.96],
    [1543298400000, 1.91],
    [1543384800000, 1.94],
    [1543471200000, 1.98],
    [1543557600000, 1.97],
    [1543816800000, 1.96],
    [1543903200000, 1.94],
    [1543989600000, null],
    [1544076000000, 1.9],
    [1544162400000, 1.89],
    [1544421600000, 1.86],
    [1544508000000, 1.83],
    [1544594400000, 1.83],
    [1544680800000, 1.83],
    [1544767200000, 1.82],
    [1545026400000, 1.81],
    [1545112800000, 1.81],
    [1545199200000, 1.8],
    [1545285600000, 1.76],
    [1545372000000, 1.77],
    [1545631200000, 1.75],
    [1545717600000, null],
    [1545804000000, 1.77],
    [1545890400000, 1.74],
    [1545976800000, 1.73],
    [1546236000000, 1.71]
  ];
  const countryData = [
    ['State', 'Clicks'],
    ['United Kingdom', 200],
    ['France', 300],
    ['Germany', 500],
    ['Norway', 350],
    ['Poland', 500],
    ['Italy', 450],
    ['Spain', 250],
    ['Czech Republic', 20],
    ['RU', 200],
    ['China', 1000],
    ['Japan', 200],
    ['South Korea', 150],
    ['TR', 150],
    ['India', 500],
    ['Thailand', 300],
    ['Indonesia', 200],
    ['SA', 150],
    ['Algeria', 360],
    ['Cameroon', 300],
    ['Egypt', 260],
    ['Ethiopia', 190],
    ['Gambia', 130],
    ['Malawi', 140],
    ['Morocco', 320],
    ['Nigeria', 800],
    ['South Africa', 300],
    ['United States', 600],
    ['Canada', 300],
    ['Brazil', 250],
    ['Cuba', 400],
    ['Argentina', 300],
    ['Taiwan', 2000]
  ];

  const dailyData = []; // daily data for chart
  dailyData.push(['Date', 'Clicks(millions)']); // set title of chart
  for (const value of rowData) {
    dailyData.push([new Date(value[0]), value[1]])
  }

  // PRE-PROCESSING DATA
  // Process monthly view data
  const monthlyData = [
    ['Jan', 0],
    ['Feb', 0],
    ['Mar', 0],
    ['Apr', 0],
    ['May', 0],
    ['Jun', 0],
    ['Jul', 0],
    ['Aug', 0],
    ['Sep', 0],
    ['Oct', 0],
    ['Nov', 0],
    ['Dec', 0],
  ]; // monthly data for chart
  monthlyData.unshift(['Month', 'Clicks(millions)']); // set title of chart
  for (const value of rowData) {
    const normalizedDate = new Date(value[0]);
    const dataMonth = normalizedDate.getMonth();
    monthlyData[dataMonth + 1][1] += value[1];
  }

  // Process weekly view data
  const weeklyData = []; // weekly data for chart
  const preWeeklyData = {};
  weeklyData.push(['Week', 'Clicks(millions)']);

  // Generate new array 'preWeeklyData' with schema.
  // Schema: preWeeklyData = { 1: [1, 0], 2: [2, 0], ... }
  for (const key in rowData) {
    const oneDayData = {week: getWeek(new Date(rowData[key][0])), value: rowData[key][1]};
    // If object does not have existed key, then create new one
    if (!preWeeklyData.hasOwnProperty(oneDayData.week))
      preWeeklyData[String(oneDayData.week)] = [oneDayData.week, 0];
    else
      preWeeklyData[String(oneDayData.week)][1] += oneDayData.value;
  }

  // Convert object to array
  for (const value of Object.values(preWeeklyData)) weeklyData.push(value);

  // CONSTANTS
  const timeConstant = {
    DAILY: 'daily',
    WEEKLY: 'weekly',
    MONTHLY: 'monthly',
  };

  const MODE = {
    [timeConstant.DAILY]: dailyData,
    [timeConstant.WEEKLY]: weeklyData,
    [timeConstant.MONTHLY]: monthlyData,
  };

  const regionName = {
    WORLD: 'world',
    EUROPE: 'europe',
    WESTERN_EUROPE: 'western europe',
    ASIA: 'asia',
    EASTERN_ASIA: 'eastern asia',
    NORTHERN_AMERICA: 'northern america',
    AFRICA: 'africa',
    SOUTHERN_AMERICA: 'southern america'
  };

  const REGION_CODE = {
    [regionName.WORLD]: 'world',
    [regionName.EUROPE]: '150',
    [regionName.WESTERN_EUROPE]: '155',
    [regionName.ASIA]: '142',
    [regionName.EASTERN_ASIA]: '030',
    [regionName.NORTHERN_AMERICA]: '021',
    [regionName.AFRICA]: '002',
    [regionName.SOUTHERN_AMERICA]: '005',
  };

  // INITIAL STATES
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [chartRange, setChartRange] = useState([new Date(2018, 0, 1),
    new Date(2018, 11, 31)]);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [region, setRegion] = useState(regionName.WORLD);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [viewMode, setViewMode] = useState(timeConstant.DAILY);

  // EVENT HANDLERS
  const handleDateRangeChange = (startDate, endDate) => setChartRange([startDate, endDate]);
  const handleViewMode = (mode) => setViewMode(mode);
  const handleRegionChange = (region) => setRegion(region);

  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <i className="devicon-react-original devIcon navbar-brand"/>
        <a className="navbar-brand" href="http://google.com">Time line chart demo with Google Charts</a>
      </nav>
      <p>This is a simple demo about difference types of controlling the range in chart.<br/>
        This data contains some random data from <b>Jan 1st, 2018 to Dec 31th, 2018.</b><br/>
      </p>
      <h3>Daily and monthly view switcher</h3>
      <p>
        If we click "Monthly" button it will invoke Monthly Mode. That means showing sum data for each months.<br/>
        The same feature as Daily button.<br/>
        <b>NOTE:</b>
      </p>
      <ul>
        <li>We chose column chart for monthly view in this demo for good readability in monthly view.</li>
        <li>Also we want to show if we don't have CONTINUOUS DATA(some days don't have CLICKS data), how the chart
          will be like.
        </li>
        <li>
          The color of line or column in chart can be changed later.
        </li>
      </ul>
      <div className="btn-group" role="group" aria-label="Basic example">
        <button type="button" className="btn btn-secondary"
                onClick={() => handleViewMode(timeConstant.MONTHLY)}>Monthly
        </button>
        <button type="button" className="btn btn-secondary"
                onClick={() => handleViewMode(timeConstant.WEEKLY)}>Weekly
        </button>
        <button type="button" className="btn btn-secondary"
                onClick={() => handleViewMode(timeConstant.DAILY)}>Daily
        </button>
      </div>
      <Chart
        className="chart"
        width='100%'
        height='400px'
        chartType={viewMode === timeConstant.DAILY ? 'LineChart' : 'ColumnChart'}
        loader={<div>Loading Chart</div>}
        data={MODE[viewMode]}
        options={{
          // Use the same chart area width as the control for axis alignment.
          chartArea: {
            height: '80%',
            width: '90%',
          },
          hAxis: {slantedText: false},
          vAxis: {
            // viewWindow: {
            //   min: 1,
            //   max: 3,
            // },
          },
          legend: {position: 'none'},
          colors: ['#343A40'],
        }}
        rootProps={{'data-testid': '3'}}
        chartPackages={['corechart', 'controls']}
      />
      <h3>Month Selector & Filter Slider</h3>
      <p>
        We can look a specific month by clicking the month buttons.<br/>
        Click "All Year" button will show whole year(2018 in this case) data.
        Also we can drag and move the slider at the bottom to change the range we want.<br/>
        result will be shown in chart.<br/>
        If the slider is not necessary, we can still remove it.<br/>
        We just show two ways of controlling the filter.<br/>
        <b>NOTE:</b>
      </p>
      <ul>
        <li>
          Month buttons are just primary design, we can change to another design if necessary. (For example:
          dropdown menu)
        </li>
      </ul>
      <div className="btn-group" role="group" aria-label="Basic example">
        <button type="button" className="btn btn-secondary"
                onClick={() => handleDateRangeChange(new Date(2018, 0, 1), new Date(2018, 0, 31))}>January
        </button>
        <button type="button" className="btn btn-secondary"
                onClick={() => handleDateRangeChange(new Date(2018, 1, 1), new Date(2018, 1, 28))}>February
        </button>
        <button type="button" className="btn btn-secondary"
                onClick={() => handleDateRangeChange(new Date(2018, 2, 1), new Date(2018, 2, 31))}>March
        </button>
        <button type="button" className="btn btn-secondary" disabled>...</button>
        <button type="button" className="btn btn-secondary" onClick={() => {
          handleDateRangeChange(new Date(2018, 0, 1), new Date(2018, 11, 31))
        }}>ALL Year
        </button>
      </div>
      <Chart
        className="chart"
        width='100%'
        height='400px'
        chartType='LineChart'
        loader={<div>Loading Chart</div>}
        data={dailyData}
        options={{
          // Use the same chart area width as the control for axis alignment.
          chartArea: {
            height: '80%',
            width: '90%',
          },
          hAxis: {slantedText: false},
          vAxis: {
            // viewWindow: {
            //   min: 1,
            //   max: 3,
            // },
          },
          legend: {position: 'none'},
          colors: ['#343A40'],
        }}
        rootProps={{'data-testid': '3'}}
        chartPackages={['corechart', 'controls']}
        controls={[
          {
            controlType: 'ChartRangeFilter',
            options: {
              filterColumnIndex: 0,
              ui: {
                chartType: 'LineChart',
                chartOptions: {
                  chartArea: {
                    width: '90%',
                    height: '50%',
                  },
                  hAxis: {baselineColor: 'none'},
                  colors: ['#343A40'],
                },
              },
            },
            controlPosition: 'bottom',
            controlWrapperParams: {
              state: {
                range: {
                  start: chartRange[0],
                  end: chartRange[1],
                },
              },
            },
          },
        ]}
      />
      <h3>Heat map with region switcher</h3>
      <p>
        Here we demonstrate heat map.
      </p>
      <Chart
        className="mapChart"
        width={'800px'}
        height={'600px'}
        chartType="GeoChart"
        data={countryData}
        // Note: you will need to get a mapsApiKey for your project.
        // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
        mapsApiKey="AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY"
        rootProps={{'data-testid': '1'}}
        options={{
          sizeAxis: {minValue: 0, maxValue: 100},
          region,
          colorAxis: {colors: ['#b9b9b9', '#2c313a']},
        }}
      />
      <div className="btn-group" role="group" aria-label="Basic example">
        <button type="button" className="btn btn-secondary"
                onClick={() => handleRegionChange(REGION_CODE[regionName.ASIA])}>Asia
        </button>
        <button type="button" className="btn btn-secondary"
                onClick={() => handleRegionChange(REGION_CODE[regionName.EASTERN_ASIA])}>Eastern Asia
        </button>
        <button type="button" className="btn btn-secondary"
                onClick={() => handleRegionChange(REGION_CODE[regionName.EUROPE])}>Europe
        </button>
        <button type="button" className="btn btn-secondary"
                onClick={() => handleRegionChange(REGION_CODE[regionName.WESTERN_EUROPE])}>Western Europe
        </button>
        <button type="button" className="btn btn-secondary"
                onClick={() => handleRegionChange(REGION_CODE[regionName.AFRICA])}>Africa
        </button>
        <button type="button" className="btn btn-secondary"
                onClick={() => handleRegionChange(REGION_CODE[regionName.NORTHERN_AMERICA])}>Northern America
        </button>
        <button type="button" className="btn btn-secondary"
                onClick={() => handleRegionChange(REGION_CODE[regionName.SOUTHERN_AMERICA])}>Southern America
        </button>
        <button type="button" className="btn btn-secondary"
                onClick={() => handleRegionChange(REGION_CODE[regionName.WORLD])}>World
        </button>
      </div>
    </div>
  )
}

export default App;
