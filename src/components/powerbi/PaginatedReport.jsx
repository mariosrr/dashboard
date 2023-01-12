import "./powerbi.css"

export default function OperationsReport() {

    return (

        <div className="powerbi">
           <iframe width="800" height="600" src="https://app.powerbi.com/rdlEmbed?reportId=8e6d981d-1776-4e2f-b4ff-a2c79e581f44&autoAuth=true&ctid=5c913dc4-a3f3-454e-80e8-96c84e052a12" frameborder="0" allowFullScreen="true"></iframe>
            {/*<iframe title="PharmaBusiness - Page 1" width="1024" height="1060" src="https://app.powerbi.com/view?r=eyJrIjoiYTE3MzE3MjktN2M0Ny00Y2FmLTlkYjAtNjQzYzA1NDA0N2Y4IiwidCI6IjVjOTEzZGM0LWEzZjMtNDU0ZS04MGU4LTk2Yzg0ZTA1MmExMiJ9" frameborder="0" allowFullScreen="true"></iframe>*/}
        </div>


    )

}