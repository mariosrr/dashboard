import "./userList.css"
import { DataGrid } from '@material-ui/data-grid'
import { DeleteOutline } from "@material-ui/icons";
import {pedimentRows} from "../../dummyData"
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
//import xml2js from "xml2js";
import XMLParser from 'react-xml-parser';


export default function UserList() {   

  const [data, setData] = useState([]); 
  const [isLoaded, setIsLoaded] = useState(false);
  const [counter, setCounter] = useState(0);
  const [binaryData, setBinaryData] = useState("");
  //getUser();
  
  
  useEffect(() =>{
    const getEntries = async () => {
    try{
      const res = await axios.get("https://wisdomback.herokuapp.com/entries");
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


/*
  useEffect(() =>{
    const getEntries = async () => {
    try{

      let xmls='<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">\
            <soap:Body>\
              <getBytesReferenciaDoctoN xmlns="http://op-cbs.com/webservices/" >\
                <sToken>a18d5d2baf1d3cdcdf0f11cc75e44666</sToken>\
                <sRef>2WIE07683</sRef>\
                <sTipoDoc>D322</sTipoDoc>\
              </getBytesReferenciaDoctoN >\
            </soap:Body>\
          </soap:Envelope>';

      const res = await axios.post('https://private-cors-server.herokuapp.com/https://wisdom.op-cloud.net/slamdigital4/wsexpedientedigital.asmx',
           xmls,
           {headers:
             {'Content-Type': 'text/xml',
              'SOAPAction' : "http://op-cbs.com/webservices/getBytesReferenciaDoctoN",
              'HOST': 'wisdom.op-cloud.net'
            }
           }).then(res=>{
             var xml = new XMLParser().parseFromString(res.data); 
             //result = xml.getElementsByTagName('getBytesReferenciaDoctoNResult');
             //doctoBytes = result[0];
             setBinaryData(JSON.parse(xml.getElementsByTagName('getBytesReferenciaDoctoNResult')[0].value)[0].DocBytes);
             console.log(JSON.parse(xml.getElementsByTagName('getBytesReferenciaDoctoNResult')[0].value)[0].DocBytes);
             //console.log(xml);
           }).catch(err=>{console.log(err)});

      //const res = await axios.get("/entries");
      //console.log(res.data);
      //setData(res.data);
      //setIsLoaded(true);
    }
    
    catch(err){
      console.log(err);
    }
  }
  
   getEntries();  
  
  }, []);

  //getEntries();

/*
  async function getUser() {
    try {
      const res = await axios.get('/entries');
      
      setData(res.data);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
    
  }

 */

 

    const handleDelete = (Cliente_id) =>{
        setData(data.filter((item) => item.Cliente_id !== Cliente_id))
    };

    const postRowStyle = (params) => {
      console.log(params);
      return params.id >= 5 ? 'rowOrange' : 'rowGreen'
      
  };

    const columns = [
        { field: 'Cliente_id', headerName: 'ID', width: 50 },
        {
          field: 'CLITIPO_FACTURACION',
          headerName: 'Tipo Facturacion',
          width: 200,
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
          description: 'This column has a value getter and is not sortable.',
          sortable: false,
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
        getRowClassName={postRowStyle}
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={50}
        rowsPerPageOptions={[5]}
        rowHeight={30}
        checkboxSelection
        disableSelectionOnClick
        getRowId={(row) => row.Cliente_id}
        

      />

  </div>
 
  

  )
}
