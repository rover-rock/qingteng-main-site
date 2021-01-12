import CompanyField from "components/fields/company";
import TimespanField from "components/fields/timespan";
import AgencyField from 'components/fields/agency'
import IndustryField from 'components/fields/industry'
import getInputCom from 'components/fields/input'
import KeyAuditTimeSpan from "components/fields/keyaudit_timespan";
import FeibiaoTimeSpan from "components/fields/keyaudit_timespan";
import FeibiaoResultType from "components/fields/fees_result_types";
import FeesResultType from "components/fields/fees_result_types";
import Market from "components/fields/market"
import WendaBanner from "components/fields/tax_wenda_banner"

import { JSXElementConstructor } from "react";

const NameFieldMap: { [key: string]: JSXElementConstructor<any> } = {
    'company': CompanyField,
    'timespan': TimespanField,
    'agency': AgencyField,
    'industry':IndustryField,
    'market':Market,
    'keyaudit_timespan':KeyAuditTimeSpan,
    'feibiao_timespan':FeibiaoTimeSpan,
    'feibiao_result':FeibiaoResultType,
    'fees_result':FeesResultType,
    'wenda_banner':WendaBanner,
}

export const getFieldCom = ( key:string ) => {
    const [com,name,label] = key.split(':')
    return NameFieldMap[com] ? NameFieldMap[com] : getInputCom({name,label})
}