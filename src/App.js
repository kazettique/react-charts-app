import React, { useState } from 'react'
import './App.css'
import { Chart } from 'react-google-charts'

function App() {
  // FUNCTIONS
  // Get week from date
  const getWeek = (date) => {
    const firstDayOfThisYear = new Date(date.getFullYear(), 0, 1)
    return Math.ceil((((date - firstDayOfThisYear) / 86400000) + firstDayOfThisYear.getDay() + 1) / 7)
  }
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
    [1546236000000, 1.71],
  ]
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
    [{ v: 'RU', f: 'Russia' }, 200],
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
    ['内蒙古自治区', 400],
  ]
  const countryData2 = [
    ['State', 'Clicks'],
    ['United Kingdom', 100],
    ['France', 400],
    ['Germany', 300],
    ['Norway', 250],
    ['Poland', 400],
    ['Italy', 200],
    ['Spain', 150],
    ['Czech Republic', 120],
    // with country code and country name both shown
    // REF: https://stackoverflow.com/questions/40747090/color-provinces-in-my-country-with-google-charts-geocharts
    [{ v: 'RU', f: 'Russia' }, 1200],
    ['China', 3000],
    ['Japan', 4000],
    ['South Korea', 2150],
    ['TR', 2150],
    ['India', 2500],
    ['Thailand', 2300],
    ['Indonesia', 2200],
    ['SA', 1250],
    ['Algeria', 1360],
    ['Cameroon', 1300],
    ['Egypt', 1260],
    ['Ethiopia', 2190],
    ['Gambia', 1130],
    ['Malawi', 2140],
    ['Morocco', 2320],
    ['Nigeria', 2800],
    ['South Africa', 2300],
    ['United States', 2200],
    ['Canada', 200],
    ['Brazil', 2350],
    ['Cuba', 2400],
    ['Argentina', 1300],
    ['Taiwan', 2100],
    // show states of US
    ['Illinois', 1200],
    ['Indiana', 1300],
    ['US-IA', 2000],
    ['US-RI', 1500],
    ['California', 1250],
    ['Texas', 1001],
    ['US-WA', 2500],
    ['Florida', 2350],
    // use prefecture name in Japanese
    ['東京', 1300],
    // also can be shown in English
    ['Osaka', 1250],
    ['Fukuoka', 2150],
    ['Okinawa', 1150],
    ['長野', 1180],
    ['北海道', 1180],
    ['Kyoto', 1100],
    // show the provinces of India perfectly
    ['Assam', 1180],
    ['Tamil Nadu', 1180],
    ['Tripura', 1250],
    ['Nagaland', 1160],
    ['Jammu and Kashmir', 1200],
    ['Delhi', 1280],
    ['Damen and Diu', 2180],
    ['Madhya Pradesh', 1280],
    ['Riverside', 1280],
    // I don't know what the code is? 🤔
    // REF: https://stackoverflow.com/questions/27051096/us-metro-regions-on-google-chart-geo-map
    // REF: http://jsfiddle.net/5he4p5k9/1/
    ['803', 200],
    ['807', 300],
    ['862', 400],
    ['Bay Area', 200],
    // show provinces of China in English
    ['Guangdong Sheng', 2250],
    ['Beijing Shi', 1500],
    ['Hebei Sheng', 1300],
    ['Jilin Sheng', 1400],
    ['Sichuan Sheng', 1500],
    ['Shanghai Shi', 1350],
    // use prefecture name in Mandarin
    ['新疆维吾尔自治区', 1400],
    ['西藏自治区', 1450],
    ['内蒙古自治区', 1400],
  ]
  const newRowData = []
  for (const value of rowData) newRowData.push([value[0], value[1], value[1] == null ? null : value[1] * 1.2, value[1] == null ? null : value[1] * 0.8])

  const dailyData = [] // daily data for chart
  dailyData.push(['Date', 'Impressions', 'Reach', 'Clicks']) // set title of chart
  for (const value of newRowData) dailyData.push([new Date(value[0]), value[1], value[2], value[3]])

  // PRE-PROCESSING DATA
  // Process monthly view data
  const monthlyData = [
    ['Jan', 0, 0, 0],
    ['Feb', 0, 0, 0],
    ['Mar', 0, 0, 0],
    ['Apr', 0, 0, 0],
    ['May', 0, 0, 0],
    ['Jun', 0, 0, 0],
    ['Jul', 0, 0, 0],
    ['Aug', 0, 0, 0],
    ['Sep', 0, 0, 0],
    ['Oct', 0, 0, 0],
    ['Nov', 0, 0, 0],
    ['Dec', 0, 0, 0],
  ] // monthly data for chart
  monthlyData.unshift(['Month', 'Impressions', 'Reach', 'Clicks']) // set title of chart
  for (const value of newRowData) {
    const normalizedDate = new Date(value[0])
    const dataMonth = normalizedDate.getMonth()
    monthlyData[dataMonth + 1][1] += value[1]
    monthlyData[dataMonth + 1][2] += value[2]
    monthlyData[dataMonth + 1][3] += value[3]
  }

  // Process weekly view data
  const weeklyData = [] // weekly data for chart
  const preWeeklyData = {}
  weeklyData.push(['Week', 'Impressions', 'Reach', 'Clicks'])

  // Generate new array 'preWeeklyData' with schema.
  // Schema: preWeeklyData = { 1: [1, 0], 2: [2, 0], ... }
  for (const key in newRowData) {
    const oneDayData = {
      week: getWeek(new Date(newRowData[key][0])),
      value1: newRowData[key][1],
      value2: newRowData[key][2],
      value3: newRowData[key][3],
    }
    // If object does not have existed key, then create new one
    if (!preWeeklyData.hasOwnProperty(oneDayData.week))
      preWeeklyData[String(oneDayData.week)] = [oneDayData.week, 0, 0, 0]
    else {
      preWeeklyData[String(oneDayData.week)][1] += oneDayData.value1
      preWeeklyData[String(oneDayData.week)][2] += oneDayData.value2
      preWeeklyData[String(oneDayData.week)][3] += oneDayData.value3
    }
  }

  // Convert object to array
  for (const value of Object.values(preWeeklyData)) weeklyData.push(value)

  // CONSTANTS
  const timeConstant = {
    DAILY: 'daily',
    WEEKLY: 'weekly',
    MONTHLY: 'monthly',
  }

  const MODE = {
    [timeConstant.DAILY]: dailyData,
    [timeConstant.WEEKLY]: weeklyData,
    [timeConstant.MONTHLY]: monthlyData,
  }

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
    SOUTHERN_AMERICA: 'southern america',
  }

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
  }

  // Set country for region
  const countryName = {
    US: 'US',
  }

  const COUNTRY_CODE = {
    [countryName.US]: 'US',
  }

  // Set resolution mode ('countries' or 'provinces')
  const resolutionMode = {
    COUNTRIES: 'countries',
    PROVINCES: 'provinces',
  }

  const RESOLUTION_MODE = {
    [resolutionMode.COUNTRIES]: 'countries',
    [resolutionMode.PROVINCES]: 'provinces',
  }

  // INITIAL STATES
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [region, setRegion] = useState(continentName.WORLD)
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [viewMode, setViewMode] = useState(timeConstant.DAILY)
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [resolution, setResolution] = useState(resolutionMode.COUNTRIES)
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [is3dMode, set3dMode] = useState(false)
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [mapData, setMapData] = useState(countryData)

  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <i className="devicon-react-original devIcon navbar-brand"/>
        <a className="navbar-brand" href="http://google.com"><span role="img" aria-label="">🤡</span> Welcome to Google
          Charts Playground! <span role="img" aria-label="">👻</span></a>
      </nav>
      <div className="btn-group-vertical jumpBtn">
        <a href="#time" className="btn btn-secondary">Time</a>
        <a href="#heatmap" className="btn btn-secondary">Heatmap</a>
        <a href="#stack" className="btn btn-secondary">Stacked</a>
        <a href="#combo" className="btn btn-secondary">Combo</a>
        <a href="#pie" className="btn btn-secondary">Pie</a>
      </div>
      <h3 id="time">Daily and monthly view switcher</h3>
      <div style={{ border: '1px solid #b9b9b9', padding: '5px' }}>
        <div className="btn-group" role="group" aria-label="Basic example">
          <button type="button" className="btn btn-secondary"
                  onClick={() => setViewMode(timeConstant.MONTHLY)}>Month
          </button>
          <button type="button" className="btn btn-secondary"
                  onClick={() => setViewMode(timeConstant.WEEKLY)}>Week
          </button>
          <button type="button" className="btn btn-secondary"
                  onClick={() => setViewMode(timeConstant.DAILY)}>Day
          </button>
        </div>
        <Chart
          className="chart"
          width='100%'
          height='400px'
          chartType={viewMode === timeConstant.DAILY ? 'LineChart' : 'LineChart'}
          loader={<div style={{
            alignItems: 'center',
            background: '#cccccc',
            display: 'flex',
            height: '400px',
            justifyContent: 'center',
            width: '100%',
          }}><i className="fas fa-5x fa-circle-notch fa-spin"/></div>}
          data={MODE[viewMode]}
          options={{
            // Use the same chart area width as the control for axis alignment.
            chartArea: {
              height: '75%',
              width: '80%',
            },
            colors: ['#51a4f8', '#f7cc6d', '#76d7d7'],
            hAxis: { slantedText: false },
            legend: { position: 'bottom' },
            pointSize: 4,
            vAxis: {},
          }}
          rootProps={{ 'data-testid': '3' }}
          chartPackages={['corechart', 'controls']}
        />
      </div>
      <h3 id="heatmap">Heat map with region switcher</h3>
      <div style={{ border: '1px solid #b9b9b9', padding: '5px' }}>
        <Chart
          className="mapChart"
          width={'100%'}
          height={'500px'}
          chartType="GeoChart"
          data={mapData}
          loader={<div style={{
            alignItems: 'center',
            background: '#cccccc',
            display: 'flex',
            height: '500px',
            justifyContent: 'center',
            width: '100%',
          }}><i className="fas fa-5x fa-circle-notch fa-spin"/></div>}
          // Note: you will need to get a mapsApiKey for your project.
          // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
          mapsApiKey="AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY"
          rootProps={{ 'data-testid': '1' }}
          options={{
            colorAxis: { colors: ['#D1E8FF', '#248EFA'] },
            datalessRegionColor: '#FCFCFC',
            legend: { position: 'absolute', top: '0', color: 'green' },
            region: region,
            resolution: resolution,
            sizeAxis: { minValue: 0, maxValue: 100 },
          }}
        />

        <p>Choose continent</p>
        <div className="btn-group" role="group" aria-label="Basic example">
          <button type="button" className="btn btn-success"
                  onClick={() => {
                    setRegion(CONTINENT_CODE[continentName.ASIA])
                    setResolution((RESOLUTION_MODE[resolutionMode.COUNTRIES]))
                  }}>Asia
          </button>
          <button type="button" className="btn btn-warning"
                  onClick={() => {
                    setRegion(CONTINENT_CODE[continentName.EASTERN_ASIA])
                    setResolution((RESOLUTION_MODE[resolutionMode.COUNTRIES]))
                  }}>Eastern Asia
          </button>
          <button type="button" className="btn btn-warning"
                  onClick={() => {
                    setRegion('035')
                    setResolution((RESOLUTION_MODE[resolutionMode.COUNTRIES]))
                  }}> SE Asia
          </button>
          <button type="button" className="btn btn-success"
                  onClick={() => {
                    setRegion(CONTINENT_CODE[continentName.EUROPE])
                    setResolution((RESOLUTION_MODE[resolutionMode.COUNTRIES]))
                  }}>Europe
          </button>
          <button type="button" className="btn btn-warning"
                  onClick={() => {
                    setRegion(CONTINENT_CODE[continentName.WESTERN_EUROPE])
                    setResolution((RESOLUTION_MODE[resolutionMode.COUNTRIES]))
                  }}>Western Europe
          </button>
          <button type="button" className="btn btn-success"
                  onClick={() => {
                    setRegion(CONTINENT_CODE[continentName.AFRICA])
                    setResolution((RESOLUTION_MODE[resolutionMode.COUNTRIES]))
                  }}>Africa
          </button>
          <button type="button" className="btn btn-warning"
                  onClick={() => {
                    setRegion(CONTINENT_CODE[continentName.NORTHERN_AMERICA])
                    setResolution((RESOLUTION_MODE[resolutionMode.COUNTRIES]))
                  }}>Northern America
          </button>
          <button type="button" className="btn btn-warning"
                  onClick={() => {
                    setRegion(CONTINENT_CODE[continentName.SOUTHERN_AMERICA])
                    setResolution((RESOLUTION_MODE[resolutionMode.COUNTRIES]))
                  }}>Southern America
          </button>
          <button type="button" className="btn btn-secondary"
                  onClick={() => {
                    setRegion(CONTINENT_CODE[continentName.WORLD])
                    setResolution((RESOLUTION_MODE[resolutionMode.COUNTRIES]))
                  }}>World
          </button>
        </div>
        <p>Choose country</p>
        <div className="btn-group" role="group" aria-label="Basic example">
          <button type="button" className="btn btn-danger"
                  onClick={() => {
                    setRegion(COUNTRY_CODE[countryName.US])
                    setResolution((RESOLUTION_MODE[resolutionMode.PROVINCES]))
                  }}>US
          </button>
          {/* TODO metro button */}
          <button type="button" className="btn btn-danger"
                  onClick={() => {
                    setRegion('US-CA')
                    setResolution('metros')
                  }}>US-Metro
          </button>
          <button type="button" className="btn btn-danger"
                  onClick={() => {
                    setRegion('JP')
                    setResolution('provinces')
                  }}>Japan
          </button>
          <button type="button" className="btn btn-danger"
                  onClick={() => {
                    setRegion('IN')
                    setResolution('provinces')
                  }}>India
          </button>
          <button type="button" className="btn btn-danger"
                  onClick={() => {
                    setRegion('IT')
                    setResolution('provinces')
                  }}>Italy
          </button>
          <button type="button" className="btn btn-danger"
                  onClick={() => {
                    setRegion('CN')
                    setResolution('provinces')
                  }}>China
          </button>
          <button type="button" className="btn btn-danger"
                  onClick={() => {
                    setRegion('TW')
                    setResolution('provinces')
                  }}>Taiwan
          </button>
        </div>
        <p>Choose Data</p>
        <div className="btn-group" role="group" aria-label="Basic example">
          <button type="button" className="btn btn-danger"
                  onClick={() => setMapData(countryData)}>Data 1
          </button>
          <button type="button" className="btn btn-danger"
                  onClick={() => setMapData(countryData2)}>Data 2
          </button>
        </div>
      </div>
      <h3 id="stack">Stacked bar chart</h3>
      {/* REF: https://stackoverflow.com/questions/31022421/google-visualization-stacked-bar-chart-colors-and-labels-for-each-value */}
      <div style={{ border: '1px solid #b9b9b9', padding: '5px' }}>
        <Chart
          width={'100%'}
          height={'500px'}
          chartType="BarChart"
          loader={<div style={{
            alignItems: 'center',
            background: '#cccccc',
            display: 'flex',
            height: '500px',
            justifyContent: 'center',
            width: '100%',
          }}><i className="fas fa-5x fa-circle-notch fa-spin"/></div>}
          data={[
            ['Country', 'Digital Display', 'Facebook', 'Instagram', 'YouTube', { role: 'annotation' }],
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
              bold: true,
              color: '#2c313a',
              fontName: 'Open Sans',
              fontSize: 36, // 12, 18 whatever you want (don't specify px)
              italic: false,
            },
            legend: {
              position: 'bottom',
              maxLines: 3,
              textStyle: { color: '#9b9b9b', fontSize: 12 },
              fontName: 'Open Sans',
            },
            bar: { groupWidth: '75%' },
            isStacked: true,
            focusTarget: 'category',
            series: {
              0: { color: '#92bef9' },
              1: { color: '#5e98e6' },
              2: { color: '#3b70b7' },
              3: { color: '#344776' },
            },
            hAxis: {
              baselineColor: '#d8d8d8',
              format: 'short',
              title: '',
              textStyle: { color: '#2c313a', fontSize: 16, fontName: 'Open Sans' },
            },
            vAxis: {
              format: 'short',
              title: '',
              textStyle: { color: '#2c313a', fontSize: 16, fontName: 'Open Sans' },
            },
            animation: {
              duration: '0.5s',
              easing: 'inAndOut',
              // startup: true,
            },
          }}
          rootProps={{ 'data-testid': '1' }}
        />
      </div>
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
            bar: { groupWidth: '50%' },
            chartArea: { width: '85%', height: '75%' },
            focusTarget: 'category',
            hAxis: { title: '' },
            vAxis: { baselineColor: '#d8d8d8', fontSize: 16 },
            isStacked: true,
            legend: { position: 'bottom', textStyle: { color: '#9b9b9b' } },
            title: '',
            pointSize: 4,
            seriesType: 'bars',
            series: {
              0: { targetAxisIndex: 0, color: '#92bef9' },
              1: { targetAxisIndex: 0, color: '#5e98e6' },
              2: { targetAxisIndex: 0, color: '#3b70b7' },
              3: { targetAxisIndex: 0, color: '#344776' },
              4: { targetAxisIndex: 1, color: '#f7cc6d', type: 'line', curveType: 'function' },
            },
            vAxes: {
              0: { title: '', format: 'short' },
              1: { title: '', format: 'percent' },
            },
          }}
          rootProps={{ 'data-testid': '1' }}
        />
      </div>
      <h3 id="pie">Demo for Pie Chart</h3>
      <div className="btn-group" role="group" aria-label="Basic example">
        {/*<button type="button" className="btn btn-secondary"*/}
        {/*        onClick={() => handle3dModeChange(false)}>2D*/}
        {/*</button>*/}
        {/*<button type="button" className="btn btn-secondary"*/}
        {/*        onClick={() => handle3dModeChange(true)}>3D*/}
        {/*</button>*/}
        <button type="button" className="btn btn-secondary"
                onClick={() => set3dMode(false)}>2D
        </button>
        <button type="button" className="btn btn-secondary"
                onClick={() => set3dMode(true)}>3D
        </button>
      </div>
      <div style={{ border: '1px solid #b9b9b9', padding: '5px' }}>
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
            ['Platform', 'Total Clicks', { role: 'annotation' }],
            ['PFX', 54500, 'hello'],
            ['Facebook', 45500, 'moto'],
          ]}
          options={{
            // title: 'CTR To Website',
            // backgroundColor: '#dddddd',
            chartArea: {
              height: '90%',
              width: '90%',
            },
            legend: 'none',
            pieSliceText: 'none',
            slices: {
              0: { color: '#51a4f8' },
              1: { color: '#f7cc6d' },
            },
            tooltip: { trigger: 'none' },
            is3D: is3dMode,
          }}
          rootProps={{ 'data-testid': '1' }}
        />
      </div>
    </div>
  )
}

export default App
