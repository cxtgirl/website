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
<br><a href="https://www.bu.edu/" target="_blank" title="waow what could this be">BU</a> class of 2029, majoring in astronomy & physics (waow space)
<br>my current time is ${mytime}!
<br>in my free time, I like to eat, sleep, and torture myself in various games.
<br>burger enjoyer... they're so tasty!!! also I'm extremely fond of salmon sushi.
<br>currently, I'm learning how to create this website! you can find more information in the <a href="siteinfo.html" title="site info!">site info</a> section.`

}

time();
setInterval(time, 1000);
