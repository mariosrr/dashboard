import "./dailyOperations.css"
import { DataGrid, GridToolbar, GridToolbarContainer, GridToolbarExport } from '@material-ui/data-grid'
import { DeleteOutline } from "@material-ui/icons";
import {pedimentRows} from "../../dummyData"
import { Link } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
//import xml2js from "xml2js";
import XMLParser from 'react-xml-parser';
import { AuthContext } from '../../context/authContext/AuthContext';

export default function DailyOperations() {

  const [data, setData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [counter, setCounter] = useState(0);
  const [binaryData, setBinaryData] = useState("");
  const {user} = useContext(AuthContext);
  //getUser();
  
  function CustomToolbar() {
    return (
      <GridToolbarContainer>
        <GridToolbarExport />
      </GridToolbarContainer>
    );
  }
  
  useEffect(() =>{
    const getEntries = async () => {
    try{
      const res = await axios.get("http://localhost:3300/entries?customer=" + user.customer);
      console.log(res.data);
      setData(res.data);
      setIsLoaded(true);
    }
    
    catch(err){
      console.log(err);
    }
  }
  
   getEntries();  
  
  }, []);

    const handleDelete = (Cliente_id) =>{
        setData(data.filter((item) => item.Cliente_id !== Cliente_id))
    };

    const columns = [
        { field: 'Cliente_id', headerName: 'ID', width: 90 },
        {
          field: 'CLITIPO_FACTURACION',
          headerName: 'Tipo Facturacion',
          width: 150,
          editable: true,
        },
        {
          field: 'Nom',
          headerName: 'Customer Name',
          width: 200,
          editable: true,
        },
        {
          field: 'RFC',
          headerName: 'RFC',
          width: 200,
          editable: true,
        },
        {
          field: 'Fecha',
          headerName: 'Date Created',
          description: 'The date in which the Client was created.',
          sortable: true,
          width: 200,
          
        },

          {
              field:"action",
              headerName: "Action",
              width: 150,
              renderCell: (params) => {
                  return (
                    <>
                        <Link to={"/pediment/"+ params.row.Cliente_id}>
                            <button className="userListEdit">Edit</button>
                        </Link>
                        
                        <DeleteOutline className="userListDelete" onClick={()=>handleDelete(params.row.Cliente_id)} />
                    </>
                  )
              }
          }
  
      ];
      

  return (
  
  <div className="userList">

{
  /*
<object 
style={{width: '100%', height: '200pt'}} 
type="application/pdf" 
data={'data:application/pdf;base64,'+binaryData}></object>
*/
}

      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        getRowId={(row) => row.Cliente_id}
        components={{Toolbar : CustomToolbar}}
        

      />

  </div>

  

  )
}
