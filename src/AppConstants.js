const AppConstants = {
    // WebUrl: "http://localhost:8090/pos",
    WebUrl: "https://admin.sutradhar.tech:8090/pos",
    SDUrl: "http://sutradhar.tech:8080/api",
    Global: "https://sutradhar.tech:8082/api/global",
    sutraposAPIurl:'https://api.sutradhar.tech/sutrapos/api/v1',
    sutraposAPIurlTest:'http://103.151.97.157/sutrapos/api/v1',
    sutraposAPIurlTest1:'http://103.151.97.157/sutrapos1/api/v1',
    sutraposAPIurlTest2:'http://103.151.97.157/sutrapos2/api/v1',
    dev_URL:'http://dev.sutradhar.tech/sutrapos2/api/v1',
    axiosTimeout:5000,
    axiosLessTimeout:2000,
    // redeemAPIurl: 'https://blueocktopus.in/TestChitaleWebService/Service.asmx/BillQuick',
    redeemAPIurl: 'https://blueocktopus.in/ChitaleSDWebService/Service.asmx/Sutradhar',
    redeemHeader: {headers: {'Content-Type': 'application/x-www-form-urlencoded'}},
    AppShortName: "shg",
    axiosheaders:{
        'cache-control': 'no-cache',
        Accept: 'application/json',
        'Content-Type': 'application/json; charset=utf-8',
      },
    AppName: "PoS",
    isPreRegistered: true,
    initialTypes : [
      {type: 'Loading...', recno: 1},
    ],
    today : () => new Date().getFullYear().toString() + ('0'+(new Date().getMonth() + 1).toString()).slice(-2)+('0'+(new Date().getDate()).toString()).slice(-2),
    dateSendConvert:(date) => date.getFullYear().toString() + ('0'+(date.getMonth() + 1).toString()).slice(-2)+('0'+(date.getDate()).toString()).slice(-2),
    datetime: (today)=> ('0'+today.getDate()).slice(-2)+('0'+(today.getMonth() + 1).toString()).slice(-2)+today.getFullYear()+('0'+today.getHours()).slice(-2)+('0'+today.getMinutes()).slice(-2)+('0'+today.getSeconds()).slice(-2),
    now: ()=> {let now = new Date(); return ('0'+now.getHours()).slice(-2)+('0'+now.getMinutes()).slice(-2)+('0'+now.getSeconds()).slice(-2)},
    timeSendConvert: (now) =>('0'+now.getHours()).slice(-2)+('0'+now.getMinutes()).slice(-2)+('0'+now.getSeconds()).slice(-2),
    uom : {
      1: 'N',
      2: 'Set',
      3: 'Kg',
      4: 'Gms',
      5: 'tonn',
      6: 'quintal',
      7: 'Litres',
      8: 'ml',
      9: 'Meters',     
      10: 'Cms',
      11: 'Bundle',
    },
    tenantrecno:1,
    tenantCode:'CHITALE',
    getItemsFromSQLite: false,
    alwaysCreateTables: false,
    bypasslogin: false, // hide login page
    alwaysNewInstall: false,
    dataOverride: true, // data emp
    loginPageNetworkOverride: false, //network state false
    getItemsOverRide : true, // use hardcoded constants to fetch items data.
    alwaysGetItems: false,  // always get Items from Server.
}
export default AppConstants;