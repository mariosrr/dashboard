import "./nonConformitiesList.css"
import { DataGrid, GridToolbar, GridToolbarContainer, GridToolbarExport } from '@material-ui/data-grid'
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { getAllNonConformities } from '../../context/nonConformitiesContext/apiCalls';
import { LineStyle, Timeline, TrendingUp, MailOutline, DataUsage, 
    GroupSharp, GroupOutlined, FiberManualRecord, WorkOutline, 
    LocalHospitalOutlined, Dashboard, Settings, AddCircle, ThumbDown } from "@material-ui/icons";


export default function NonConformitiesList() {

    const [data, setData] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [errorRequest, setErrorRequest] = useState(false);

    //getUser();


    useEffect(() => {



        async function fetchAllNonConformities() {

            const res = await getAllNonConformities();
            console.log(res);
            res.errors ? setErrorRequest(true) : setData(res);


        }

        fetchAllNonConformities();

    }, []);

    function CustomToolbar() {
        return (
            <GridToolbarContainer>

                <GridToolbar />
            </GridToolbarContainer>
        );
    }

    const handleDelete = (Cliente_id) => {
        setData(data.filter((item) => item.Cliente_id !== Cliente_id))
    };

    const postRowStyle = (params) => {
        console.log(params);
        //return params.id >= 5 ? 'rowOrange' : 'rowGreen'

    };

    const columns = [
        { field: '_id', headerName: 'ID', width: 200 },
        {

            field: 'area',
            headerName: 'Area',
            width: 200,
            editable: false,
        },
        {
            field: 'fecha',
            headerName: 'Fecha',
            width: 200,
            editable: false,
            type: "dateTime"
        },
        {
            field: 'tipoPedimento',
            headerName: 'Tipo Pedimento',
            width: 200,
            editable: false,
        },
        {
            field: 'referencia',
            headerName: 'Referencia',
            width: 200,
            editable: false,
        },
        {
            field: 'cliente',
            headerName: 'Cliente',
            description: 'This column has a value getter and is not sortable.',
            sortable: true,
            width: 200,

        },
        {
            field: 'pedimentoOriginal',
            headerName: 'Pedimento Original',
            description: 'This column has a value getter and is not sortable.',
            sortable: true,
            width: 200,

        },
        {
            field: 'pedimentoR1',
            headerName: 'Pedimento R1',
            description: 'This column has a value getter and is not sortable.',
            sortable: true,
            width: 200,

        },
        {
            field: 'tipoOperacion',
            headerName: 'Tipo Operaci&oacute;n',
            description: 'This column has a value getter and is not sortable.',
            sortable: true,
            width: 200,

        },
        {
            field: 'status',
            headerName: 'Status',
            description: 'Status of the Non Conformity',
            sortable: true,
            width: 100,
            renderCell: (params) => {
                return (
                    <>
                        <button className="nonConformityStatus">{params.row.status}</button>
                    </>
                )
            }

        },
        {
            field: 'remesa',
            headerName: 'Remesa',
            description: 'This column has a value getter and is not sortable.',
            sortable: true,
            width: 200,

        },
        {
            field: 'incidencia',
            headerName: 'Incidencia',
            description: 'This column has a value getter and is not sortable.',
            sortable: true,
            width: 200,

        },

        {
            field: 'responsable',
            headerName: 'Responsable',
            description: 'This column has a value getter and is not sortable.',
            sortable: true,
            width: 200,

        },
        {
            field: "action",
            headerName: "Action",
            width: 250,
            renderCell: (params) => {
                return (
                    <>
                        <a href={"http://localhost:3000/nonConformitiesUpdate?ncId=" + params.row._id}>
                            <button className="nonConformityEdit">Edit</button>
                        </a>
                        <a href={"http://localhost:8800/api/nonConformities/getPdf/" + params.row._id} rel="noreferrer" target="_blank">
                            <button className="nonConformityEdit">Get PDF</button>
                        </a>

                        <DeleteOutline className="nonConformityDelete" onClick={() => handleDelete(params.row._id)} />
                    </>
                )
            }
        }

    ];



    return (



        <div className="nonConformityList">

            <div>
                <h1 className="nonConformityTitle">Lista No Conformidades</h1>
            </div>

            <div className='breadCrumb'>
                <AddCircle className="iconContent" />
                <a href="/nonConformities">Nueva No Conformidad</a>
            </div>

            <DataGrid
                getRowClassName={postRowStyle}
                rows={data}
                disableSelectionOnClick
                columns={columns}
                pageSize={50}
                rowsPerPageOptions={[5]}
                rowHeight={30}
                checkboxSelection
                getRowId={(row) => row._id}
                components={{ Toolbar: CustomToolbar }}

            />

        </div>



    )
}
