export function timestampToDate(timestampSeconds) {
    let timestampMilliseconds = timestampSeconds * 1000;
    let date = new Date(timestampMilliseconds);
    let year = date.getFullYear();
    let month = String(date.getMonth() + 1).padStart(2, '0'); // 补齐月份的零
    let day = String(date.getDate()).padStart(2, '0'); // 补齐日期的零
    return `${year}-${month}-${day}`;
}