export const DateTimeText = () => {
    const now = new Date(Date.now());

    // English month names
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    // English abbreviated weekday names
    const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    const weekdayText = weekdays[now.getDay()];
    const monthText = months[now.getMonth()];
    const day = now.getDate();
    const year = now.getFullYear();

    // 12-hour format with AM/PM
    let hour = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const ampm = hour >= 12 ? "PM" : "AM";
    hour = hour % 12;
    hour = hour === 0 ? 12 : hour;

    return (
        <div>
            {`${weekdayText}, ${monthText} ${day}, ${year} ${hour}:${minutes} ${ampm}`}
        </div>
    );
};

