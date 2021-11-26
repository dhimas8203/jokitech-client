import React, { useEffect, useState } from 'react'
import { BiSearchAlt } from "react-icons/bi";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import useFetch from '../../Component/UseFetch'
import ListJasaPost from '../../Component/ListJasaPost';
import { Link } from "react-router-dom";
import axios from 'axios'
import Cookies from 'universal-cookie';
import '../../asset/CSS/AdminJasa.css'
import ListJasaAdmin from '../../Component/ListJasaAdmin';

const AdminJasa = () => {
    const [data, setData] = useState(null)
    const [load, setLoad] = useState(true)
    const [search, setSearch] = useState("")
    const cookies = new Cookies()

    useEffect(() => {
        axios.get("https://jokitech.herokuapp.com/api/v1/jasas/getAll")
            .then((res) => {
                console.log(res)
                setData(res.data)
                setLoad(false)
            })

    }, [])
    
    return (
        <div className="admin-jasa">
            <div className="search">
                <BiSearchAlt size='14px' color="#772525" />
                <input 
                    type="text" 
                    value= {search}
                    onChange= {(e) => setSearch(e.target.value)}
                    placeholder="Search Posting..." 
                />
            </div>

            <div className="listJasa">
                {load && <h4>LOADING</h4>}

                {data && <ListJasaAdmin data={data} search={search} />}
            </div>
        </div>
    )
}

export default AdminJasa
