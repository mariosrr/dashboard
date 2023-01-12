import { PanoramaSharp, RemoveSharp } from '@material-ui/icons';
import e from 'cors';
import React from 'react'
import { useState } from 'react'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import "./nonConformitiesUpdate.css"
import { getAllAreas, getAllActions, getAllIncidenceTypes, getAllStatus, getAllUsersAuthorize, registerNonConformity, getNonConformity, updateNonConformity } from '../../context/nonConformitiesContext/apiCalls';
import { useForm, Controller } from "react-hook-form";
import { useEffect } from 'react';
import axios from "axios";
import { useRef } from 'react';
import { useSearchParams } from "react-router-dom";
import useBreadcrumbs from 'use-react-router-breadcrumbs';



function NonConformitiesUpdate() {

    const [ncId, setNcId] = useState("");
    const [area, setArea] = useState([]);
    const [areaId, setAreaId] = useState("");
    const [fecha, setFecha] = useState(new Date());
    const [tipoPedimento, setTipoPedimento] = useState("0");
    const [referencia, setReferencia] = useState("");
    const [cliente, setCliente] = useState("0");
    const [pedimentoOriginal, setPedimentoOriginal] = useState("");
    const [pedimentoR1, setPedimentoR1] = useState("");
    const [tipoOperacion, setTipoOperacion] = useState("0");
    const [remesa, setRemesa] = useState("");
    const [incidencia, setIncidencia] = useState([]);
    const [incidenciaId, setIncidenciaId] = useState("");
    const [montoPagado, setMontoPagado] = useState("45644.23")
    const [responsable, setResponsable] = useState("");
    const [moneda, setMoneda] = useState("");
    const [detalle, setDetalle] = useState("");
    const [planAccion, setPlanAccion] = useState("0");
    const [responsableAutorizacion, setResponsableAutorizacion] = useState("");
    const [accionPreventiva, setAccionPreventiva] = useState("");
    const [reviso, setReviso] = useState("");
    const [autorizo, setAutorizo] = useState([]);
    const [autorizoId, setAutorizoId] = useState("");
    const [accion, setAccion] = useState([]);
    const [accionId, setAccionId] = useState("");
    const [status, setStatus] = useState([]);
    const [errorRequest, setErrorRequest] = useState(false);
    const [searchParamsState, setSearchParamsState] = useState("");
    const [statusNc, setStatusNc] = useState("");
    //const areaIdRef = useRef(null);

    //React Hook Form
    const { register, control, formState: { errors, isSubmitSuccessful }, handleSubmit, reset } = useForm({
        defaultValues: {
            areaId: ""
            //to investigate
        }
    });



    const onSubmit = (data, event) => {
        console.log(data);
        console.log(event);

        setStatusNc("Nueva");
        const updateResult = updateNonConformity(data, ncId)
            .then(() => {
                window.alert("Actualizacion exitosa!!!")
                console.log("updateResult es: " + updateResult)
                reset({
                    areaId: "",
                    referencia: "",
                    fecha: new Date(),
                    tipoPedimento: "",
                    cliente: "",
                    pedimentoOriginal: "",
                    pedimentoR1: "",
                    tipoOperacion: "",
                    remesa: "",
                    incidenciaId: "",
                    responsable: "",
                    moneda: "",
                    detalle: "",
                    planAccion: "",
                    responsableAutorizacion: "",
                    accionPreventiva: "",
                    reviso: "",
                    autorizoId: "",
                    accionId: ""
                });
                //console.log(event);
                setAreaId("");
                setFecha(new Date());
                setTipoPedimento("");
                setReferencia("");
                setCliente("");
                setPedimentoOriginal("");
                setPedimentoR1("");
                setTipoOperacion("");
                setRemesa("");
                setIncidenciaId("");
                setResponsable("");
                setMoneda("");
                setDetalle("");
                setPlanAccion("");
                setResponsableAutorizacion("");
                setAccionPreventiva("");
                setReviso("");
                setAutorizoId("");
                setAccionId("");
                setStatusNc("");
            })
    }

    const onError = () => {
        console.log("Error");
    }

    useEffect(() => {
        reset({
            data: 'test'
        })
    }, [isSubmitSuccessful])


    useEffect(() => {
        console.log("Effecto " + areaId);

        async function fetchAreas() {
            const response = await getAllAreas();
            console.log(response);
            response.errors ? setErrorRequest(true) : setArea(response);

        }

        async function fetchActions() {
            const response = await getAllActions();
            console.log(response);
            response.errors ? setErrorRequest(true) : setAccion(response);
        }

        async function fetchIncidenceTypes() {
            const response = await getAllIncidenceTypes();
            console.log(response);
            response.errors ? setErrorRequest(true) : setIncidencia(response);
        }

        async function fetchStatus() {
            const response = await getAllStatus();
            console.log(response);
            response.errors ? setErrorRequest(true) : setStatus(response);
        }

        async function fetchUserAuthorize() {
            const response = await getAllUsersAuthorize();
            console.log(response);
            response.errors ? setErrorRequest(true) : setAutorizo(response);
        }

        fetchAreas();
        fetchActions();
        fetchIncidenceTypes();
        fetchStatus();
        fetchUserAuthorize();

        const searchParams = new URLSearchParams(window.location.search);

        async function fetchNonConformity(ncId) {

            const nonConformity = await getNonConformity(ncId);

            console.log("Paramsss: " + searchParams.get("ncId"));
            console.log("The NC: " + nonConformity._id);
            console.log("Full NC:" + JSON.stringify(nonConformity, null, 2))

            setNcId(searchParams.get("ncId"));
            setReferencia(nonConformity.referencia);
            setAreaId(nonConformity.area);
            setFecha(nonConformity.fecha);
            setTipoPedimento(nonConformity.tipoPedimento);
            setCliente(nonConformity.cliente);
            setPedimentoOriginal(nonConformity.pedimentoOriginal);
            setPedimentoR1(nonConformity.pedimentoR1);
            setTipoOperacion(nonConformity.tipoOperacion);
            setRemesa(nonConformity.remesa);
            setIncidenciaId(nonConformity.incidencia);
            setResponsable(nonConformity.responsable);
            setMoneda(nonConformity.moneda);
            setDetalle(nonConformity.detalle);
            setPlanAccion(nonConformity.planAccion);
            setResponsableAutorizacion(nonConformity.responsableAutorizacion);
            setAccionPreventiva(nonConformity.accionPreventiva);
            setReviso(nonConformity.reviso);
            setAutorizoId(nonConformity.autorizo);
            setStatusNc(nonConformity.statusNc);
            setAccionId(nonConformity.accion);
            /*
            setAccionId("");
            */
        }

        if (searchParams.get("ncId")) {
            fetchNonConformity(searchParams.get("ncId"));
        }


    }, []);


    return (
        <div className="moduleContainer">

            <div className='breadCrumb'>
                <a href="/nonConformitiesList">Lista No Conformidades</a> &gt; Edici&oacute;n No Conformidades
            </div>


            <h1 className='titleContent'>No Conformidades</h1>


            <form className='areaForm' onSubmit={handleSubmit(onSubmit, onError)}>

                <div className="formInput">
                    <label htmlFor="areaId">Area/Producto:</label>
                    <select {...register("areaId", { required: true })} value={areaId} placeholder='Seleccione Area' name="areaId" id="areaId" onChange={(e) => setAreaId(e.target.value)}>
                        <option value="">Seleccione Area</option>
                        {area.map((item) => (
                            <option key={item.id} value={item.desc}>{item.desc}</option>
                        ))}

                    </select>
                    {errors.areaId && <p className='formErrorMessage'>Indicar Area</p>}
                    {errorRequest && <p className='formErrorMessage'>Error en Area</p>}
                </div>

                <div className='formInput'>
                    <label>Fecha:</label>
                    <Controller rules={{ required: true }} control={control} name="DatePicker" render={({ field: { onChange, value } }) => (
                        <DatePicker wrapperClassName='fechaDatePicker' label="Fecha" selected={value} onChange={onChange} />)}
                    />
                    {errors.DatePicker && <p className='formErrorMessage'>Indicar Fecha</p>}
                </div>


                <div className="formInput">
                    <label htmlFor='referencia'>Referencia:</label>
                    <input {...register("referencia", { required: true })} value={referencia} type="text" name='referencia' id='referencia' onChange={(e) => setReferencia(e.target.value)} />
                    {errors.referencia && <p className='formErrorMessage'>Indicar Referencia</p>}
                </div>



                <div className="formInput">
                    <label htmlFor="tipoPedimento">Tipo Pedimento:</label>
                    <select {...register("tipoPedimento")} value={tipoPedimento} placeholder='Seleccione Area' name="tipoPedimento" id="tipoPedimento" onChange={(e) => setTipoPedimento(e.target.value)}>
                        <option value="0">Seleccione Tipo Pedimento</option>

                        <option value="individual">Individual</option>
                        <option value="consolidado">Consolidado</option>
                    </select>
                </div>
                <div className="formInput">
                    <label htmlFor="cliente">Cliente:</label>
                    <select {...register("cliente")} value={cliente} placeholder='Seleccione Cliente' name="cliente" id="cliente" onChange={(e) => setCliente(e.target.value)}>
                        <option value="0">Seleccione Cliente</option>
                        <option value="Varroc">Varroc</option>
                        <option value="Weigand">Weigand</option>
                        <option value="Nortek">Nortek</option>
                    </select>
                </div>

                <div className="formInput">
                    <label htmlFor='pedimentoOriginal'>Pedimento Original:</label>
                    <input {...register("pedimentoOriginal")} value={pedimentoOriginal} type="text" name='pedimentoOriginal' id='pedimentoOriginal' onChange={(e) => setPedimentoOriginal(e.target.value)} />
                </div>

                <div className="formInput">
                    <label htmlFor='pedimentoR1'>Pedimento R1:</label>
                    <input {...register("pedimentoR1")} value={pedimentoR1} type="text" name='pedimentoR1' id='pedimentoR1' onChange={(e) => setPedimentoR1(e.target.value)} />
                </div>

                <div className="formInput">
                    <label htmlFor="tipoOperacion">Tipo de Operacion:</label>
                    <select {...register("tipoOperacion")} value={tipoOperacion} placeholder='Seleccione Tipo Operacion' name="tipoOperacion" id="tipoOperacion" onChange={(e) => setTipoOperacion(e.target.value)}>
                        <option value="0">Seleccione Tipo Operacion</option>
                        <option value="Importacion">Importacion</option>
                        <option value="Exportacion">Exportacion</option>
                    </select>
                </div>

                <div className="formInput">
                    <label htmlFor='remesa'>Remesa:</label>
                    <input {...register("remesa")} value={remesa} type="text" placeholder='Remesa' name='remesa' id='remesa' onChange={(e) => setRemesa(e.target.value)} />
                </div>



                <div className="formInput">
                    <label htmlFor="incidenciaId">Incidencia:</label>
                    <select {...register("incidenciaId")} value={incidenciaId} placeholder='Seleccione Incidencia' name="incidenciaId" id="incidenciaId" onChange={(e) => setIncidenciaId(e.target.value)}>
                        <option value="0">Seleccione Incidencia</option>
                        {incidencia.map((item) => (
                            <option key={item.id} value={item.desc}>{item.desc}</option>
                        ))}
                    </select>
                </div>

                <div className="formInput">
                    <label htmlFor='montoPagado'>Monto Pagado:</label>
                    <span name="montoPagado" id='montoPagado'>${montoPagado}</span>

                </div>

                <div className="formInput">
                    <label htmlFor="responsable">Responsable:</label>
                    <select {...register("responsable")} value={responsable} placeholder='Seleccione Responsable' name="responsable" id="responsable" onChange={(e) => setResponsable(e.target.value)}>
                        <option value="0">Seleccione Responsable</option>
                        <option value="Responsable 1">Responsable 1</option>
                        <option value="Responsable 2">Responsable 2</option>
                    </select>
                </div>
                <div className="formInput">
                    <label htmlFor="moneda">Moneda:</label>
                    <select {...register("moneda")} value={moneda} placeholder='Seleccione Moneda' name="moneda" id="moneda" onChange={(e) => setMoneda(e.target.value)}>
                        <option value="0">Seleccione Moneda</option>
                        <option value="MXN">MXN</option>
                        <option value="USD">USD</option>
                    </select>
                </div>

                <div className="formInput">
                    <label htmlFor='detalle'>Detalle:</label>
                    <input {...register("detalle")} value={detalle} type="text" placeholder='Detalle' name='detalle' id='detalle' onChange={(e) => setDetalle(e.target.value)} />
                </div>

                <div className="formInput">
                    <label htmlFor="accionId">Accion:</label>
                    <select {...register("accionId")} value={accionId} placeholder='Seleccione Accion' name="accionId" id="accionId" onChange={(e) => setAccionId(e.target.value)}>
                        <option value="0">Seleccione Accion</option>
                        {accion.map((item) => (
                            <option key={item.id} value={item.desc}>{item.desc}</option>
                        ))}
                    </select>
                </div>

                <div className="formInput">
                    <label htmlFor="responsableAutorizacion">Responsable Autorizaci&oacute;n:</label>
                    <select {...register("responsableAutorizacion")} value={responsableAutorizacion} placeholder='Seleccione Responsable' name="responsableAutorizacion" id="responsableAutorizacion" onChange={(e) => setResponsableAutorizacion(e.target.value)}>
                        <option value="0">Seleccione Responsable</option>
                        <option value="Responsable 1">Responsable 1</option>
                        <option value="Responsable 2">Responsable 2</option>
                    </select>
                </div>

                <div className="formInput">
                    <label htmlFor='planAccion'>Plan de Acci&oacute;n:</label>
                    <input {...register("planAccion")} value={planAccion} type="text" placeholder='Plan de Acci&oacute;n' name='planAccion' id='planAccion' onChange={(e) => setPlanAccion(e.target.value)} />
                </div>


                <div className="formInput">
                    <label htmlFor='accionPreventiva'>Acci&oacute;n Preventiva</label>
                    <input {...register("accionPreventiva")} value={accionPreventiva} type="text" placeholder='Acci&oacute;n Preventiva' name='accionPreventiva' id='accionPreventiva' onChange={(e) => setAccionPreventiva(e.target.value)} />
                </div>

                <div className="formInput">
                    <label htmlFor="reviso">Revis&oacute;:</label>
                    <select {...register("reviso")} value={reviso} placeholder='Seleccione Revis&oacute;' name="reviso" id="reviso" onChange={(e) => setReviso(e.target.value)}>
                        <option value="0">Seleccione Revis&oacute;</option>
                        <option value="Revisa 1">Revisa 1</option>
                        <option value="Revisa 2">Revisa 2</option>
                    </select>
                </div>

                <div className="formInput">
                    <label htmlFor="autorizoId">Autoriz&oacute;:</label>
                    <select {...register("autorizoId")} value={autorizoId} placeholder='Seleccione Autoriz&oacute;' name="autorizoId" id="autorizoId" onChange={(e) => setAutorizoId(e.target.value)}>
                        <option value="0">Seleccione Autoriz&oacute;</option>
                        {autorizo.map((item) => (
                            <option key={item.id} value={item.name + " " + item.lastname}>{item.name + " " + item.lastname}</option>
                        ))}
                    </select>
                </div>

                <input type="hidden" id="statusNc" name="statusNc" value={statusNc} onChange={(e) => setStatusNc(e.target.value)} />

                <input type="submit" />
            </form>

        </div>




    )
}

export default NonConformitiesUpdate