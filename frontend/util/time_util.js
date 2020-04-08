export const convertDate = (eventDate) => {
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

    let fullDate = new Date(eventDate);
    let day = days[fullDate.getDay()];
    let month = months[fullDate.getMonth()];
    let date = fullDate.getDate() + 1;
    let yr = fullDate.getFullYear();

    let combined = `${day}, ${month} ${date}, ${yr}`;
    return combined;
};