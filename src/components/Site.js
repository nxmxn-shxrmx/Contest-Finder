import Styles from './Site.module.css'

import Toph from './img/topco.png'
import Kick_Start from './img/kick_start.png'
import HackerEarth from './img/hackerearth.png'
import HackerRank from './img/hackerrank.jpeg'
import AtCoder from './img/atcoder.png'
import CodeChef from './img/codechef.png'
import CodeForces from './img/codeforces.webp'
import LeetCode from './img/leetcode.webp'
import TopCoder from './img/topcoder.png'
import CS_Academy from './img/cs_acedemy.png'

const Site = (prop) =>
{
    var sites  = {
        Toph:{img:Toph,link:'https://toph.co'},
        Kick_Start:{img:Kick_Start,link:'https://codingcompetitions.withgoogle.com/kickstart'},
        CS_Academy:{img:CS_Academy,link:'https://csacademy.com'},
        HackerRank:{img:HackerRank,link:'https://www.hackerrank.com/dashboard'},
        HackerEarth:{img:HackerEarth,link:'https://hackerearth.com'},
        AtCoder:{img:AtCoder,link:'https://atcoder.jp'},
        CodeChef:{img:CodeChef,link:'https://codechef.com'},
        LeetCode:{img:LeetCode,link:'https://leetcode.com'},
        CodeForces:{img:CodeForces,link:'https://codeforces.com'},
        TopCoder:{img:TopCoder,link:'https://topcoder.com'},
    }
    var u = prop.name.replaceAll(' ','_')
    if(u==='CodeForces::Gym')
        u = 'CodeForces';
    return (<a href={sites[u].link} target="_blank"><img src={sites[u].img}></img></a>)
}
export default Site

