import axios from "axios";

axios.defaults.baseURL = "http://127.0.0.1:8800"

export const registerNonConformity = async (nonConformity) => {
    //dispatch(loginStart());
    try{
        //const res = await axios.post("https://wisdomconnect.herokuapp.com/api/auth/login", nonConformity);
        const res = await axios.post("/api/nonConformities/register", nonConformity)
        return 1;

        //res.data.isAdmin && dispatch(loginSuccess(res.data));
        
        //dispatch(loginSuccess(res.data));
    }catch(err){
        //dispatch(loginFailure());
        console.log(err);
        return 0;
    }
}

export const updateNonConformity = async (nonConformity, ncId) => {
    //dispatch( ());
    try{
        //const res = await axios.post("https://wisdomconnect.herokuapp.com/api/auth/login", nonConformity);
        const res = await axios.put("/api/nonConformities/update/" + ncId , nonConformity)
        console.log("Resultado de la actualización:  " + JSON.stringify(res, null, 2));
        return 1;

        //res.data.isAdmin && dispatch(loginSuccess(res.data));
        
        //dispatch(loginSuccess(res.data));
    }catch(err){
        //dispatch(loginFailure());
        console.log(err);
        return 0;
    }
}

/*
export const getAllAreas = async () =>{
    try{
        const res = await axios.get("http://localhost:8800/api/generalCatalogue/areas");
        console.log(res.data);
        const data = res.data;
        return data;
    }
    catch (err){
        console.log(err);
    }
}
*/
export const getAllNonConformities = (body) => {
    let result = axios
                .get("/api/nonConformities")
                .then((response) => {
                    return response.data;
                })
                .catch((error) => {
                    return error
                });
    return result;
}

export const getNonConformity = (ncId) => {
    let result = axios
                 .get("/api/nonConformities/find/" + ncId)
                 .then((response) => {
                    return response.data;
                 })
                 .catch((error) => {
                    return error;
                 });
    return result;
        
}

export const getAllAreas = (body) =>{
    let result = axios
                .get("http://localhost:8800/api/generalCatalogue/areas")
                .then((response) => {
                    return response.data;
                })
                .catch((error) => {
                    return error;
                });
    return result;
};

export const getAllActions = (body) =>{
    let result = axios
                .get("http://localhost:8800/api/generalCatalogue/actions")
                .then((response) => {
                    return response.data;
                })
                .catch((error) => {
                    return error;
                });
    return result;
};

export const getAllIncidenceTypes = (body) =>{
    let result = axios
                .get("http://localhost:8800/api/generalCatalogue/incidenceTypes")
                .then((response) => {
                    return response.data;
                })
                .catch((error) => {
                    return error;
                });
    return result;
};

export const getAllStatus = (body) =>{
    let result = axios
                .get("http://localhost:8800/api/generalCatalogue/status")
                .then((response) => {
                    return response.data;
                })
                .catch((error) => {
                    return error;
                });
    return result;
};

export const getAllUsersAuthorize = (body) =>{
    let result = axios
                .get("http://localhost:8800/api/generalCatalogue/userAuthorize")
                .then((response) => {
                    return response.data;
                })
                .catch((error) => {
                    return error;
                });
    return result;
};

