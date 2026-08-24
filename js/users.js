import { getAPI, sendLogMessage, postAPI, otherPostApi, createHeader, createRow, createRowWCheckbox} from "./utils.js";

//// Get a list of users expanded station and skills
export async function getUsers(pageSize=99, pageNumber=1) {
    const apiToCall = `/api/v2/users?pageSize=${pageSize}&pageNumber=${pageNumber}&expand=station,skills&sortOrder=ascending`;
    const response = await getAPI(apiToCall);
    return (response);
}