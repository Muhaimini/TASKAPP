import axios, { AxiosInstance, AxiosResponse, AxiosError } from 'axios'


class Fetch {

    api: AxiosInstance
    props: any

    constructor(props?: any){
        this.props = props
        this.api = axios.create({
            baseURL: process.env.REACT_APP_BASE_URL,
            headers: { 
                "content-type": "application/json",
                "Authorization": `Client-ID ${process.env.REACT_APP_ACCESS_KEY}`
             }
        })
    }

    get = async (query: string) => {
        return this.api.get('', { params: { query }})
            .then((res: AxiosResponse) => Promise.resolve(res))
            .catch((err: AxiosError) => Promise.reject(err))
    }

}

export default Fetch