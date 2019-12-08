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
    ['Italy', 2000],
    ['Spain', 250],
    ['Czech Republic', 20],
    // with country code and country name both shown
    // REF: https://stackoverflow.com/questions/40747090/color-provinces-in-my-country-with-google-charts-geocharts
    [{v: 'RU', f: 'Russia'}, 200],
    ['China', 1000],
    ['Japan', 2000],
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
    ['United States', 2000],
    ['Canada', 300],
    ['Brazil', 250],
    ['Cuba', 400],
    ['Argentina', 300],
    ['Taiwan', 2000],
    // show states of US
    ['Illinois', 200],
    ['Indiana', 300],
    ['US-IA', 20],
    ['US-RI', 150],
    ['California', 250],
    ['Texas', 100],
    ['US-WA', 500],
    ['Florida', 350],
    // use prefecture name in Japanese
    ['東京', 300],
    // also can be shown in English
    ['Osaka', 250],
    ['Fukuoka', 150],
    ['Okinawa', 50],
    ['長野', 180],
    ['北海道', 80],
    ['Kyoto', 100],
    // show the provinces of India perfectly
    ['Assam', 80],
    ['Tamil Nadu', 180],
    ['Tripura', 150],
    ['Nagaland', 160],
    ['Jammu and Kashmir', 200],
    ['Delhi', 280],
    ['Damen and Diu', 180],
    ['Madhya Pradesh', 280],
    ['Riverside', 80],
    // I don't know what the code is? 🤔
    // REF: https://stackoverflow.com/questions/27051096/us-metro-regions-on-google-chart-geo-map
    // REF: http://jsfiddle.net/5he4p5k9/1/
    ['803', 200],
    ['807', 300],
    ['862', 400],
    ['Bay Area', 200],
    // show provinces of China in English
    ['Guangdong Sheng', 250],
    ['Beijing Shi', 500],
    ['Hebei Sheng', 300],
    ['Jilin Sheng', 400],
    ['Sichuan Sheng', 500],
    ['Shanghai Shi', 350],
    // use prefecture name in Mandarin
    ['新疆维吾尔自治区', 400],
    ['西藏自治区', 450],
    ['内蒙古自治区', 400]
  ];
  // TODO data

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

  // Set continent for region
  const continentName = {
    WORLD: 'world',
    EUROPE: 'europe',
    WESTERN_EUROPE: 'western europe',
    ASIA: 'asia',
    EASTERN_ASIA: 'eastern asia',
    NORTHERN_AMERICA: 'northern america',
    US: 'US',
    AFRICA: 'africa',
    SOUTHERN_AMERICA: 'southern america'
  };

  const CONTINENT_CODE = {
    [continentName.WORLD]: 'world',
    [continentName.EUROPE]: '150',
    [continentName.WESTERN_EUROPE]: '155',
    [continentName.ASIA]: '142',
    [continentName.EASTERN_ASIA]: '030',
    [continentName.NORTHERN_AMERICA]: '021',
    // [continentName.US]: 'US',
    [continentName.AFRICA]: '002',
    [continentName.SOUTHERN_AMERICA]: '005',
  };

  // Set country for region
  const countryName = {
    US: 'US',
  };

  const COUNTRY_CODE = {
    [countryName.US]: 'US',
  };

  // Set resolution mode ('countries' or 'provinces')
  const resolutionMode = {
    COUNTRIES: 'countries',
    PROVINCES: 'provinces'
  };

  const RESOLUTION_MODE = {
    [resolutionMode.COUNTRIES]: 'countries',
    [resolutionMode.PROVINCES]: 'provinces'
  };


  // INITIAL STATES
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [chartRange, setChartRange] = useState([new Date(2018, 0, 1),
    new Date(2018, 11, 31)]);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [region, setRegion] = useState(continentName.WORLD);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [viewMode, setViewMode] = useState(timeConstant.DAILY);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [resolution, setResolution] = useState(resolutionMode.COUNTRIES);

  // EVENT HANDLERS
  // const handleDateRangeChange = (startDate, endDate) => setChartRange([startDate, endDate]);
  const handleViewMode = (mode) => setViewMode(mode);
  const handleRegionChange = (region) => setRegion(region);
  const handleResolutionChange = (resolution) => setResolution(resolution);

  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <i className="devicon-react-original devIcon navbar-brand"/>
        <a className="navbar-brand" href="http://google.com">🤡 Welcome to Google Charts Playground! 👻</a>
      </nav>
      <div className="btn-group-vertical jumpBtn">
        <a href="#time" className="btn btn-secondary">Time</a>
        <a href="#heatmap" className="btn btn-secondary">Heatmap</a>
        <a href="#stack" className="btn btn-secondary">Stacked</a>
        <a href="#taiwan" className="btn btn-secondary">Taiwan</a>
        <a href="#uk" className="btn btn-secondary">UK</a>
        <a href="#japan" className="btn btn-secondary">Japan</a>
        <a href="#uae" className="btn btn-secondary">UAE</a>
        <a href="#lebanon" className="btn btn-secondary">Lebanon</a>
        <a href="#combo" className="btn btn-secondary">Combo</a>
        <a href="#pie" className="btn btn-secondary">Pie</a>
      </div>
      {/*<p>This is a simple demo about difference types of controlling the range in chart.<br/>*/}
      {/*  This data contains some random data from <b>Jan 1st, 2018 to Dec 31th, 2018.</b><br/>*/}
      {/*</p>*/}
      <h3 id="time">Daily and monthly view switcher</h3>
      {/*<p>*/}
      {/*  If we click "Monthly" button it will invoke Monthly Mode. That means showing sum data for each months.<br/>*/}
      {/*  The same feature as Daily button.<br/>*/}
      {/*  <b>NOTE:</b>*/}
      {/*</p>*/}
      {/*<ul>*/}
      {/*  <li>We chose column chart for monthly view in this demo for good readability in monthly view.</li>*/}
      {/*  <li>Also we want to show if we don't have CONTINUOUS DATA(some days don't have CLICKS data), how the chart*/}
      {/*    will be like.*/}
      {/*  </li>*/}
      {/*  <li>*/}
      {/*    The color of line or column in chart can be changed later.*/}
      {/*  </li>*/}
      {/*</ul>*/}
      <div style={{border: '1px solid #b9b9b9', padding: '5px'}}>
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
          loader={<div style={{
            width: '100%',
            height: '400px',
            background: '#cccccc',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}><i className="fas fa-5x fa-circle-notch fa-spin"/></div>}
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
      </div>
      {/* region */}
      {/*<h3>Month Selector & Filter Slider</h3>*/}
      {/*<p>*/}
      {/*  We can look a specific month by clicking the month buttons.<br/>*/}
      {/*  Click "All Year" button will show whole year(2018 in this case) data.*/}
      {/*  Also we can drag and move the slider at the bottom to change the range we want.<br/>*/}
      {/*  result will be shown in chart.<br/>*/}
      {/*  If the slider is not necessary, we can still remove it.<br/>*/}
      {/*  We just show two ways of controlling the filter.<br/>*/}
      {/*  <b>NOTE:</b>*/}
      {/*</p>*/}
      {/*<ul>*/}
      {/*  <li>*/}
      {/*    Month buttons are just primary design, we can change to another design if necessary. (For example:*/}
      {/*    dropdown menu)*/}
      {/*  </li>*/}
      {/*</ul>*/}
      {/*<div className="btn-group" role="group" aria-label="Basic example">*/}
      {/*  <button type="button" className="btn btn-secondary"*/}
      {/*          onClick={() => handleDateRangeChange(new Date(2018, 0, 1), new Date(2018, 0, 31))}>January*/}
      {/*  </button>*/}
      {/*  <button type="button" className="btn btn-secondary"*/}
      {/*          onClick={() => handleDateRangeChange(new Date(2018, 1, 1), new Date(2018, 1, 28))}>February*/}
      {/*  </button>*/}
      {/*  <button type="button" className="btn btn-secondary"*/}
      {/*          onClick={() => handleDateRangeChange(new Date(2018, 2, 1), new Date(2018, 2, 31))}>March*/}
      {/*  </button>*/}
      {/*  <button type="button" className="btn btn-secondary" disabled>...</button>*/}
      {/*  <button type="button" className="btn btn-secondary" onClick={() => {*/}
      {/*    handleDateRangeChange(new Date(2018, 0, 1), new Date(2018, 11, 31))*/}
      {/*  }}>ALL Year*/}
      {/*  </button>*/}
      {/*</div>*/}
      {/*<Chart*/}
      {/*  className="chart"*/}
      {/*  width='100%'*/}
      {/*  height='400px'*/}
      {/*  chartType='LineChart'*/}
      {/*  // style={{paddingBottom: '150px'}}*/}
      {/*  loader={<div style={{*/}
      {/*    width: '100%', height: '400px', background: '#cccccc', display: 'flex',*/}
      {/*    justifyContent: 'center',*/}
      {/*    alignItems: 'center',*/}
      {/*  }}><i className="fas fa-5x fa-circle-notch fa-spin"/></div>}*/}
      {/*  data={dailyData}*/}
      {/*  options={{*/}
      {/*    // Use the same chart area width as the control for axis alignment.*/}
      {/*    chartArea: {*/}
      {/*      height: '80%',*/}
      {/*      width: '90%',*/}
      {/*    },*/}
      {/*    hAxis: {slantedText: false},*/}
      {/*    vAxis: {*/}
      {/*      // viewWindow: {*/}
      {/*      //   min: 1,*/}
      {/*      //   max: 3,*/}
      {/*      // },*/}
      {/*    },*/}
      {/*    legend: {position: 'none'},*/}
      {/*    colors: ['#343A40'],*/}
      {/*  }}*/}
      {/*  rootProps={{'data-testid': '3'}}*/}
      {/*  chartPackages={['corechart', 'controls']}*/}
      {/*  controls={[*/}
      {/*    {*/}
      {/*      controlType: 'ChartRangeFilter',*/}
      {/*      options: {*/}
      {/*        filterColumnIndex: 0,*/}
      {/*        ui: {*/}
      {/*          chartType: 'LineChart',*/}
      {/*          chartOptions: {*/}
      {/*            chartArea: {*/}
      {/*              width: '90%',*/}
      {/*              height: '50%',*/}
      {/*            },*/}
      {/*            hAxis: {baselineColor: 'none'},*/}
      {/*            colors: ['#343A40'],*/}
      {/*          },*/}
      {/*        },*/}
      {/*      },*/}
      {/*      controlPosition: 'bottom',*/}
      {/*      controlWrapperParams: {*/}
      {/*        state: {*/}
      {/*          range: {*/}
      {/*            start: chartRange[0],*/}
      {/*            end: chartRange[1],*/}
      {/*          },*/}
      {/*        },*/}
      {/*      },*/}
      {/*    },*/}
      {/*  ]}*/}
      {/*/>*/}
      {/*<div style={{width: '100%', height: '300px'}}/>*/}
      {/* endregion */}
      <h3 id="heatmap">Heat map with region switcher</h3>
      {/*<p>*/}
      {/*  Here we demonstrate heat map.*/}
      {/*</p>*/}
      <div style={{border: '1px solid #b9b9b9', padding: '5px'}}>
        <Chart
          className="mapChart"
          width={'100%'}
          height={'500px'}
          chartType="GeoChart"
          data={countryData}
          loader={<div style={{
            width: '100%', height: '500px', background: '#cccccc', display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}><i className="fas fa-5x fa-circle-notch fa-spin"/></div>}
          // Note: you will need to get a mapsApiKey for your project.
          // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
          mapsApiKey="AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY"
          rootProps={{'data-testid': '1'}}
          options={{
            sizeAxis: {minValue: 0, maxValue: 100},
            region,
            colorAxis: {colors: ['#D1E8FF', '#248EFA']},
            resolution,
            datalessRegionColor: '#FCFCFC',
            legend: {position: 'absolute', top: '0', color: 'green'},
          }}
        />

        <p>Choose continent</p>
        <div className="btn-group" role="group" aria-label="Basic example">
          <button type="button" className="btn btn-success"
                  onClick={() => {
                    handleRegionChange(CONTINENT_CODE[continentName.ASIA]);
                    handleResolutionChange((RESOLUTION_MODE[resolutionMode.COUNTRIES]));
                  }}>Asia
          </button>
          <button type="button" className="btn btn-warning"
                  onClick={() => {
                    handleRegionChange(CONTINENT_CODE[continentName.EASTERN_ASIA]);
                    handleResolutionChange((RESOLUTION_MODE[resolutionMode.COUNTRIES]));
                  }}>Eastern Asia
          </button>
          <button type="button" className="btn btn-success"
                  onClick={() => {
                    handleRegionChange(CONTINENT_CODE[continentName.EUROPE]);
                    handleResolutionChange((RESOLUTION_MODE[resolutionMode.COUNTRIES]));
                  }}>Europe
          </button>
          <button type="button" className="btn btn-warning"
                  onClick={() => {
                    handleRegionChange(CONTINENT_CODE[continentName.WESTERN_EUROPE]);
                    handleResolutionChange((RESOLUTION_MODE[resolutionMode.COUNTRIES]));
                  }}>Western Europe
          </button>
          <button type="button" className="btn btn-success"
                  onClick={() => {
                    handleRegionChange(CONTINENT_CODE[continentName.AFRICA]);
                    handleResolutionChange((RESOLUTION_MODE[resolutionMode.COUNTRIES]));
                  }}>Africa
          </button>
          <button type="button" className="btn btn-warning"
                  onClick={() => {
                    handleRegionChange(CONTINENT_CODE[continentName.NORTHERN_AMERICA]);
                    handleResolutionChange((RESOLUTION_MODE[resolutionMode.COUNTRIES]));
                  }}>Northern America
          </button>
          <button type="button" className="btn btn-warning"
                  onClick={() => {
                    handleRegionChange(CONTINENT_CODE[continentName.SOUTHERN_AMERICA]);
                    handleResolutionChange((RESOLUTION_MODE[resolutionMode.COUNTRIES]));
                  }}>Southern America
          </button>
          <button type="button" className="btn btn-secondary"
                  onClick={() => {
                    handleRegionChange(CONTINENT_CODE[continentName.WORLD]);
                    handleResolutionChange((RESOLUTION_MODE[resolutionMode.COUNTRIES]));
                  }}>World
          </button>
        </div>
        <p>Choose country</p>
        <div className="btn-group" role="group" aria-label="Basic example">
          <button type="button" className="btn btn-danger"
                  onClick={() => {
                    handleRegionChange(COUNTRY_CODE[countryName.US]);
                    handleResolutionChange((RESOLUTION_MODE[resolutionMode.PROVINCES]))
                  }}>US
          </button>
          {/* TODO metro button */}
          <button type="button" className="btn btn-danger"
                  onClick={() => {
                    handleRegionChange('US-CA');
                    handleResolutionChange('metros')
                  }}>US-Metro
          </button>
          <button type="button" className="btn btn-danger"
                  onClick={() => {
                    handleRegionChange('JP');
                    handleResolutionChange('provinces')
                  }}>Japan
          </button>
          <button type="button" className="btn btn-danger"
                  onClick={() => {
                    handleRegionChange('IN');
                    handleResolutionChange('provinces')
                  }}>India
          </button>
          <button type="button" className="btn btn-danger"
                  onClick={() => {
                    handleRegionChange('IT');
                    handleResolutionChange('provinces')
                  }}>Italy
          </button>
          <button type="button" className="btn btn-danger"
                  onClick={() => {
                    handleRegionChange('CN');
                    handleResolutionChange('provinces')
                  }}>China
          </button>
          <button type="button" className="btn btn-danger"
                  onClick={() => {
                    handleRegionChange('TW');
                    handleResolutionChange('countries')
                  }}>Taiwan
          </button>
        </div>
      </div>
      <h3 id="stack">Stacked bar chart</h3>
      {/* REF: https://stackoverflow.com/questions/31022421/google-visualization-stacked-bar-chart-colors-and-labels-for-each-value */}
      <div style={{border: '1px solid #b9b9b9', padding: '5px'}}>
        <Chart
          width={'100%'}
          height={'500px'}
          chartType="BarChart"
          loader={<div style={{
            width: '100%',
            height: '500px',
            background: '#cccccc',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}><i className="fas fa-5x fa-circle-notch fa-spin"/></div>}
          data={[
            ['Country', 'Digital Display', 'Facebook', 'Instagram', 'YouTube', {role: 'annotation'}],
            ['Sri Lanka', 280000, 190000, 290000, 300000, 'hello'],
            ['India', 160000, 220000, 230000, 300000, 'world'],
            ['Vietnam', 70000, 200000, 150000, 200000, 'this'],
            ['Malaysia', 50000, 150000, 100000, 180000, 'is'],
            ['Indonesia', 40000, 100000, 80000, 100000, 'annotation'],
          ]}
          options={{
            title: 'Impressions',
            // REF: https://stackoverflow.com/questions/37176219/how-to-change-google-chart-title-font-size
            titleTextStyle: {
              color: '#2c313a',
              fontName: 'Open Sans',
              fontSize: 36, // 12, 18 whatever you want (don't specify px)
              bold: true,
              italic: false,
            },
            legend: {
              position: 'bottom',
              maxLines: 3,
              textStyle: {color: '#9b9b9b', fontSize: 12},
              fontName: 'Open Sans'
            },
            bar: {groupWidth: '75%'},
            isStacked: true,
            focusTarget: 'category',
            series: {
              0: {color: '#92bef9'},
              1: {color: '#5e98e6'},
              2: {color: '#3b70b7'},
              3: {color: '#344776'},
            },
            hAxis: {
              baselineColor: '#d8d8d8',
              format: 'short',
              title: '',
              textStyle: {color: '#2c313a', fontSize: 16, fontName: 'Open Sans'},
            },
            vAxis: {
              format: 'short',
              title: '',
              textStyle: {color: '#2c313a', fontSize: 16, fontName: 'Open Sans'},
            },
            animation: {
              duration: '0.5s',
              easing: 'inAndOut',
              // startup: true,
            }
          }}
          rootProps={{'data-testid': '1'}}
        />
      </div>
      <h3 id="taiwan">Data of city in Taiwan</h3>
      <div style={{border: '1px solid #b9b9b9', padding: '5px'}}>
        <Chart
          width={'100%'}
          height={'500px'}
          chartType="GeoChart"
          loader={<div style={{
            width: '100%',
            height: '500px',
            background: '#cccccc',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}><i
            className="fas fa-5x fa-circle-notch fa-spin"/></div>}
          data={[
            ['City', 'Clicks'],
            ['Taipei', 2761477],
            ['New Taipei', 2361477],
            ['Tainan', 1324110],
            ['Kaoshung', 959574],
          ]}
          options={{
            region: 'TW',
            displayMode: 'markers',
            colorAxis: {colors: ['#D1E8FF', '#248EFA']},
          }}
          // Note: you will need to get a mapsApiKey for your project.
          // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
          mapsApiKey="AIzaSyCn1FMQWe2D2Mriyr1NlFFXMpbeQDx-m-0"
          rootProps={{'data-testid': '2'}}
        />
      </div>
      <h3 id="uk">Data of city in UK</h3>
      <div style={{border: '1px solid #b9b9b9', padding: '5px'}}>
        <Chart
          width={'100%'}
          height={'500px'}
          chartType="GeoChart"
          loader={<div style={{
            width: '100%', height: '500px', background: '#cccccc', display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}><i className="fas fa-5x fa-circle-notch fa-spin"/></div>}
          data={[
            ['City', 'Clicks'],
            ['London', 2761477],
            ['Liverpool', 2324110],
            ['Oxford', 2527110],
            ['Manchester', 2354110],
          ]}
          options={{
            region: 'GB',
            displayMode: 'markers',
            colorAxis: {colors: ['#D1E8FF', '#248EFA']},
          }}
          // Note: you will need to get a mapsApiKey for your project.
          // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
          mapsApiKey="AIzaSyCn1FMQWe2D2Mriyr1NlFFXMpbeQDx-m-0"
          rootProps={{'data-testid': '2'}}
        />
      </div>
      <h3 id="japan">Data of city in Japan</h3>
      <div style={{border: '1px solid #b9b9b9', padding: '5px'}}>
        <Chart
          width={'100%'}
          height={'500px'}
          chartType="GeoChart"
          loader={<div style={{
            width: '100%',
            height: '500px',
            background: '#cccccc',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}><i className="fas fa-5x fa-circle-notch fa-spin"/></div>}
          data={[
            ['City', 'Clicks'],
            ['Osaka', 2761477],
            ['Kobe', 2324110],
            ['Kyoto', 2324110],
            ['Tokyo', 1208580],
            ['Sapporo', 58902],
            ['Nara', 2385909],
            ['Fukuoka', 2385909],
          ]}
          options={{
            region: 'JP',
            displayMode: 'markers',
            colorAxis: {colors: ['#D1E8FF', '#248EFA']},
          }}
          // Note: you will need to get a mapsApiKey for your project.
          // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
          mapsApiKey="AIzaSyCn1FMQWe2D2Mriyr1NlFFXMpbeQDx-m-0"
          rootProps={{'data-testid': '2'}}
        />
      </div>
      <h3 id="uae">Data of city in United Arab Emirates</h3>
      <div style={{border: '1px solid #b9b9b9', padding: '5px'}}>
        <Chart
          width={'100%'}
          height={'500px'}
          chartType="GeoChart"
          loader={<div style={{
            width: '100%',
            height: '500px',
            background: '#cccccc',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}><i className="fas fa-5x fa-circle-notch fa-spin"/></div>}
          data={[
            ['City', 'Clicks'],
            ['Dubai', 1137347],
            ['Abu Dhabi', 603492],
            ['Sharjah', 543733],
            ['Al Ain', 408733],
            ['Ajman', 226173],
            ['Ras al-Khaimah', 115949],
            ['Al Fujayrah', 64125],
            ['Umm Al Quwain Fort', 44411],
            ['Khawr Fakkan', 33575],
            ['Dibba Al-Fujairah', 30000],
          ]}
          options={{
            region: 'AE',
            displayMode: 'markers',
            colorAxis: {colors: ['#D1E8FF', '#248EFA']},
          }}
          // Note: you will need to get a mapsApiKey for your project.
          // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
          mapsApiKey="AIzaSyCn1FMQWe2D2Mriyr1NlFFXMpbeQDx-m-0"
          rootProps={{'data-testid': '2'}}
        />
      </div>
      <h3 id="lebanon">Data of city in Lebanon</h3>
      <div style={{border: '1px solid #b9b9b9', padding: '5px'}}>
        <Chart
          width={'100%'}
          height={'500px'}
          chartType="GeoChart"
          loader={<div style={{
            width: '100%',
            height: '500px',
            background: '#cccccc',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}><i className="fas fa-5x fa-circle-notch fa-spin"/></div>}
          data={[
            ['City', 'Population'],
            ['Beirut Governorate', 1916100],
            ['Tripoli', 229398],
            ['Sidon', 163554],
            ['Tyre', 135204],
            ['Nabatîyé et Tahta', 120000],
            ['Habboûch', 98433],
            ['Djounie', 96135],
            ['Zahle', 78145],
            ['Baalbek', 30196],
            ['En Nâqoûra', 24910],
          ]}
          options={{
            region: 'LB',
            displayMode: 'markers',
            colorAxis: {colors: ['#D1E8FF', '#248EFA']},
          }}
          // Note: you will need to get a mapsApiKey for your project.
          // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
          mapsApiKey="AIzaSyCn1FMQWe2D2Mriyr1NlFFXMpbeQDx-m-0"
          rootProps={{'data-testid': '2'}}
        />
      </div>
      <h3 id="combo">Combo chart with line and bar</h3>
      {/* REF: https://stackoverflow.com/questions/29931681/google-combo-charts-with-stacked-bar-and-lines */}
      <div style={{
        alignItems: 'center',
        border: '1px solid #b9b9b9',
        display: 'flex',
        justifyContent: 'center',
        padding: '5px',
      }}>
        <Chart
          width={'100%'}
          height={'325px'}
          chartType="ComboChart"
          loader={<div style={{
            alignItems: 'center',
            background: '#cccccc',
            display: 'flex',
            height: '325px',
            justifyContent: 'center',
            width: '100%',
          }}><i className="fas fa-5x fa-circle-notch fa-spin"/></div>}
          data={[
            ['Month', 'Digital Display', 'Facebook', 'Instagram', 'YouTube', 'Engagement Rate'],
            ['Aug 26', 165, 938, 614.6, 400, 0.04],
            ['Sep 2', 135, 1120, 682, 500, 0.05],
            ['Sep 9', 157, 1167, 623, 600, 0.045],
            ['Sep 16', 139, 1110, 609.4, 450, 0.035],
            ['Sep 23', 136, 691, 569.6, 700, 0.03],
            ['Sep 30', 236, 491, 469.6, 500, 0.02],
            ['Oct 7', 436, 591, 369.6, 700, 0.015],
            ['Oct 14', 336, 791, 269.6, 800, 0.025],
            ['Oct 21', 236, 391, 469.6, 750, 0.02],
            ['Oct 28', 336, 291, 369.6, 600, 0.015],
          ]}
          options={{
            bar: {groupWidth: '50%'},
            chartArea: {width: '85%', height: '75%'},
            focusTarget: 'category',
            hAxis: {title: ''},
            vAxis: {baselineColor: '#d8d8d8', fontSize: 16},
            isStacked: true,
            legend: {position: 'bottom', textStyle: {color: '#9b9b9b'}},
            title: '',
            pointSize: 10,
            seriesType: 'bars',
            series: {
              0: {targetAxisIndex: 0, color: '#92bef9'},
              1: {targetAxisIndex: 0, color: '#5e98e6'},
              2: {targetAxisIndex: 0, color: '#3b70b7'},
              3: {targetAxisIndex: 0, color: '#344776'},
              4: {targetAxisIndex: 1, color: '#f7cc6d', type: 'line', curveType: 'function'},
            },
            vAxes: {
              0: {title: '', format: 'short'},
              1: {title: '', format: 'percent'},
            },
          }}
          rootProps={{'data-testid': '1'}}
        />
      </div>
      <h3 id="pie">Demo for Pie Chart</h3>
      <div style={{border: '1px solid #b9b9b9', padding: '5px'}}>
        <Chart
          width={'100%'}
          height={'500px'}
          chartType="PieChart"
          loader={<div style={{
            alignItems: 'center',
            background: '#cccccc',
            display: 'flex',
            height: '500px',
            justifyContent: 'center',
            width: '100%',
          }}><i className="fas fa-5x fa-circle-notch fa-spin"/></div>}
          data={[
            ['Platform', 'Total Clicks', {role: 'annotation'}],
            ['PFX', 54500, 'hello'],
            ['Facebook', 45500, 'moto'],
          ]}
          options={{
            // title: 'CTR To Website',
            backgroundColor: '#dddddd',
            chartArea: {
              height: '90%',
              width: '90%',
            },
            legend: 'none',
            pieSliceText: 'label',
            slices: {
              0: {color: '#51a4f8'},
              1: {color: '#f7cc6d'},
            },
            // tooltip: { trigger: 'none' },

          }}
          rootProps={{'data-testid': '1'}}
        />
      </div>
    </div>
  )
}

export default App;
