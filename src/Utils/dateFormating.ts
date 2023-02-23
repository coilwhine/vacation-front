export function dateFormater(date: string) {

    const day = new Date(Date.parse(date)).getUTCDate() + 1;
    const month = new Date(Date.parse(date)).getMonth() + 1;
    const year = new Date(Date.parse(date)).getFullYear();
    const formatedDate = `${day}.${month}.${year}`;

    return formatedDate.toString()
}