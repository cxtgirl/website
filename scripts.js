const timeElement = document.getElementById("time");
if (timeElement) {
    time();
    setInterval(time, 1000);
}
function time() {
    const d = new Date();

    const options = {
       timeZone: "America/New_York",
       hour: "numeric",
       minute: "2-digit",
       second: "2-digit",
    };
    const mytime = d.toLocaleTimeString("en-US", options)

    document.getElementById("time").innerHTML = `
uhhhhhhh hi! basically I'm catgirl mrrow mrrp :3333
<br>here are <a href="https://en.pronouns.page/@cxtgirl" target="_blank" title="pronounce">my pronouns</a> (woke)
<br><a href="https://www.bu.edu/" target="_blank" title="waow what could this be" >BU</a> class of 2029, majoring in astronomy & physics (waow space)
<br>my current time is ${mytime}!
<br>in my free time, I like to eat, sleep, and torture myself in various games.
<br>burger enjoyer... they're so tasty!!! also I'm extremely fond of salmon sushi.
<br>currently, I'm learning how to create this website! you can find more information in the <a href="siteinfo.html" title="site info!">site info</a> section.`

}

const coin2 = document.getElementById("coin");
const headbet = document.getElementById("betheads");
const tailbet = document.getElementById("bettails");
const coindisplay = document.getElementById("coinflip");
const betdisplay = document.getElementById("bet");
let headcount = 0;
let tailcount = 0;
let headbetstatus = true;
let guesscount = 0;
let totalcount = 0;
let betpercentage = 0;
let headpercent = 0;
let tailpercent = 0;

const ctx = document.getElementById('coinflipresults');
let cc = null;

if (headbet) {
        headbet.addEventListener("click", heads);
}

function heads() {
    headbetstatus = true;
    betdisplay.innerHTML = `current bet: heads`;
}

if (tailbet) {
        tailbet.addEventListener("click", tails);
}
function tails() {
    headbetstatus = false;
    betdisplay.innerHTML = `current bet: tails`;
}

if (ctx) {
    cc = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: [``],
            datasets: [
                {
                data: [headpercent],
                backgroundColor: ['#3d5dff'],
                borderWidth: 0,
                borderColor: 'transparent',
            },
            {
                data: [tailpercent],
                backgroundColor: ['#3dffff'],
                borderWidth: 0,
                borderColor: 'transparent',
            }
        ]
        },
        options: {
            maintainAspectRatio: false,
            indexAxis: `y`,
            responsive: false,
            animation: true,
            events: [],
            scales: {
                x: {
                    stacked: true,
                    max: 100,
                    ticks: {
                        display:false,
                    },
                    grid: {
                        display:false,
                    },
                    min: 0,
                },
                y: {
                    stacked: true,
                    ticks: {
                        display:false,
                    },
                    grid: {
                        display:false,
                    },
                    offset: false,
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    enabled: false
                }
            },
            layout: {
                padding: 0,
            },
            elements: {
                bar: {
                    barThickness: 50,
                }
            }
        }
    });
}

if (coin2) {
        coin2.addEventListener("click", gamble);
}
function gamble() {
    const result = Math.random() < 0.5 ? "heads" : "tails";

    if (result === "heads") {
        headcount++;
        if (headbetstatus === true) {
            guesscount++;
        }
    }
    else {
        tailcount++;
         if (headbetstatus === false) {
            guesscount++;
        }
    }
    totalcount = tailcount + headcount;
    tailpercent = (tailcount / totalcount) * 100;
    headpercent = (headcount / totalcount) * 100;
    const betpercentage = ((guesscount/totalcount)*100);
    const displaypercentage = betpercentage.toFixed(1);

    if (betpercentage < 45) {
        coindisplay.innerHTML = `
result: ${result}
<br>heads: ${headcount}, tails: ${tailcount}
<br>correct guesses: ${guesscount}/${totalcount} (${displaypercentage}%)
<br>wow u suck at gambling...
`;
    }
    else if (betpercentage > 55) {
        coindisplay.innerHTML = `
result: ${result}
<br>heads: ${headcount}, tails: ${tailcount}
<br>correct guesses: ${guesscount}/${totalcount} (${displaypercentage}%)
<br>waow u can gamble well!!!
`;
    }
    else {
        coindisplay.innerHTML = `
result: ${result}
<br>heads: ${headcount}, tails: ${tailcount}
<br>correct guesses: ${guesscount}/${totalcount} (${displaypercentage}%)
`;
}
    if (cc) {
        cc.data.datasets[0].data = [headpercent];
        cc.data.datasets[1].data = [tailpercent];
        cc.update();
    }
}