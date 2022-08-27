let defaultCity = '长沙'
try {
    if (localStorage.city) {
        defaultCity = localStorage.city
    }
} catch (error) {

}

export default {
    city: defaultCity
}