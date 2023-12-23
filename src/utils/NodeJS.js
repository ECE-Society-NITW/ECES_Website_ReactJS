const URL = "http://localhost:5000"
// const URL = "https://eceswebsitenodejs-production.up.railway.app"

const NodeJS = {
    'POST': async (route,payload) => {
        try {
            const res = await fetch(URL+route, {
                method:'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            })
            const data = await res.json()
            return data;
        }
        catch (err) {
            console.log(err)
        }
    },
    'GET': async (route,payload) => {

        try {
            const res = await fetch(URL+route)
            const data = await res.json()
            return data;
        }
        catch (err) {
            console.log(err)
        }
    }
}

module.exports = NodeJS