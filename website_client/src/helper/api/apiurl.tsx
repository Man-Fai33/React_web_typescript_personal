import Config from "../../context/config";

const Host = Config.url

export const Url = {
     user: (Host + '/user'),
     Upload: (Host + '/upload')
}