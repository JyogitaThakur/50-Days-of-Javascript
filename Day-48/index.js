//Number of days = ⌊ n / (24 * 3600) ⌋ 
// Number of Hours = ⌊ (n % (24 * 3600)) / 3600 ⌋ 
// Number of Minutes = ⌊ (n % (24 * 3600 * 3600)) / 60 ⌋ 
// Number of Seconds = ⌊ (n % (24 * 3600 * 3600 * 60)) / 60 ⌋

function formatDuration(seconds) {
    // your code here
    const second = Math.floor(seconds % 60);
    const minutes = Math.floor((seconds % 3600) / 60);
    const hours = Math.floor((seconds % (3600 * 24)) / 3600);
    const day = Math.floor(seconds / (3600 * 24));

    var hDisplay = hours > 0 ? hours + (hours == 1 ? " hour, " : " hours ") : "";
    var mDisplay = minutes > 0 ? minutes + (minutes == 1 ? " minute and " : " minutes and ") : "";
    var sDisplay = second > 0 ? second + (second == 1 ? " second" : " seconds") : "";
    return hDisplay + mDisplay + sDisplay;
  }
console.log(formatDuration(1))
console.log(formatDuration(62))
console.log(formatDuration(3662))



