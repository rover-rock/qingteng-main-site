import CompanyField from "../components/fields/company";
import TimespanField from "../components/fields/timespan";
import AgencyField from '../components/fields/agency'
import getInputCom from '../components/fields/input'
import { JSXElementConstructor } from "react";

const NameFieldMap: { [key: string]: JSXElementConstructor<any> } = {
    'company': CompanyField,
    'timespan': TimespanField,
    'agency': AgencyField
}

export const getFieldCom = ( key:string ) => {
    const [com,name,label] = key.split(':')
    return NameFieldMap[com] ? NameFieldMap[com] : getInputCom({name,label})
}