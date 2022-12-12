import { user, token } from "../variables";

export async function getTracking(code) {
    const url = `https://api.linketrack.com/track/json?user=${user}&token=${token}&codigo=${code}`
    const response = await fetch(url)
    const data = await response.json()

    return data
}