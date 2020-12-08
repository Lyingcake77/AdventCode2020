import { observable, action, computed } from "mobx"
import { RootStore } from "./RootStore";

export default class AdventStore1{
  rootStore:RootStore;
  constructor(rootStore:RootStore){
    this.rootStore=rootStore;
  }
  
  @observable listResults =[
    1895,
    1602,
    1592,
    1714,
    1403,
    1766,
    1654,
    1771,
    1957,
    1533,
    1661,
    1761,
    1711,
    1869,
    1541,
    1595,
    1819,
    1735,
    1894,
    1316,
    1777,
    1450,
    1526,
    1888,
    1968,
    1877,
    1972,
    1988,
    1655,
    1369,
    1636,
    1453,
    1969,
    1239,
    1717,
    1444,
    1907,
    1682,
    1358,
    1706,
    1482,
    1852,
    1689,
    1905,
    1262,
    1956,
    770,
    1507,
    1314,
    1890,
    784,
    1710,
    1418,
    597,
    1417,
    1587,
    2003,
    1889,
    879,
    1534,
    279,
    1302,
    1976,
    1936,
    1590,
    1939,
    1489,
    1966,
    1238,
    1481,
    1412,
    1675,
    2001,
    1543,
    1220,
    1352,
    1536,
    1879,
    1892,
    2006,
    1642,
    1321,
    1600,
    1908,
    2009,
    1784,
    1260,
    1881,
    1897,
    1933,
    1048,
    1851,
    2005,
    1626,
    1441,
    1945,
    1742,
    1734,
    1816,
    1919,
    1802,
    1460,
    1845,
    1914,
    1652,
    1943,
    1521,
    1830,
    1477,
    1866,
    1702,
    1629,
    1932,
    1671,
    1707,
    1577,
    1962,
    1518,
    1989,
    1502,
    61,
    1546,
    1264,
    1651,
    2000,
    1443,
    1931,
    1882,
    1583,
    1597,
    1487,
    1255,
    1779,
    1782,
    1540,
    1580,
    1294,
    1691,
    1337,
    1743,
    1632,
    1348,
    2010,
    1794,
    1876,
    1808,
    1647,
    422,
    1994,
    1864,
    1996,
    1738,
    1998,
    1749,
    1789,
    1395,
    1997,
    1440,
    1676,
    1527,
    1523,
    1836,
    1366,
    1700,
    1826,
    1426,
    1709,
    166,
    1958,
    1909,
    1428,
    1984,
    521,
    1760,
    156,
    1296,
    1475,
    1566,
    1573,
    1696,
    1471,
    1788,
    1809,
    1942,
    1461,
    1559,
    1699,
    1504,
    1465,
    1658,
    1973,
    1679,
    1376,
    1985,
    1503,
    1517,
    1825,
    1847,
    1528,
    1246
  ]


  @observable val1=0;
  @observable val2=0;
  @observable val3=0;


  @observable resultA=0;
  
  @observable resultB=0;

  @action YearFinder = ()=>{
    

    this.listResults.map(
      (value, index, array)=>{    
        
        array.map(
          (value2, index2, array2)=>{
            if((index!=index2) && ((value+value2)==2020)){
              this.val1=value;
              this.val2=value2;

              this.resultA = value*value2;
              console.log(this.resultA);
              return this.resultA;
            };
          });
          return this.resultA;
      });

  }


  @action YearFinder2 = ()=>{
  
    this.listResults.map(
      (value, index, array)=>{    
        
        array.map(
          (value2, index2, array2)=>{

            array2.map(            
              (value3, index3, array3)=>{
                if((index!=index2) && (index2!=index3) && (index!=index3) && ((value+value2+value3)==2020)
                  
                  ){
                    this.val1=value;
                    this.val2=value2;
                    this.val3=value3;
      
                    this.resultB = value*value2*value3;
                    console.log(this.resultB);
                    return this.resultB;
                  };

            });
          });
          return this.resultB;
      });

  }

  @action Day1B = () =>{
    var a;
    var b;
    var c;

    this.listResults=this.listResults.sort(function(a, b){return a-b});
    
    this.listResults.some(
      (value, index, array)=>{
        var L=index+1;
        var R = this.listResults.length-1;

        var i = [1,2,3,4,5,5,6,7,8]
        while(L<R){
          
          var temp=value+array[L]+array[R]
          
          if(temp<2020){
            L+=1;
          }
          else if(temp>2020){
            R-=1;
          }
          else if(temp===2020){
            a=array[L];
            b=array[R];
            c=value;
            this.resultB=a*b*c;
            console.log(this.resultB)
            //break;
            return this.resultB;
          }

        }
        
      });
  }

}

// decorate(AdventStore1,{
//   test: action,
//   observerValues:observable
//   });
