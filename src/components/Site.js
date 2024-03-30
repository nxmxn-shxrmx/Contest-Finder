import Styles from './Site.module.css'
import Coding_Ninja from './img/codingninjas_com_codestudio.png'
import Toph from './img/topco.png'
import Kick_Start from './img/kick_start.png'
import GFG from './img/gfg.png'
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
        codingninjascomcodestudio:{img:Coding_Ninja,link:'https://codingninjas.com'},
        geeksforgeeksorg:{img:GFG,link:'https://geeksforgeeks.org'},
        // Kick_Start:{img:Kick_Start,link:'https://codingcompetitions.withgoogle.com/kickstart'},
        // CS_Academy:{img:CS_Academy,link:'https://csacademy.com'},
        hackerrankcom:{img:HackerRank,link:'https://www.hackerrank.com/dashboard'},
        // HackerEarth:{img:HackerEarth,link:'https://hackerearth.com'},
        atcoderjp:{img:AtCoder,link:'https://atcoder.jp'},
        codechefcom:{img:CodeChef,link:'https://codechef.com'},
        leetcodecom:{img:LeetCode,link:'https://leetcode.com'},
        codeforcescom:{img:CodeForces,link:'https://codeforces.com'},
        topcodercom:{img:TopCoder,link:'https://topcoder.com'},
    }
    var u = prop.name.replaceAll(' ','_')
    u = u.replaceAll('.','')
    u = u.replaceAll('/','')
    if(u==='CodeForces::Gym')
        u = 'CodeForces';
    return (<a href={sites[u].link} target="_blank"><img src={sites[u].img}></img></a>)
}
export default Site

