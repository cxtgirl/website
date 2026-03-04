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
const coindisplay = document.getElementById("coinflip");
let headcount = 0;
let tailcount = 0;

const ctx = document.getElementById('coinflipresults');
let cc = null;

if (ctx) {
    cc = new Chart(ctx, {
        type: 'pie',
        data: {
            datasets: [{
                data: [headcount, tailcount],
                backgroundColor: ['#3d5dff', '#3dffff'],
                borderWidth: 0,
                borderColor: 'transparent'
            }]
        },
        options: {
            responsive: true,
            animation: true,
            events: [],
            plugins: {
                legend: {
                    display: false
                }
            },
            elements: {
                arc: {
                    borderWidth: 0
                }
            },
            layout: {
                padding: 0
            }
        }
    });
}

if (coin2) {
        coin2.addEventListener("click", gamble);
}
function gamble() {
    const result = Math.random() < 0.5 ? "heads" : "tails";

    if (result === "heads") headcount++;
    else tailcount++;

    coindisplay.innerHTML = `
result: ${result}
<br>heads: ${headcount}
<br>tails: ${tailcount}
`;

    if (cc) {
        cc.data.datasets[0].data = [headcount, tailcount];
        cc.update();
    }
}