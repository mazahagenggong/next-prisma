import React, {useEffect, useState} from 'react';
import useSWR from "swr";

const fetcher = (url: any) => fetch(url).then((res) => res.json());
const ClientInfo = () => {
    const [clientInfo, setClientInfo] = useState<any>({});
    const [ready, setReady] = useState<boolean>(false);
    const { data: ip } = useSWR(
        "https://api.ipify.org/?format=json",
        fetcher
    );
    const { data } = useSWR(
        ready ? `https://api.userparser.com/1.1/detect?ip=${ip.ip}&ua=${navigator.userAgent}&api_key=c91bc3c75bbb67196402646439eb802c3664b3be05a323122d` : null,
        fetcher
    );
    const { data: user } = useSWR(
        `https://api.ipgeolocation.io/ipgeo?apiKey=3fd60133bd0d4bab91930dc2e1d22ae6`,
        fetcher
    );
    useEffect(() => {
        if (typeof window !== 'undefined') {
            if (ip) {
                setReady(true);
            }
        }
    }, [ip]);
    console.log(user);
    if (data && user) return (
        <>
            <div className="table-title">
                <center>
                    <h3>Client Info</h3>
                </center>
            </div>
            <table className="table-fill">
                <thead>
                <tr>
                    <th className="text-left">#</th>
                    <th className="text-left">Info</th>
                </tr>
                </thead>
                <tbody className="table-hover">
                <tr>
                    <td className="text-left">Browser</td>
                    <td className="text-left">{`${data.browser.name} (${data.browser.version})`}</td>
                </tr>
                <tr>
                    <td className="text-left">Engine</td>
                    <td className="text-left">{`${data.browser.engine}`}</td>
                </tr>
                <tr>
                    <td className="text-left">OS</td>
                    <td className="text-left">{`${data.operatingSystem.name} (${data.operatingSystem.version ?? "-"})`}</td>
                </tr>
                <tr>
                    <td className="text-left">Engine</td>
                    <td className="text-left">{`${data.browser.engine}`}</td>
                </tr>
                </tbody>
            </table>
            <div className="table-title">
                <center>
                    <h3>Devices Info</h3>
                </center>
            </div>
            <table className="table-fill">
                <thead>
                <tr>
                    <th className="text-left">#</th>
                    <th className="text-left">Info</th>
                </tr>
                </thead>
                <tbody className="table-hover">
                <tr>
                    <td className="text-left">Brand</td>
                    <td className="text-left">{`${data.device.brand ?? "-"}`}</td>
                </tr>
                <tr>
                    <td className="text-left">Tipe</td>
                    <td className="text-left">{`${data.device.type}`}</td>
                </tr>
                <tr>
                    <td className="text-left">TouchScreen</td>
                    <td className="text-left">{`${data.device.isTouchScreen ? "Ya" : "Tidak"}`}</td>
                </tr>
                <tr>
                    <td className="text-left">Browser</td>
                    <td className="text-left">{`${data.browser.name} (${data.browser.version})`}</td>
                </tr>
                <tr>
                    <td className="text-left">Engine</td>
                    <td className="text-left">{`${data.browser.engine}`}</td>
                </tr>
                <tr>
                    <td className="text-left">OS</td>
                    <td className="text-left">{`${data.operatingSystem.name} (${data.operatingSystem.version ?? "-"})`}</td>
                </tr>
                </tbody>
            </table>
        </>
    )
        ;
};

export default ClientInfo;