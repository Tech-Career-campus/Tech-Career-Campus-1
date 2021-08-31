const api = "https://newsapi.org/v2/top-headlines?country=il&category=technology&apiKey="
const api_key = "eacee67e305a4dab808bf7f4f527a643"

const token = localStorage.getItem("jwtToken");
export const defaultHeaders = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json"
}

export const fetchNewApi = () => {
    return fetch(`${api}${api_key}`)
        .then((res) => res.json())
        .then((response) => response)
        .catch(err => {
            console.error(err);
        });
}

export const fetchSyllabus = () => {
    const token = localStorage.getItem("jwtToken");
    const defaultHeaders = {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
    }
    return fetch('http://localhost:8080/api/course', { headers: defaultHeaders})
        .then((res) => res.json())
        .then((response) => response)
        .catch(err => {
            console.error(err);
        });
}

export const fetchDailySchedule = () => {
    return fetch('http://localhost:8080/api/schedule')
   .then((res) =>  res.json())
   .then((response) => response)
   .catch(err => console.log(err));
};