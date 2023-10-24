import * as cd from 'cloudinary';

const cloud_name = process.env.CD_NAME ?? "";
const api_key = process.env.CD_API_KEY ?? "";
const api_secret = process.env.CD_SECRET ?? "";
cd.v2.config({
    cloud_name,
    api_key,
    api_secret,
    secure: true,
});

const cloudinary = cd.v2;
export default cloudinary;
